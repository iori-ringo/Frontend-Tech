#!/usr/bin/env bash
# =============================================================================
# React Doctor Stop Hook
# =============================================================================
#
# 概要:
#   Claude Code の Stop hook として動作し、応答完了後にReactコードベースの
#   ヘルスチェックを自動実行する。スコアが閾値未満の場合はblockを返し、
#   Claudeに修正を継続させる。
#
# 導入手順:
#   1. このファイルを対象プロジェクトの .claude/hooks/ にコピー
#      cp react-doctor-check.sh /path/to/project/.claude/hooks/
#   2. 実行権限を付与
#      chmod +x /path/to/project/.claude/hooks/react-doctor-check.sh
#   3. プロジェクトの .claude/settings.json に hook 定義を追加
#      （テンプレート: .claude/templates/settings-react-doctor.json を参照）
#
# 動作フロー:
#   1. stdinからClaude Code Hook のJSON入力を読み取る
#   2. stop_hook_active チェック（無限ループ防止）
#   3. package.json に react が含まれるか判定（非Reactプロジェクトはスキップ）
#   4. npx react-doctor でヘルススコアを取得
#   5. スコアに応じて block / approve を返却
#
# 閾値:
#   - 75未満: block → Claudeに修正を促す
#   - 75以上: approve → スコアを報告するのみ
#   ※ 閾値を変更する場合は下部の THRESHOLD 変数を編集
#
# カスタマイズ:
#   - THRESHOLD: block判定の閾値（デフォルト: 75）
#   - settings.json の timeout: 実行タイムアウト秒数（デフォルト: 120）
#
# 依存ツール:
#   - jq: JSON解析に使用（brew install jq）
#   - npx: react-doctor の実行に使用（Node.js同梱）
#
# =============================================================================

set -euo pipefail

# ---------------------------------------------------------------------------
# 設定値（プロジェクトに応じて変更可能）
# ---------------------------------------------------------------------------
THRESHOLD=75  # この値未満でblockを返す（0-100）

# ---------------------------------------------------------------------------
# stdin から JSON 入力を読み取る
# Claude Code Hook は JSON 形式でコンテキスト情報を渡す
# ---------------------------------------------------------------------------
INPUT="$(cat)"

# ---------------------------------------------------------------------------
# 無限ループ防止
# stop_hook_active === true の場合、このhook自体がblockした後の
# 再実行であるため、即座に終了して1回のみのフィードバックに制限する
# ---------------------------------------------------------------------------
STOP_HOOK_ACTIVE="$(echo "$INPUT" | jq -r '.stop_hook_active // false')"
if [ "$STOP_HOOK_ACTIVE" = "true" ]; then
  exit 0
fi

# ---------------------------------------------------------------------------
# プロジェクトディレクトリの取得
# 環境変数 CWD が未設定の場合は JSON 入力の .cwd を使用
# ---------------------------------------------------------------------------
PROJECT_DIR="${CWD:-$(echo "$INPUT" | jq -r '.cwd // empty')}"
if [ -z "$PROJECT_DIR" ]; then
  exit 0
fi

# ---------------------------------------------------------------------------
# Reactプロジェクト判定
# package.json の dependencies または devDependencies に "react" が
# 含まれない場合はスキップ（非Reactプロジェクトでは実行しない）
# ---------------------------------------------------------------------------
PACKAGE_JSON="$PROJECT_DIR/package.json"
if [ ! -f "$PACKAGE_JSON" ]; then
  exit 0
fi

if ! jq -e '(.dependencies.react // .devDependencies.react) != null' "$PACKAGE_JSON" > /dev/null 2>&1; then
  exit 0
fi

# ---------------------------------------------------------------------------
# React Doctor 実行
# --score: スコアのみ出力
# --yes:   プロンプトをスキップ（非対話環境向け）
# npx -y:  未インストールでも自動インストールして実行
# ---------------------------------------------------------------------------
SCORE_OUTPUT="$(npx -y react-doctor@latest "$PROJECT_DIR" --score --yes 2>/dev/null || true)"

# スコアを数値として抽出（出力の最後に出現する数値を取得）
SCORE="$(echo "$SCORE_OUTPUT" | grep -oE '[0-9]+' | tail -1)"

# スコア取得失敗時（空文字・非数値）は安全にスキップ
if [ -z "$SCORE" ]; then
  exit 0
fi
if ! [[ "$SCORE" =~ ^[0-9]+$ ]]; then
  exit 0
fi

# ---------------------------------------------------------------------------
# スコア判定・結果出力
# Claude Code Hook は JSON 形式のレスポンスを期待する
#   - decision: "block"   → Claudeの応答をブロックし修正を促す
#   - decision: "approve" → 応答を承認しスコアを報告
# ---------------------------------------------------------------------------
if [ "$SCORE" -lt "$THRESHOLD" ]; then
  cat <<EOF
{
  "decision": "block",
  "reason": "React Doctor ヘルススコア: ${SCORE}/100（閾値: ${THRESHOLD}）。スコアが低いため、指摘された問題を修正してください。\n\n以下のコマンドで詳細を確認できます:\nnpx react-doctor@latest \"$PROJECT_DIR\" --yes"
}
EOF
else
  cat <<EOF
{
  "decision": "approve",
  "systemMessage": "React Doctor ヘルススコア: ${SCORE}/100 ✓"
}
EOF
fi
