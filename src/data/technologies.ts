import type { Technology } from "@/types/technology";

export const technologies: Technology[] = [
  {
    slug: "html",
    name: "HTML",
    description: "Webページの構造を定義するマークアップ言語",
    longDescription:
      "HTML (HyperText Markup Language) は、Webページのコンテンツと構造を定義する基盤技術です。セマンティックな要素を使って、アクセシブルで検索エンジンに最適化されたページを構築する方法を学びます。",
    icon: "FileCode2",
    color: "oklch(0.55 0.15 25)",
    officialUrl: "https://developer.mozilla.org/ja/docs/Web/HTML",
    levels: [
      {
        level: "beginner",
        label: "初級",
        description: "HTMLの基本的な文書構造とタグを学びます。",
        sections: [
          {
            id: "html-b-structure",
            title: "文書構造",
            description: "HTMLドキュメントの骨格を理解する",
            topics: [
              {
                id: "html-doctype",
                title: "<!DOCTYPE html> / <html>",
                subtitle: "文書宣言とルート要素",
                description: "すべてのHTMLドキュメントは<!DOCTYPE html>宣言から始まる。これによりブラウザが標準モードでレンダリングする。<html lang=\"ja\">でルート要素と言語を指定し、中に<head>と<body>を配置する。",
                code: {
                  html: '<!DOCTYPE html>\n<html lang="ja">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>はじめてのHTML</title>\n</head>\n<body>\n  <h1>Hello, World!</h1>\n  <p>これは最初のHTMLページです。</p>\n</body>\n</html>',
                },
                tags: ["DOCTYPE", "html", "head", "body", "lang"],
              },
              {
                id: "html-div",
                title: "<div>",
                subtitle: "汎用ブロックコンテナ",
                description: "意味を持たない汎用のブロック要素。CSSレイアウトのためにグループ化したい時に使う。セマンティックなタグ（header, nav, main等）で代替できる場合はそちらを優先する。",
                code: {
                  html: '<div class="card">\n  <h2>カードタイトル</h2>\n  <p>カードの内容です。</p>\n</div>\n\n<div id="notice">\n  <p>お知らせエリア</p>\n</div>',
                },
                tags: ["div", "ブロック要素", "グループ化"],
              },
              {
                id: "html-class-id",
                title: "class / id 属性",
                subtitle: "要素の識別",
                description: "class属性は複数の要素に同じ名前を付けられる（CSSやJSで一括操作）。id属性はページ内で一意（1つだけ）。classはスタイリング、idはページ内リンクやJSの要素特定に使う。",
                code: {
                  html: '<p class="highlight">classは複数の要素に使える</p>\n<p class="highlight">同じclassを持つ別の要素</p>\n\n<p id="unique">idはページ内で一意</p>\n\n<a href="#unique">↑ のid要素へジャンプ</a>',
                },
                tags: ["class", "id", "属性", "セレクタ"],
              },
            ],
          },
          {
            id: "html-b-text",
            title: "テキスト・見出し",
            description: "テキストコンテンツを構造化するタグ",
            topics: [
              {
                id: "html-h1-h6",
                title: "<h1> 〜 <h6>",
                subtitle: "見出しタグ",
                description: "ページの見出しを定義するタグ。h1が最も重要で、h6が最も低い階層。通常はページの主要見出しとしてh1を1つ使い、内容の階層に応じてh2→h3…と順序立てて使う。",
                code: {
                  html: "<h1>見出しレベル1</h1>\n<h2>見出しレベル2</h2>\n<h3>見出しレベル3</h3>\n<h4>見出しレベル4</h4>\n<h5>見出しレベル5</h5>\n<h6>見出しレベル6</h6>",
                },
                tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
              },
              {
                id: "html-p",
                title: "<p>",
                subtitle: "段落タグ",
                description: "テキストの段落を定義するタグ。ブロック要素で、前後に自動的にマージン（余白）が入る。テキストを論理的な段落に区切ることで、読みやすさとアクセシビリティが向上する。",
                code: {
                  html: "<p>これは最初の段落です。段落タグで囲むことで、テキストが論理的にまとまります。</p>\n<p>これは2番目の段落です。段落間には自動的に余白が入ります。</p>",
                },
                tags: ["p", "段落", "ブロック要素"],
              },
              {
                id: "html-br-hr",
                title: "<br> / <hr>",
                subtitle: "改行・水平線",
                description: "<br>はテキスト内の改行、<hr>はテーマの区切りを示す水平線。どちらも閉じタグ不要の空要素。<br>の多用は避け、段落分けには<p>を使う。",
                code: {
                  html: "<p>1行目のテキスト<br>2行目のテキスト（br改行）</p>\n<hr>\n<p>水平線の下のテキスト</p>",
                },
                tags: ["br", "hr", "改行", "水平線"],
              },
              {
                id: "html-strong-em",
                title: "<strong> / <em>",
                subtitle: "強調タグ",
                description: "<strong>は重要なテキスト（太字で表示）、<em>は強調テキスト（斜体で表示）。見た目だけでなく意味的な違いがあり、スクリーンリーダーが読み上げ方を変える。",
                code: {
                  html: "<p>これは<strong>重要なテキスト</strong>です。</p>\n<p>これは<em>強調されたテキスト</em>です。</p>\n<p><strong>重要</strong>かつ<em>強調</em>の組み合わせも可能です。</p>",
                },
                tags: ["strong", "em", "太字", "斜体", "強調"],
              },
              {
                id: "html-span",
                title: "<span>",
                subtitle: "インラインコンテナ",
                description: "意味を持たない汎用のインライン要素。classと組み合わせて、テキストの一部にスタイルを当てる時に使う。ブロック要素の<div>のインライン版。",
                code: {
                  html: '<p>この文章の<span class="accent">この部分だけ</span>色を変えています。</p>\n<p>価格: <span class="price">¥1,980</span>（税込）</p>',
                  css: '.accent { color: teal; font-weight: bold; }\n.price { font-size: 1.5em; color: crimson; }',
                },
                tags: ["span", "インライン", "class"],
              },
            ],
          },
          {
            id: "html-b-list",
            title: "リスト",
            description: "項目の一覧を構造化するタグ",
            topics: [
              {
                id: "html-ul",
                title: "<ul> / <li>",
                subtitle: "順序なしリスト",
                description: "箇条書きリストを作成するタグ。各項目は<li>で囲む。デフォルトでは黒丸（●）のマーカーが付く。ナビゲーションメニューにもよく使われる。",
                code: {
                  html: "<ul>\n  <li>りんご</li>\n  <li>バナナ</li>\n  <li>みかん</li>\n</ul>",
                },
                tags: ["ul", "li", "箇条書き"],
              },
              {
                id: "html-ol",
                title: "<ol> / <li>",
                subtitle: "順序付きリスト",
                description: "番号付きリストを作成するタグ。手順や順位など、順序に意味があるリストに使う。start属性で開始番号、reversed属性で逆順にできる。",
                code: {
                  html: "<ol>\n  <li>卵を割る</li>\n  <li>かき混ぜる</li>\n  <li>フライパンで焼く</li>\n</ol>",
                },
                tags: ["ol", "li", "番号付き", "start"],
              },
              {
                id: "html-dl",
                title: "<dl> / <dt> / <dd>",
                subtitle: "定義リスト",
                description: "用語と説明のペアを並べるリスト。<dt>が用語名、<dd>がその説明。FAQ、用語集、メタデータの表示に適している。",
                code: {
                  html: "<dl>\n  <dt>HTML</dt>\n  <dd>Webページの構造を定義する言語</dd>\n  <dt>CSS</dt>\n  <dd>Webページの見た目を制御する言語</dd>\n</dl>",
                },
                tags: ["dl", "dt", "dd", "定義リスト"],
              },
            ],
          },
          {
            id: "html-b-link-media",
            title: "リンク・画像・テーブル",
            description: "外部リソースとの接続やデータ表示",
            topics: [
              {
                id: "html-a",
                title: "<a>",
                subtitle: "リンクタグ",
                description: "ハイパーリンクを作成するタグ。href属性でリンク先を指定。target=\"_blank\"で新しいタブで開く。外部リンクにはrel=\"noopener noreferrer\"を付ける。",
                code: {
                  html: '<a href="https://example.com">通常のリンク</a>\n<br>\n<a href="https://example.com" target="_blank" rel="noopener noreferrer">新しいタブで開くリンク</a>\n<br>\n<a href="#html-h1-h6">ページ内リンク（#id指定）</a>\n<br>\n<a href="mailto:test@example.com">メールリンク</a>',
                },
                tags: ["a", "href", "target", "rel", "リンク"],
              },
              {
                id: "html-img",
                title: "<img>",
                subtitle: "画像タグ",
                description: "画像を埋め込む空要素タグ。alt属性には画像の代替テキストを指定する。装飾目的で内容を持たない画像はalt=\"\"とする。width/heightを指定するとレイアウトシフトを抑えやすい。",
                code: {
                  html: '<img src="https://via.placeholder.com/200x100/0d9488/ffffff?text=Sample" alt="サンプル画像" width="200" height="100">\n<br>\n<img src="invalid-url.jpg" alt="この代替テキストが表示されます" width="200" height="100">',
                },
                tags: ["img", "alt", "src", "width", "height"],
              },
              {
                id: "html-table",
                title: "<table>",
                subtitle: "テーブルタグ",
                description: "データを表形式で表示するタグ。<thead>にヘッダー行、<tbody>にデータ行を配置。<th>はヘッダーセル、<td>はデータセル。",
                code: {
                  html: '<table border="1" cellpadding="8" cellspacing="0">\n  <thead>\n    <tr>\n      <th>名前</th>\n      <th>役割</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>HTML</td>\n      <td>構造</td>\n    </tr>\n    <tr>\n      <td>CSS</td>\n      <td>装飾</td>\n    </tr>\n  </tbody>\n</table>',
                },
                tags: ["table", "thead", "tbody", "tr", "th", "td"],
              },
            ],
          },
          {
            id: "html-b-attributes",
            title: "グローバル属性",
            description: "ほぼ全てのHTML要素に指定できる共通属性",
            topics: [
              {
                id: "html-hidden-title",
                title: "hidden / title",
                subtitle: "非表示・ツールチップ",
                description: "hidden属性は要素を非表示にする（display:noneと同等）。title属性はマウスホバー時にツールチップを表示する。hidden属性はboolean属性で、指定するだけで有効になる。",
                code: {
                  html: '<p>この段落は表示されます</p>\n<p hidden>この段落はhiddenで非表示です</p>\n<p title="これがツールチップです">この文にマウスを乗せてください</p>\n<abbr title="HyperText Markup Language">HTML</abbr>は略語です',
                },
                tags: ["hidden", "title", "ツールチップ", "boolean属性"],
              },
              {
                id: "html-data-attr",
                title: "data-* 属性",
                subtitle: "カスタムデータ属性",
                description: "data-で始まる独自の属性を要素に付与できる。JavaScriptからdataset APIで読み取れる。CSSからも属性セレクタでアクセス可能。HTML仕様に違反せず独自データを持たせる公式な方法。",
                code: {
                  html: '<ul>\n  <li data-category="fruit" data-price="200">りんご</li>\n  <li data-category="fruit" data-price="150">バナナ</li>\n  <li data-category="vegetable" data-price="100">にんじん</li>\n</ul>\n\n<button data-action="delete" data-id="42" style="padding:8px 16px;background:crimson;color:white;border:none;border-radius:4px;">削除</button>\n\n<p style="font-size:12px;color:#666;margin-top:8px;">↑ JS: element.dataset.action → "delete"</p>',
                },
                tags: ["data-*", "dataset", "カスタム属性"],
              },
              {
                id: "html-tabindex",
                title: "tabindex",
                subtitle: "タブ順序",
                description: "キーボードのTabキーでのフォーカス順序を制御。tabindex=\"0\"は通常のDOM順でフォーカス可能にする。tabindex=\"-1\"はTabでは飛ばすがJSでフォーカス可能。tabindex=\"1以上\"は非推奨。",
                code: {
                  html: '<div tabindex="0" style="padding:12px;border:2px solid #ccc;border-radius:4px;margin-bottom:8px;">tabindex="0": Tabでフォーカスできるdiv</div>\n<div tabindex="-1" style="padding:12px;border:2px solid #ccc;border-radius:4px;margin-bottom:8px;">tabindex="-1": Tabでは飛ばされる</div>\n<button style="padding:8px 16px;border:1px solid #ccc;border-radius:4px;">通常のボタン（自動フォーカス可能）</button>\n<p style="font-size:12px;color:#666;margin-top:8px;">↑ Tabキーで順番にフォーカスしてみてください</p>',
                },
                tags: ["tabindex", "フォーカス", "キーボード操作"],
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        label: "中級",
        description: "セマンティックHTML、フォーム、属性、イベントを学びます。",
        sections: [
          {
            id: "html-i-semantic",
            title: "セマンティック要素",
            description: "意味のある構造を持つHTML5タグ",
            topics: [
              {
                id: "html-header-footer",
                title: "<header> / <footer>",
                subtitle: "ヘッダー・フッター",
                description: "ページまたはセクションの導入部（header）と末尾情報（footer）を定義するタグ。ページ全体だけでなく、article内でも使える。",
                code: {
                  html: '<header style="background:#f0fafa;padding:16px;border-bottom:2px solid teal;">\n  <h1>サイトタイトル</h1>\n  <nav>ナビゲーション</nav>\n</header>\n<main style="padding:16px;">\n  <p>メインコンテンツ</p>\n</main>\n<footer style="background:#f0fafa;padding:16px;border-top:2px solid teal;">\n  <p>&copy; 2026 サイト名</p>\n</footer>',
                },
                tags: ["header", "footer", "セマンティック"],
              },
              {
                id: "html-nav",
                title: "<nav>",
                subtitle: "ナビゲーション",
                description: "主要なナビゲーションリンクのセクションを定義。スクリーンリーダーがナビゲーション領域として認識する。aria-labelで複数のnavを区別できる。",
                code: {
                  html: '<nav aria-label="メインナビゲーション" style="background:#f0fafa;padding:12px;">\n  <ul style="display:flex;gap:16px;list-style:none;padding:0;margin:0;">\n    <li><a href="#home">ホーム</a></li>\n    <li><a href="#about">概要</a></li>\n    <li><a href="#contact">お問い合わせ</a></li>\n  </ul>\n</nav>',
                },
                tags: ["nav", "aria-label", "ナビゲーション"],
              },
              {
                id: "html-main-section-article",
                title: "<main> / <section> / <article>",
                subtitle: "コンテンツ構造",
                description: "<main>はページの主要コンテンツ（1ページに1つ）。<section>はテーマ別のグループ。<article>は独立した自己完結コンテンツ（ブログ記事、コメントなど）。",
                code: {
                  html: '<main>\n  <section style="border:1px dashed teal;padding:12px;margin-bottom:12px;">\n    <h2>セクション1</h2>\n    <article style="border:1px solid #ccc;padding:8px;margin-top:8px;">\n      <h3>記事タイトル</h3>\n      <p>独立したコンテンツ</p>\n    </article>\n  </section>\n</main>',
                },
                tags: ["main", "section", "article"],
              },
              {
                id: "html-aside",
                title: "<aside>",
                subtitle: "補足コンテンツ",
                description: "本文から切り離しても成立する補足的なコンテンツ。サイドバー、関連記事、広告などに使う。",
                code: {
                  html: '<div style="display:flex;gap:16px;">\n  <main style="flex:1;border:1px solid #ccc;padding:12px;">\n    <h2>メイン記事</h2>\n    <p>主要なコンテンツ</p>\n  </main>\n  <aside style="width:200px;background:#f0fafa;padding:12px;border-radius:8px;">\n    <h3>関連情報</h3>\n    <ul><li>関連記事1</li><li>関連記事2</li></ul>\n  </aside>\n</div>',
                },
                tags: ["aside", "サイドバー", "補足"],
              },
              {
                id: "html-figure",
                title: "<figure> / <figcaption>",
                subtitle: "図版とキャプション",
                description: "画像、図表、コード例などの自己完結コンテンツとそのキャプションをまとめるタグ。",
                code: {
                  html: '<figure style="border:1px solid #ccc;padding:12px;margin:0;display:inline-block;">\n  <img src="https://via.placeholder.com/250x120/0d9488/ffffff?text=Chart" alt="売上グラフ" width="250" height="120">\n  <figcaption style="text-align:center;margin-top:8px;color:#666;font-size:14px;">図1: 売上推移</figcaption>\n</figure>',
                },
                tags: ["figure", "figcaption", "キャプション"],
              },
              {
                id: "html-details-summary",
                title: "<details> / <summary>",
                subtitle: "折りたたみコンテンツ",
                description: "JavaScriptなしで折りたたみ可能なコンテンツを実装できるネイティブ要素。<summary>がクリック可能な見出し。open属性で初期展開を制御。",
                code: {
                  html: '<details style="border:1px solid #ccc;border-radius:4px;padding:8px;">\n  <summary style="cursor:pointer;font-weight:bold;">Q. HTMLとは？</summary>\n  <p style="margin-top:8px;">A. Webページの構造を定義するマークアップ言語です。</p>\n</details>\n<details open style="border:1px solid #ccc;border-radius:4px;padding:8px;margin-top:8px;">\n  <summary style="cursor:pointer;font-weight:bold;">Q. open属性を付けると？</summary>\n  <p style="margin-top:8px;">A. 最初から展開された状態で表示されます。</p>\n</details>',
                },
                tags: ["details", "summary", "open", "アコーディオン"],
              },
            ],
          },
          {
            id: "html-i-form",
            title: "フォーム",
            description: "ユーザー入力を受け取るフォーム要素",
            topics: [
              {
                id: "html-form",
                title: "<form> / <fieldset> / <legend>",
                subtitle: "フォーム構造",
                description: "<form>はフォーム全体を囲む要素。action属性で送信先、method属性で送信方法（GET/POST）を指定。<fieldset>で入力グループを囲み、<legend>でグループ名を付ける。",
                code: {
                  html: '<form action="/contact" method="post">\n  <fieldset style="border:1px solid #ccc;padding:16px;border-radius:4px;">\n    <legend style="font-weight:bold;">お問い合わせ</legend>\n    <label for="name">名前</label><br>\n    <input id="name" name="name" type="text" autocomplete="name" required style="padding:8px;border:1px solid #ccc;border-radius:4px;width:250px;margin:4px 0 12px;">\n    <br>\n    <button type="submit" style="padding:8px 16px;background:teal;color:white;border:none;border-radius:4px;">送信</button>\n  </fieldset>\n</form>',
                },
                tags: ["form", "fieldset", "legend", "action", "method"],
              },
              {
                id: "html-input",
                title: "<input>",
                subtitle: "入力要素",
                description: "単一行入力のフォーム要素。type属性でtext/email/password/number等を指定。label要素と関連付け（for/id）でアクセシビリティ向上。送信に必要な項目にはname属性が必須。placeholderはラベルの代替にはならない。",
                code: {
                  html: '<div style="margin-bottom:12px;">\n  <label for="username">名前:</label><br>\n  <input type="text" id="username" name="username" placeholder="例: 山田太郎" required style="padding:8px;border:1px solid #ccc;border-radius:4px;width:250px;">\n</div>\n<div style="margin-bottom:12px;">\n  <label for="email">メール:</label><br>\n  <input type="email" id="email" name="email" placeholder="例: test@example.com" required style="padding:8px;border:1px solid #ccc;border-radius:4px;width:250px;">\n</div>\n<div style="margin-bottom:12px;">\n  <label for="age">年齢:</label><br>\n  <input type="number" id="age" name="age" min="0" max="150" style="padding:8px;border:1px solid #ccc;border-radius:4px;width:100px;">\n</div>',
                },
                tags: ["input", "type", "name", "required", "label", "placeholder"],
              },
              {
                id: "html-checkbox-radio",
                title: '<input type="checkbox"> / <input type="radio">',
                subtitle: "チェックボックス・ラジオボタン",
                description: "checkboxは複数選択可、radioはグループ内で1つだけ選択可。radioは同じname属性でグループ化する。labelで囲むかfor/idで関連付ける。",
                code: {
                  html: '<fieldset style="border:1px solid #ccc;padding:12px;border-radius:4px;margin-bottom:12px;">\n  <legend>好きな果物（複数可）</legend>\n  <label><input type="checkbox" name="fruit" value="apple"> りんご</label><br>\n  <label><input type="checkbox" name="fruit" value="banana"> バナナ</label><br>\n  <label><input type="checkbox" name="fruit" value="orange"> みかん</label>\n</fieldset>\n<fieldset style="border:1px solid #ccc;padding:12px;border-radius:4px;">\n  <legend>性別（1つ選択）</legend>\n  <label><input type="radio" name="gender" value="male"> 男性</label><br>\n  <label><input type="radio" name="gender" value="female"> 女性</label><br>\n  <label><input type="radio" name="gender" value="other"> その他</label>\n</fieldset>',
                },
                tags: ["checkbox", "radio", "name", "value", "label"],
              },
              {
                id: "html-select",
                title: "<select> / <textarea>",
                subtitle: "選択・複数行入力",
                description: "<select>はドロップダウン選択肢。<optgroup>でグループ化可能。<textarea>は複数行テキスト入力で、rows/colsでサイズを指定。",
                code: {
                  html: '<label for="lang">言語:</label>\n<select id="lang" name="lang" style="padding:8px;border:1px solid #ccc;border-radius:4px;">\n  <option value="">-- 選択 --</option>\n  <optgroup label="フロントエンド">\n    <option value="html">HTML</option>\n    <option value="css">CSS</option>\n  </optgroup>\n</select>\n<br><br>\n<label for="msg">メッセージ:</label><br>\n<textarea id="msg" name="message" rows="3" cols="40" style="padding:8px;border:1px solid #ccc;border-radius:4px;">初期テキスト</textarea>',
                },
                tags: ["select", "option", "optgroup", "textarea"],
              },
              {
                id: "html-button",
                title: "<button>",
                subtitle: "ボタン",
                description: "クリック可能なボタン。type属性でsubmit（送信）、reset（リセット）、button（カスタム動作）を指定。<input type=\"submit\">より柔軟で、中にHTMLを含められる。",
                code: {
                  html: '<button type="button" style="padding:8px 16px;background:teal;color:white;border:none;border-radius:4px;cursor:pointer;">通常ボタン</button>\n<button type="submit" style="padding:8px 16px;background:#333;color:white;border:none;border-radius:4px;cursor:pointer;margin-left:8px;">送信ボタン</button>\n<button type="button" disabled style="padding:8px 16px;border-radius:4px;margin-left:8px;">無効なボタン</button>',
                },
                tags: ["button", "type", "submit", "disabled"],
              },
            ],
          },
          {
            id: "html-i-form-attrs",
            title: "フォーム属性",
            description: "入力要素の制約・振る舞いを制御する属性",
            topics: [
              {
                id: "html-required-disabled",
                title: "required / disabled / readonly",
                subtitle: "入力制約",
                description: "required: 入力必須（空だと送信不可）。disabled: 操作不可＋送信値に含まれない。readonly: 編集不可だが送信値に含まれる。全てboolean属性で、指定するだけで有効。",
                code: {
                  html: '<form style="display:flex;flex-direction:column;gap:8px;max-width:300px;">\n  <label>必須項目:\n    <input type="text" required placeholder="空だと送信不可" style="padding:6px;border:1px solid #ccc;border-radius:4px;width:100%;">\n  </label>\n  <label>無効化:\n    <input type="text" disabled value="操作できません" style="padding:6px;border:1px solid #ccc;border-radius:4px;width:100%;">\n  </label>\n  <label>読み取り専用:\n    <input type="text" readonly value="編集不可・送信には含まれる" style="padding:6px;border:1px solid #ccc;border-radius:4px;width:100%;">\n  </label>\n  <button type="submit" style="padding:8px;background:teal;color:white;border:none;border-radius:4px;">送信テスト</button>\n</form>',
                },
                tags: ["required", "disabled", "readonly", "boolean属性"],
              },
              {
                id: "html-autocomplete-pattern",
                title: "autocomplete / pattern / min / max",
                subtitle: "入力補助・バリデーション",
                description: "autocomplete: ブラウザの自動補完候補を指定（name, email, tel等）。pattern: 正規表現でバリデーション。min/max: 数値・日付の範囲制限。step: 増減単位。minlength/maxlength: 文字数制限。",
                code: {
                  html: '<form style="display:flex;flex-direction:column;gap:8px;max-width:300px;">\n  <label>郵便番号 (pattern):\n    <input type="text" pattern="[0-9]{3}-[0-9]{4}" placeholder="123-4567" title="000-0000形式" style="padding:6px;border:1px solid #ccc;border-radius:4px;width:100%;">\n  </label>\n  <label>数量 (min/max/step):\n    <input type="number" min="1" max="100" step="1" value="1" style="padding:6px;border:1px solid #ccc;border-radius:4px;width:100%;">\n  </label>\n  <label>メール (autocomplete):\n    <input type="email" autocomplete="email" placeholder="自動補完が効く" style="padding:6px;border:1px solid #ccc;border-radius:4px;width:100%;">\n  </label>\n  <label>パスワード (minlength):\n    <input type="password" minlength="8" maxlength="32" placeholder="8〜32文字" style="padding:6px;border:1px solid #ccc;border-radius:4px;width:100%;">\n  </label>\n  <button type="submit" style="padding:8px;background:teal;color:white;border:none;border-radius:4px;">送信テスト</button>\n</form>',
                },
                tags: ["autocomplete", "pattern", "min", "max", "step", "minlength"],
              },
            ],
          },
          {
            id: "html-i-events",
            title: "イベント属性",
            description: "ユーザー操作に反応するイベントハンドラ",
            topics: [
              {
                id: "html-onclick-events",
                title: "onclick / onchange / oninput",
                subtitle: "基本イベント",
                description: "HTMLではonclick等のイベント属性で動作を指定できる。onclick: クリック時。onchange: 値が確定した時（入力欄からフォーカスが外れた時）。oninput: 値が変わるたびにリアルタイム発火。onsubmit: フォーム送信時。",
                code: {
                  html: '<button onclick="this.textContent=\'クリックされた！\'" style="padding:8px 16px;background:teal;color:white;border:none;border-radius:4px;cursor:pointer;margin-bottom:8px;">クリックしてください</button>\n<br>\n<input type="text" oninput="document.getElementById(\'preview\').textContent=this.value" placeholder="入力するとリアルタイム反映" style="padding:8px;border:1px solid #ccc;border-radius:4px;width:250px;">\n<p id="preview" style="color:teal;font-weight:bold;min-height:1.5em;">（ここに表示）</p>\n<select onchange="document.getElementById(\'selected\').textContent=this.value" style="padding:8px;border:1px solid #ccc;border-radius:4px;">\n  <option value="">選択してください</option>\n  <option value="HTML">HTML</option>\n  <option value="CSS">CSS</option>\n</select>\n<p id="selected" style="color:teal;">（選択結果）</p>',
                },
                tags: ["onclick", "onchange", "oninput", "onsubmit", "イベント"],
              },
              {
                id: "html-focus-keyboard-events",
                title: "onfocus / onblur / onkeydown",
                subtitle: "フォーカス・キーボードイベント",
                description: "onfocus: 要素にフォーカスが当たった時。onblur: フォーカスが外れた時。onkeydown: キーが押された時。onkeyup: キーが離された時。フォームのバリデーションやショートカットキーに使われる。",
                code: {
                  html: '<input type="text" onfocus="this.style.borderColor=\'teal\';this.style.boxShadow=\'0 0 0 2px rgba(13,148,136,0.3)\'" onblur="this.style.borderColor=\'#ccc\';this.style.boxShadow=\'none\'" placeholder="フォーカスで色が変わる" style="padding:8px;border:2px solid #ccc;border-radius:4px;width:250px;outline:none;transition:all 0.2s;">\n<br><br>\n<input type="text" onkeydown="document.getElementById(\'key-display\').textContent=\'押されたキー: \'+event.key" placeholder="キーを押してください" style="padding:8px;border:1px solid #ccc;border-radius:4px;width:250px;">\n<p id="key-display" style="color:teal;font-family:monospace;">（キー情報）</p>',
                },
                tags: ["onfocus", "onblur", "onkeydown", "onkeyup", "フォーカス"],
              },
              {
                id: "html-mouse-events",
                title: "onmouseover / onmouseout / onload",
                subtitle: "マウス・読み込みイベント",
                description: "onmouseover: マウスが要素に乗った時。onmouseout: マウスが離れた時。onload: 画像やページの読み込み完了時。onerror: 読み込みエラー時。onscroll: スクロール時。onresize: ウィンドウサイズ変更時。",
                code: {
                  html: '<div onmouseover="this.style.background=\'#0d9488\';this.style.color=\'white\'" onmouseout="this.style.background=\'#f0fafa\';this.style.color=\'#333\'" style="padding:16px;background:#f0fafa;border-radius:8px;text-align:center;cursor:pointer;transition:all 0.2s;margin-bottom:8px;">マウスを乗せてください</div>\n<img src="https://via.placeholder.com/200x60/0d9488/ffffff?text=onload" alt="onloadテスト" onload="this.nextElementSibling.textContent=\'画像読み込み完了！\'" onerror="this.nextElementSibling.textContent=\'読み込みエラー\'" width="200" height="60">\n<p style="color:teal;font-size:13px;">（読み込み状態）</p>',
                },
                tags: ["onmouseover", "onmouseout", "onload", "onerror"],
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        label: "上級",
        description: "アクセシビリティ、メタデータ、React/TSXでの属性の違いを学びます。",
        sections: [
          {
            id: "html-a-a11y",
            title: "アクセシビリティ (ARIA)",
            description: "支援技術に対応したマークアップ。原則: ネイティブHTMLで表現できるならそちらを優先し、ARIAは補助的に使う。",
            topics: [
              {
                id: "html-aria-label",
                title: "aria-label / aria-labelledby",
                subtitle: "ARIAラベル",
                description: "視覚的にラベルがない要素にアクセシブルな名前を付ける属性。aria-labelは直接テキストを指定、aria-labelledbyは別要素のidを参照。ネイティブの<label>で対応できる場合はそちらを優先する。",
                code: {
                  html: '<button aria-label="メニューを閉じる" style="padding:8px 12px;border:1px solid #ccc;border-radius:4px;">✕</button>\n<br><br>\n<h2 id="section-title">お知らせ</h2>\n<nav aria-labelledby="section-title" style="background:#f0fafa;padding:12px;border-radius:4px;">\n  <ul style="margin:0;padding-left:20px;"><li>お知らせ1</li><li>お知らせ2</li></ul>\n</nav>',
                },
                tags: ["aria-label", "aria-labelledby", "ARIA"],
              },
              {
                id: "html-aria-describedby",
                title: "aria-describedby",
                subtitle: "補足説明の関連付け",
                description: "要素に対する追加の説明テキストを関連付ける属性。フォームのエラーメッセージやヘルプテキストとの紐付けに最適。aria-labelledbyが「名前」を付けるのに対し、aria-describedbyは「説明」を付ける。",
                code: {
                  html: '<label for="pw">パスワード:</label><br>\n<input type="password" id="pw" aria-describedby="pw-help pw-error" style="padding:8px;border:1px solid #ccc;border-radius:4px;width:250px;">\n<p id="pw-help" style="font-size:13px;color:#666;margin:4px 0;">8文字以上で英数字を含めてください</p>\n<p id="pw-error" style="font-size:13px;color:crimson;margin:4px 0;" role="alert">パスワードが短すぎます</p>',
                },
                tags: ["aria-describedby", "エラーメッセージ", "ヘルプテキスト"],
              },
              {
                id: "html-aria-live",
                title: "aria-live / role=\"alert\"",
                subtitle: "ライブリージョン",
                description: "動的に変化するコンテンツをスクリーンリーダーに通知する属性。polite（現在の読み上げ後に通知）とassertive（即座に通知）がある。role=\"alert\"はaria-live=\"assertive\"に近い挙動をする。",
                code: {
                  html: '<div aria-live="polite" style="padding:12px;background:#f0fafa;border-radius:4px;border-left:4px solid teal;">\n  このエリアの内容が変わると、スクリーンリーダーが読み上げます（polite）。\n</div>\n<br>\n<div role="alert" style="padding:12px;background:#fff0f0;border-radius:4px;border-left:4px solid crimson;">\n  role="alert" はエラーメッセージに最適。即座に通知されます。\n</div>',
                },
                tags: ["aria-live", "polite", "assertive", "role", "alert"],
              },
            ],
          },
          {
            id: "html-a-meta",
            title: "メタデータ・SEO",
            description: "検索エンジンとソーシャルメディア向けの最適化",
            topics: [
              {
                id: "html-meta-tags",
                title: "<meta>",
                subtitle: "メタタグ",
                description: "ドキュメントのメタ情報を指定するタグ。charset（文字コード）、viewport（レスポンシブ設定）、description（ページ説明、120〜160文字程度を目安）が特に重要。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.6;">\n  &lt;meta charset="UTF-8"&gt;<br>\n  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;<br>\n  &lt;meta name="description" content="ページの説明文（120〜160文字程度を目安）"&gt;<br>\n  &lt;meta name="robots" content="index, follow"&gt;<br>\n  &lt;title&gt;ページタイトル&lt;/title&gt;\n</div>',
                },
                tags: ["meta", "charset", "viewport", "description", "SEO"],
              },
              {
                id: "html-ogp",
                title: "OGP (Open Graph)",
                subtitle: "ソーシャルメタデータ",
                description: "SNSでシェアされた時の表示をコントロールするmetaタグ。og:title, og:description, og:imageが主要プロパティ。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.6;">\n  &lt;meta property="og:title" content="ページタイトル"&gt;<br>\n  &lt;meta property="og:description" content="説明"&gt;<br>\n  &lt;meta property="og:image" content="https://example.com/img.png"&gt;<br>\n  &lt;meta property="og:url" content="https://example.com"&gt;\n</div>\n<div style="margin-top:12px;border:1px solid #ccc;border-radius:8px;overflow:hidden;max-width:400px;">\n  <div style="background:#0d9488;height:100px;display:flex;align-items:center;justify-content:center;color:white;">og:image</div>\n  <div style="padding:12px;">\n    <div style="font-weight:bold;">ページタイトル</div>\n    <div style="color:#666;font-size:13px;">説明</div>\n    <div style="color:#999;font-size:12px;">example.com</div>\n  </div>\n</div>',
                },
                tags: ["OGP", "og:title", "og:image", "SNS"],
              },
              {
                id: "html-picture-source",
                title: "<picture> / <source>",
                subtitle: "レスポンシブ画像",
                description: "<picture>要素で画面サイズやフォーマットに応じた画像を出し分ける。<source>のmedia属性で条件を、type属性でフォーマット（WebP等）を指定。最後の<img>がフォールバック。",
                code: {
                  html: '<picture>\n  <source media="(min-width:800px)" srcset="https://via.placeholder.com/400x120/0d9488/ffffff?text=Desktop" type="image/png">\n  <source media="(min-width:400px)" srcset="https://via.placeholder.com/250x120/14b8a6/ffffff?text=Tablet" type="image/png">\n  <img src="https://via.placeholder.com/150x120/5eead4/333333?text=Mobile" alt="レスポンシブ画像の例" width="400" height="120" style="max-width:100%;height:auto;">\n</picture>',
                },
                tags: ["picture", "source", "media", "srcset", "WebP"],
              },
            ],
          },
          {
            id: "html-a-react",
            title: "React (TSX) での属性の違い",
            description: "HTMLの属性がReact/TSXでどう変わるかを理解する",
            topics: [
              {
                id: "html-react-classname",
                title: "className / htmlFor",
                subtitle: "予約語の回避",
                description: "JSXではJavaScriptの予約語と衝突するため、class→className、for→htmlForに変更する。style属性もオブジェクト形式（キャメルケース）で指定する。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">// HTML</span><br>\n&lt;div <span style="color:#f38ba8;">class</span>="card"&gt;...&lt;/div&gt;<br>\n&lt;label <span style="color:#f38ba8;">for</span>="name"&gt;...&lt;/label&gt;<br>\n&lt;div <span style="color:#f38ba8;">style</span>="background-color: red;"&gt;<br><br>\n<span style="color:#89b4fa;">// React TSX</span><br>\n&lt;div <span style="color:#a6e3a1;">className</span>="card"&gt;...&lt;/div&gt;<br>\n&lt;label <span style="color:#a6e3a1;">htmlFor</span>="name"&gt;...&lt;/label&gt;<br>\n&lt;div <span style="color:#a6e3a1;">style</span>={{ backgroundColor: "red" }}&gt;\n</div>',
                },
                tags: ["className", "htmlFor", "style", "JSX", "予約語"],
              },
              {
                id: "html-react-events",
                title: "onClick / onChange / onSubmit",
                subtitle: "イベントハンドラ (camelCase)",
                description: "HTMLのイベント属性(onclick等)は、ReactではcamelCase(onClick等)に変わる。文字列ではなく関数を渡す。onChangeはinputの値が変わるたびに発火する（HTMLのonchangeとは挙動が異なる）。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">// HTML</span><br>\n&lt;button <span style="color:#f38ba8;">onclick</span>="handleClick()"&gt;<br><br>\n<span style="color:#89b4fa;">// React TSX</span><br>\n&lt;button <span style="color:#a6e3a1;">onClick</span>={handleClick}&gt;<br>\n&lt;button <span style="color:#a6e3a1;">onClick</span>={(e) =&gt; console.log(e)}&gt;<br><br>\n<span style="color:#89b4fa;">// よく使うイベント</span><br>\n<span style="color:#a6e3a1;">onClick</span>  → クリック<br>\n<span style="color:#a6e3a1;">onChange</span> → 値変更（リアルタイム）<br>\n<span style="color:#a6e3a1;">onSubmit</span> → フォーム送信<br>\n<span style="color:#a6e3a1;">onFocus</span>  → フォーカス取得<br>\n<span style="color:#a6e3a1;">onBlur</span>   → フォーカス喪失<br>\n<span style="color:#a6e3a1;">onKeyDown</span> → キー押下\n</div>',
                },
                tags: ["onClick", "onChange", "onSubmit", "camelCase", "React"],
              },
              {
                id: "html-react-controlled",
                title: "value + onChange / defaultValue",
                subtitle: "制御・非制御コンポーネント",
                description: "Reactのinputはvalue+onChangeで「制御コンポーネント」（React側で値を管理）、defaultValueで「非制御コンポーネント」（DOM側で値を管理）に分かれる。制御コンポーネントではvalueだけ指定してonChangeを付けないと入力不可になる。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">// 制御コンポーネント（React推奨）</span><br>\nconst [name, setName] = useState("");<br>\n&lt;input<br>\n  <span style="color:#a6e3a1;">value</span>={name}<br>\n  <span style="color:#a6e3a1;">onChange</span>={(e) =&gt; setName(e.target.value)}<br>\n/&gt;<br><br>\n<span style="color:#89b4fa;">// 非制御コンポーネント</span><br>\n&lt;input <span style="color:#a6e3a1;">defaultValue</span>="初期値" /&gt;<br><br>\n<span style="color:#f38ba8;">// NG: valueだけ → 入力不可</span><br>\n&lt;input <span style="color:#f38ba8;">value</span>="固定" /&gt;\n</div>',
                },
                tags: ["value", "defaultValue", "onChange", "制御コンポーネント", "useState"],
              },
              {
                id: "html-react-boolean",
                title: "boolean属性 / JSX固有の属性",
                subtitle: "JSXでの属性の書き方",
                description: "JSXではboolean属性は属性名だけで指定（disabled, required等）。値が必要な場合は{true}/{false}で切り替え。dangerouslySetInnerHTMLはHTMLを直接埋め込むReact専用属性（XSSリスクがあるため慎重に使用）。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">// boolean属性</span><br>\n&lt;input <span style="color:#a6e3a1;">disabled</span> /&gt;<br>\n&lt;input <span style="color:#a6e3a1;">disabled</span>={true} /&gt;<br>\n&lt;input <span style="color:#a6e3a1;">disabled</span>={isLoading} /&gt;<br><br>\n<span style="color:#89b4fa;">// JSX固有</span><br>\n&lt;input <span style="color:#a6e3a1;">autoFocus</span> /&gt; <span style="color:#6c7086;">(autofocus)</span><br>\n&lt;td <span style="color:#a6e3a1;">colSpan</span>={2} /&gt; <span style="color:#6c7086;">(colspan)</span><br>\n&lt;tr <span style="color:#a6e3a1;">rowSpan</span>={3} /&gt; <span style="color:#6c7086;">(rowspan)</span><br><br>\n<span style="color:#f38ba8;">// 危険: XSSリスクあり</span><br>\n&lt;div <span style="color:#f38ba8;">dangerouslySetInnerHTML</span>=<br>  {{ __html: htmlString }} /&gt;\n</div>',
                },
                tags: ["disabled", "boolean", "dangerouslySetInnerHTML", "autoFocus", "JSX"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "css",
    name: "CSS",
    description: "Webページの見た目とレイアウトを制御するスタイルシート言語",
    longDescription:
      "CSS (Cascading Style Sheets) は、HTMLで構造化されたコンテンツの見た目（色、フォント、レイアウト、アニメーション等）を制御する言語です。モダンCSSの機能を活用して、レスポンシブで美しいデザインを実現する方法を学びます。",
    icon: "Palette",
    color: "oklch(0.55 0.15 250)",
    officialUrl: "https://developer.mozilla.org/ja/docs/Web/CSS",
    levels: [
      {
        level: "beginner",
        label: "初級",
        description: "CSSの基本的なセレクタ、プロパティ、ボックスモデルを学びます。",
        sections: [
          {
            id: "css-b-selector",
            title: "セレクタと単位",
            description: "CSSの基本的な適用方法と値の指定",
            topics: [
              {
                id: "css-selectors",
                title: "要素 / .class / #id セレクタ",
                subtitle: "基本セレクタ",
                description: "要素セレクタは全ての該当タグに適用。クラスセレクタ（.名前）は同じクラスの要素に一括適用。IDセレクタ（#名前）は一意の要素に適用。詳細度: id > class > 要素。",
                code: {
                  html: '<h2>要素セレクタで全h2に適用</h2>\n<p class="highlight">クラスセレクタで適用</p>\n<p class="highlight">同じクラスの別要素</p>\n<p id="special">IDセレクタで適用</p>',
                  css: 'h2 { color: teal; }\n.highlight { background: #f0fafa; padding: 8px; border-radius: 4px; margin-bottom: 4px; }\n#special { color: crimson; font-weight: bold; }',
                },
                tags: ["セレクタ", "class", "id", "詳細度"],
              },
              {
                id: "css-units",
                title: "px / rem / % / vw",
                subtitle: "単位",
                description: "px（固定ピクセル）、rem（ルート要素のfont-sizeを基準、アクセシビリティに優れる）、%（親要素に対する割合）、vw/vh（ビューポートの幅/高さ）。font-sizeにはrem推奨。",
                code: {
                  html: '<p class="px-demo">font-size: 16px（固定）</p>\n<p class="rem-demo">font-size: 1rem（ルート基準）</p>\n<div class="percent-demo">width: 50%（親の半分）</div>\n<div class="vw-demo">width: 80vw（画面幅の80%）</div>',
                  css: '.px-demo { font-size: 16px; }\n.rem-demo { font-size: 1rem; }\n.percent-demo {\n  width: 50%;\n  background: #f0fafa;\n  padding: 8px;\n  margin-bottom: 8px;\n}\n.vw-demo {\n  width: 80vw;\n  max-width: 100%;\n  background: #e0f7f5;\n  padding: 8px;\n}',
                },
                tags: ["px", "rem", "em", "%", "vw", "vh"],
              },
              {
                id: "css-width-maxwidth",
                title: "width / max-width",
                subtitle: "幅の制御",
                description: "widthは要素の幅を固定。max-widthは最大幅を制限し、それ以下では縮む。レスポンシブデザインではmax-widthを使うのが基本。width: 100%とmax-widthの組み合わせが頻出。",
                code: {
                  html: '<div class="fixed-width">width: 300px（固定）</div>\n<div class="max-width">max-width: 300px（最大300px、縮む）</div>',
                  css: '.fixed-width {\n  width: 300px;\n  background: teal;\n  color: white;\n  padding: 12px;\n  margin-bottom: 8px;\n  border-radius: 4px;\n}\n.max-width {\n  max-width: 300px;\n  width: 100%;\n  background: #0d9488;\n  color: white;\n  padding: 12px;\n  border-radius: 4px;\n}',
                },
                tags: ["width", "max-width", "min-width", "レスポンシブ"],
              },
            ],
          },
          {
            id: "css-b-text",
            title: "テキスト・色",
            description: "テキストスタイリングと色の指定",
            topics: [
              {
                id: "css-color",
                title: "color / background-color",
                subtitle: "文字色・背景色",
                description: "テキストの色と要素の背景色を指定するプロパティ。HEX (#ff0000), RGB, HSL, oklch など複数の指定方法がある。",
                code: {
                  html: '<p class="hex">HEX: #0d9488</p>\n<p class="rgb">RGB: rgb(13, 148, 136)</p>\n<p class="bg">背景色を変更</p>',
                  css: '.hex { color: #0d9488; }\n.rgb { color: rgb(13, 148, 136); }\n.bg {\n  background-color: #0d9488;\n  color: white;\n  padding: 8px 12px;\n  border-radius: 4px;\n}',
                },
                tags: ["color", "background-color", "HEX", "RGB"],
              },
              {
                id: "css-font",
                title: "font-size / font-weight / font-family",
                subtitle: "フォント設定",
                description: "文字サイズ、太さ、フォントファミリーを指定するプロパティ。font-sizeはrem推奨（ユーザー設定に対応）。font-weightは100〜900の数値またはbold等のキーワード。",
                code: {
                  html: '<p class="small">font-size: 0.75rem (12px)</p>\n<p class="normal">font-size: 1rem (16px)</p>\n<p class="large">font-size: 1.5rem (24px)</p>\n<p class="bold">font-weight: bold</p>',
                  css: '.small { font-size: 0.75rem; }\n.normal { font-size: 1rem; }\n.large { font-size: 1.5rem; }\n.bold { font-weight: bold; }',
                },
                tags: ["font-size", "font-weight", "font-family", "rem"],
              },
              {
                id: "css-text-align",
                title: "text-align / line-height",
                subtitle: "テキスト配置・行間",
                description: "text-alignはテキストの水平配置。line-heightは行の高さで、1.5〜1.8が読みやすい値。単位なしの指定が推奨。",
                code: {
                  html: '<p class="left">左寄せ</p>\n<p class="center">中央揃え</p>\n<p class="right">右寄せ</p>\n<p class="tight">line-height: 1.0 行間が狭い。複数行だと読みにくい。テキストが詰まった状態です。</p>\n<p class="loose">line-height: 1.8 行間が広い。複数行でも読みやすい。ゆとりのある状態です。</p>',
                  css: '.left { text-align: left; }\n.center { text-align: center; }\n.right { text-align: right; }\n.tight { line-height: 1.0; background: #f0fafa; padding: 8px; margin-bottom: 8px; }\n.loose { line-height: 1.8; background: #f0fafa; padding: 8px; }',
                },
                tags: ["text-align", "line-height", "配置", "行間"],
              },
            ],
          },
          {
            id: "css-b-box",
            title: "ボックスモデル",
            description: "要素のサイズ・余白・枠線の制御",
            topics: [
              {
                id: "css-padding-margin",
                title: "padding / margin",
                subtitle: "内側・外側の余白",
                description: "paddingは要素の内側の余白（ボーダーとコンテンツの間）、marginは外側の余白（要素間の距離）。4辺個別指定やショートハンド記法がある。",
                code: {
                  html: '<div class="padding-demo">padding: 20px（内側）</div>\n<div class="margin-demo">margin-top: 30px（外側）</div>',
                  css: '.padding-demo {\n  padding: 20px;\n  background: #0d9488;\n  color: white;\n  border-radius: 4px;\n}\n.margin-demo {\n  margin-top: 30px;\n  padding: 12px;\n  background: #f0fafa;\n  border: 2px dashed #0d9488;\n  border-radius: 4px;\n}',
                },
                tags: ["padding", "margin", "余白", "ショートハンド"],
              },
              {
                id: "css-border",
                title: "border / border-radius",
                subtitle: "枠線・角丸",
                description: "borderは要素の枠線（太さ、スタイル、色の一括指定）。border-radiusは角の丸みを制御。50%で円形にできる。",
                code: {
                  html: '<div class="solid">solid（実線）</div>\n<div class="dashed">dashed（破線）</div>\n<div class="rounded">border-radius: 12px</div>\n<div class="circle">50%</div>',
                  css: '.solid { border: 2px solid teal; padding: 8px; margin-bottom: 8px; }\n.dashed { border: 2px dashed teal; padding: 8px; margin-bottom: 8px; }\n.rounded { border: 2px solid teal; border-radius: 12px; padding: 8px; margin-bottom: 8px; }\n.circle {\n  border: 2px solid teal;\n  border-radius: 50%;\n  width: 60px; height: 60px;\n  display: flex; align-items: center; justify-content: center;\n  font-size: 12px;\n}',
                },
                tags: ["border", "border-radius", "枠線", "角丸"],
              },
              {
                id: "css-box-sizing",
                title: "box-sizing",
                subtitle: "サイズ計算方法",
                description: "content-box（デフォルト）はwidth/heightにpadding/borderを含まない。border-boxは含むため直感的。全要素に *, *::before, *::after { box-sizing: border-box; } を適用するのがベストプラクティス。",
                code: {
                  html: '<div class="content-box">content-box: 実際250px</div>\n<div class="border-box">border-box: 実際200px</div>',
                  css: '.content-box {\n  box-sizing: content-box;\n  width: 200px;\n  padding: 20px;\n  border: 5px solid teal;\n  background: #f0fafa;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.border-box {\n  box-sizing: border-box;\n  width: 200px;\n  padding: 20px;\n  border: 5px solid teal;\n  background: #f0fafa;\n  font-size: 13px;\n}',
                },
                tags: ["box-sizing", "content-box", "border-box"],
              },
              {
                id: "css-display",
                title: "display",
                subtitle: "表示モード",
                description: "block（幅いっぱい、改行あり）、inline（コンテンツ幅のみ、width/height効かない）、inline-block（inlineだがwidth/height指定可能）、none（非表示）。",
                code: {
                  html: '<span class="d-block">block</span>\n<span class="d-block">block</span>\n<hr>\n<span class="d-inline">inline</span>\n<span class="d-inline">inline</span>\n<hr>\n<span class="d-inline-block">inline-block</span>\n<span class="d-inline-block">inline-block</span>',
                  css: '.d-block {\n  display: block;\n  background: #0d9488;\n  color: white;\n  padding: 8px;\n  margin-bottom: 4px;\n}\n.d-inline {\n  display: inline;\n  background: #0d9488;\n  color: white;\n  padding: 4px;\n}\n.d-inline-block {\n  display: inline-block;\n  width: 120px;\n  height: 50px;\n  background: #0d9488;\n  color: white;\n  padding: 4px;\n  text-align: center;\n  line-height: 42px;\n  margin-right: 4px;\n  font-size: 12px;\n}',
                },
                tags: ["display", "block", "inline", "inline-block", "none"],
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        label: "中級",
        description: "レイアウト、レスポンシブ、アニメーション、CSS変数を学びます。",
        sections: [
          {
            id: "css-i-position",
            title: "ポジションとレスポンシブ",
            description: "要素の配置制御とメディアクエリ",
            topics: [
              {
                id: "css-position",
                title: "position / z-index",
                subtitle: "ポジショニング",
                description: "static（デフォルト）、relative（自身を基準にずらす）、absolute（positionが指定された親を基準）、fixed（画面に固定）、sticky（スクロールで固定）。z-indexは重なり順を制御。",
                code: {
                  html: '<div class="relative-box">\n  relative（基準）\n  <div class="absolute-box">absolute</div>\n</div>\n<div class="sticky-box">sticky（スクロールで固定）</div>',
                  css: '.relative-box {\n  position: relative;\n  background: #f0fafa;\n  padding: 40px 12px 12px;\n  border: 1px solid teal;\n  border-radius: 4px;\n  margin-bottom: 8px;\n  height: 80px;\n}\n.absolute-box {\n  position: absolute;\n  top: 8px; right: 8px;\n  background: teal;\n  color: white;\n  padding: 4px 8px;\n  border-radius: 4px;\n  font-size: 13px;\n}\n.sticky-box {\n  position: sticky;\n  top: 0;\n  background: teal;\n  color: white;\n  padding: 8px;\n  border-radius: 4px;\n  font-size: 13px;\n}',
                },
                tags: ["position", "relative", "absolute", "fixed", "sticky", "z-index"],
              },
              {
                id: "css-media-query",
                title: "@media",
                subtitle: "メディアクエリ",
                description: "画面サイズに応じてスタイルを切り替える。モバイルファースト（min-width）が推奨。一般的なブレークポイント: 768px（タブレット）、1024px（デスクトップ）。",
                code: {
                  html: '<div class="responsive-grid">\n  <div class="grid-item">1</div>\n  <div class="grid-item">2</div>\n  <div class="grid-item">3</div>\n</div>',
                  css: '.responsive-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 8px;\n}\n.grid-item {\n  background: teal;\n  color: white;\n  padding: 16px;\n  text-align: center;\n  border-radius: 4px;\n}\n@media (min-width: 400px) {\n  .responsive-grid {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}',
                },
                tags: ["@media", "min-width", "ブレークポイント", "レスポンシブ"],
              },
              {
                id: "css-hover-focus",
                title: ":hover / :focus / :active",
                subtitle: "インタラクション疑似クラス",
                description: ":hoverはマウスオーバー時、:focusはフォーカス時（キーボード操作でも発火）、:activeはクリック中のスタイル。アクセシビリティのため:focusスタイルは必ず設定する。",
                code: {
                  html: '<button class="interactive-btn">ホバー / フォーカス / クリック</button>',
                  css: '.interactive-btn {\n  padding: 12px 24px;\n  background: teal;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n}\n.interactive-btn:hover {\n  background: #0f766e;\n}\n.interactive-btn:focus {\n  outline: 2px solid #14b8a6;\n  outline-offset: 2px;\n}\n.interactive-btn:active {\n  background: #115e59;\n  transform: scale(0.98);\n}',
                },
                tags: [":hover", ":focus", ":active", "疑似クラス"],
              },
            ],
          },
          {
            id: "css-i-layout",
            title: "Flexbox",
            description: "1次元レイアウトのためのFlexbox",
            topics: [
              {
                id: "css-flex-direction",
                title: "flex-direction",
                subtitle: "主軸の方向",
                description: "Flexコンテナ内のアイテムの並び方向を指定。row（横並び、デフォルト）、column（縦並び）。",
                code: {
                  html: '<div class="flex-row">\n  <div class="item">1</div><div class="item">2</div><div class="item">3</div>\n</div>\n<p style="font-size:12px;color:#666;">↑ row</p>\n<div class="flex-col">\n  <div class="item">1</div><div class="item">2</div><div class="item">3</div>\n</div>\n<p style="font-size:12px;color:#666;">↑ column</p>',
                  css: '.flex-row { display: flex; flex-direction: row; gap: 8px; margin-bottom: 4px; }\n.flex-col { display: flex; flex-direction: column; gap: 8px; margin-bottom: 4px; }\n.item { background: #0d9488; color: white; padding: 12px 20px; border-radius: 4px; text-align: center; }',
                },
                tags: ["flex-direction", "row", "column", "Flexbox"],
              },
              {
                id: "css-justify-align",
                title: "justify-content / align-items",
                subtitle: "配置制御",
                description: "justify-contentは主軸方向の配置。align-itemsは交差軸方向の配置。",
                code: {
                  html: '<div class="jc-between">\n  <div class="item">A</div><div class="item">B</div><div class="item">C</div>\n</div>\n<p style="font-size:12px;color:#666;">↑ justify-content: space-between</p>\n<div class="ai-center">\n  <div class="item tall">大</div><div class="item">中</div><div class="item short">小</div>\n</div>\n<p style="font-size:12px;color:#666;">↑ align-items: center</p>',
                  css: '.jc-between { display: flex; justify-content: space-between; background: #f0fafa; padding: 8px; border-radius: 4px; margin-bottom: 4px; }\n.ai-center { display: flex; align-items: center; gap: 8px; background: #f0fafa; padding: 8px; border-radius: 4px; min-height: 80px; margin-bottom: 4px; }\n.item { background: #0d9488; color: white; padding: 8px 16px; border-radius: 4px; }\n.tall { padding: 20px 16px; }\n.short { padding: 4px 16px; }',
                },
                tags: ["justify-content", "align-items", "space-between", "center"],
              },
              {
                id: "css-gap",
                title: "gap / flex-wrap",
                subtitle: "間隔と折り返し",
                description: "gapはアイテム間の余白（marginと違い先頭・末尾に余白が付かない）。flex-wrap: wrapでアイテムが収まらない時に折り返す。",
                code: {
                  html: '<div class="gap-demo">\n  <div class="item">1</div><div class="item">2</div><div class="item">3</div><div class="item">4</div><div class="item">5</div>\n</div>',
                  css: '.gap-demo { display: flex; flex-wrap: wrap; gap: 12px; background: #f0fafa; padding: 12px; border-radius: 4px; }\n.item { background: #0d9488; color: white; padding: 12px 20px; border-radius: 4px; }',
                },
                tags: ["gap", "flex-wrap", "間隔", "折り返し"],
              },
            ],
          },
          {
            id: "css-i-grid",
            title: "CSS Grid",
            description: "2次元レイアウトのためのGrid",
            topics: [
              {
                id: "css-grid-template",
                title: "grid-template-columns",
                subtitle: "グリッド列定義",
                description: "グリッドの列サイズを定義。fr単位は利用可能な空間を比率で分配。repeat()関数で繰り返しを簡潔に書ける。",
                code: {
                  html: '<div class="grid-demo">\n  <div class="cell">1fr</div><div class="cell">1fr</div><div class="cell">1fr</div>\n</div>',
                  css: '.grid-demo { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }\n.cell { background: #0d9488; color: white; padding: 16px; border-radius: 4px; text-align: center; }',
                },
                tags: ["grid-template-columns", "fr", "repeat"],
              },
              {
                id: "css-grid-area",
                title: "grid-template-areas",
                subtitle: "名前付きエリア",
                description: "グリッドのレイアウトを視覚的な名前で定義。直感的に記述でき、メディアクエリでの変更も容易。",
                code: {
                  html: '<div class="layout">\n  <header class="area-header">Header</header>\n  <nav class="area-nav">Nav</nav>\n  <main class="area-main">Main</main>\n  <aside class="area-aside">Aside</aside>\n  <footer class="area-footer">Footer</footer>\n</div>',
                  css: '.layout {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "nav    main   aside"\n    "footer footer footer";\n  grid-template-columns: 80px 1fr 100px;\n  gap: 4px;\n  min-height: 200px;\n}\n.area-header { grid-area: header; background: #0d9488; }\n.area-nav { grid-area: nav; background: #14b8a6; }\n.area-main { grid-area: main; background: #5eead4; color: #333; }\n.area-aside { grid-area: aside; background: #99f6e4; color: #333; }\n.area-footer { grid-area: footer; background: #0d9488; }\n.layout > * { color: white; padding: 8px; border-radius: 4px; font-size: 13px; text-align: center; }',
                },
                tags: ["grid-template-areas", "grid-area", "名前付きレイアウト"],
              },
            ],
          },
          {
            id: "css-i-animation",
            title: "トランジション・アニメーション",
            description: "CSSによる動きとインタラクション",
            topics: [
              {
                id: "css-transform",
                title: "transform",
                subtitle: "要素の変形",
                description: "要素を移動（translate）、回転（rotate）、拡大縮小（scale）、傾き（skew）する。レイアウトに影響を与えずGPUで処理されるため高パフォーマンス。",
                code: {
                  html: '<div class="t-translate">translate(20px, 10px)</div>\n<div class="t-rotate">rotate(15deg)</div>\n<div class="t-scale">scale(1.2)</div>',
                  css: '.t-translate, .t-rotate, .t-scale {\n  display: inline-block;\n  background: teal;\n  color: white;\n  padding: 12px;\n  border-radius: 4px;\n  margin: 16px 8px;\n  font-size: 12px;\n}\n.t-translate { transform: translate(20px, 10px); }\n.t-rotate { transform: rotate(15deg); }\n.t-scale { transform: scale(1.2); }',
                },
                tags: ["transform", "translate", "rotate", "scale"],
              },
              {
                id: "css-transition",
                title: "transition",
                subtitle: "トランジション",
                description: "プロパティの値が変化した時にスムーズにアニメーション。transition: プロパティ 時間 イージングの形式で指定。transition: allは避け、変化するプロパティを明示する。",
                code: {
                  html: '<div class="transition-demo">ホバーしてください</div>',
                  css: '.transition-demo {\n  background: #0d9488;\n  color: white;\n  padding: 16px 24px;\n  border-radius: 8px;\n  cursor: pointer;\n  display: inline-block;\n  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;\n}\n.transition-demo:hover {\n  background: #0f766e;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n}',
                },
                tags: ["transition", "ease", "hover", "プロパティ指定"],
              },
              {
                id: "css-keyframes",
                title: "@keyframes / animation",
                subtitle: "キーフレームアニメーション",
                description: "@keyframesでアニメーションの各段階を定義し、animationプロパティで適用。prefers-reduced-motionで動きを無効化する配慮も重要。",
                code: {
                  html: '<div class="bounce-demo">バウンス</div>\n<div class="spin-demo">回転</div>',
                  css: '@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-20px); }\n}\n@keyframes spin {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n.bounce-demo {\n  display: inline-block;\n  background: #0d9488;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 8px;\n  animation: bounce 1s ease infinite;\n  margin-right: 16px;\n}\n.spin-demo {\n  display: inline-block;\n  background: #0d9488;\n  color: white;\n  width: 50px; height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-radius: 8px;\n  animation: spin 2s linear infinite;\n  font-size: 12px;\n}\n@media (prefers-reduced-motion: reduce) {\n  .bounce-demo, .spin-demo { animation: none; }\n}',
                },
                tags: ["@keyframes", "animation", "prefers-reduced-motion"],
              },
            ],
          },
          {
            id: "css-i-variables",
            title: "CSS変数",
            description: "カスタムプロパティによるスタイル管理",
            topics: [
              {
                id: "css-variables",
                title: "var() / --custom-property",
                subtitle: "CSS変数",
                description: "--で始まるカスタムプロパティを定義し、var()で参照。:rootでグローバル定義、要素レベルでのオーバーライドも可能。フォールバック値も指定できる。",
                code: {
                  html: '<div class="card card-primary">Primary</div>\n<div class="card card-accent">Accent（上書き）</div>\n<div class="card card-fallback">フォールバック</div>',
                  css: ':root {\n  --brand: #0d9488;\n  --radius: 8px;\n  --spacing: 12px;\n}\n.card {\n  padding: var(--spacing);\n  border-radius: var(--radius);\n  margin-bottom: 8px;\n  color: white;\n  font-weight: bold;\n}\n.card-primary { background: var(--brand); }\n.card-accent { --brand: #6366f1; background: var(--brand); }\n.card-fallback { background: var(--undefined-color, #888); }',
                },
                tags: ["var()", "--custom-property", "CSS変数", ":root"],
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        label: "上級",
        description: "カスケードレイヤー、モダンセレクタ、コンテナクエリ、clampを学びます。",
        sections: [
          {
            id: "css-a-cascade",
            title: "カスケード制御",
            description: "CSSの優先順位を明示的に管理する",
            topics: [
              {
                id: "css-layer",
                title: "@layer",
                subtitle: "カスケードレイヤー",
                description: "CSSルールをレイヤーに分けて管理する仕組み。同じorigin/importanceのlayered rule同士ではレイヤー宣言順で優先度が決まる。ただしlayerに属さないルール（unlayered）はlayered ruleより強い。",
                code: {
                  html: '<button class="btn">レイヤーで管理</button>',
                  css: '@layer base, components, utilities;\n\n@layer base {\n  button {\n    font-family: sans-serif;\n    font-size: 14px;\n    cursor: pointer;\n  }\n}\n@layer components {\n  .btn {\n    background: #0d9488;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 6px;\n  }\n}\n@layer utilities {\n  /* 最後に宣言されたレイヤーが最優先 */\n}',
                },
                tags: ["@layer", "カスケードレイヤー", "unlayered", "CSS設計"],
              },
              {
                id: "css-supports",
                title: "@supports",
                subtitle: "機能クエリ",
                description: "ブラウザが特定のCSSプロパティ/値をサポートしているかを判定し、条件付きでスタイルを適用。プログレッシブエンハンスメントに必須。",
                code: {
                  html: '<div class="supports-demo">この要素のスタイルはブラウザ対応に依存</div>',
                  css: '.supports-demo {\n  background: #f0fafa;\n  padding: 16px;\n  border-radius: 8px;\n  font-size: 14px;\n}\n\n@supports (container-type: inline-size) {\n  .supports-demo {\n    border: 2px solid teal;\n  }\n  .supports-demo::after {\n    content: " ✓ container-type対応";\n    color: teal;\n    font-weight: bold;\n  }\n}\n\n@supports not (container-type: inline-size) {\n  .supports-demo::after {\n    content: " ✗ container-type非対応";\n    color: crimson;\n  }\n}',
                },
                tags: ["@supports", "機能クエリ", "プログレッシブエンハンスメント"],
              },
              {
                id: "css-clamp",
                title: "clamp()",
                subtitle: "流体サイズ",
                description: "clamp(最小値, 推奨値, 最大値)で、画面サイズに応じて自動的にサイズが変化する。メディアクエリなしで流体タイポグラフィやレスポンシブ間隔を実現。",
                code: {
                  html: '<h2 class="clamp-title">このタイトルは画面幅に応じてサイズが変わります</h2>\n<p class="clamp-text">本文テキスト。clamp()で最小・最大を制限しつつ、推奨値で滑らかに変化します。</p>',
                  css: '.clamp-title {\n  font-size: clamp(1.2rem, 2.5vw + 0.5rem, 2.5rem);\n  color: teal;\n  margin-bottom: 8px;\n}\n.clamp-text {\n  font-size: clamp(0.875rem, 1vw + 0.5rem, 1.125rem);\n  line-height: 1.6;\n  max-width: 60ch;\n}',
                },
                tags: ["clamp()", "流体タイポグラフィ", "レスポンシブ", "vw"],
              },
            ],
          },
          {
            id: "css-a-modern",
            title: "モダンセレクタ",
            description: "最新のCSS機能",
            topics: [
              {
                id: "css-has",
                title: ":has()",
                subtitle: "親要素セレクタ",
                description: "子要素の状態に基づいて親要素をスタイリングできるセレクタ。CSSだけでインタラクティブなUIを実現可能。複雑な条件ではパフォーマンスと可読性に注意。",
                code: {
                  html: '<div class="card-has">\n  <h3>通常のカード</h3>\n  <p>画像なし</p>\n</div>\n<div class="card-has">\n  <img src="https://via.placeholder.com/300x80/0d9488/ffffff?text=Image" alt="sample" style="width:100%;border-radius:4px;">\n  <h3>画像付きカード</h3>\n  <p>:has(img) でスタイル変更</p>\n</div>',
                  css: '.card-has {\n  border: 2px solid #ccc;\n  border-radius: 8px;\n  padding: 12px;\n  margin-bottom: 8px;\n}\n.card-has:has(img) {\n  border-color: #0d9488;\n  background: #f0fdfa;\n}',
                },
                tags: [":has()", "親セレクタ", "条件付きスタイル"],
              },
              {
                id: "css-is-where",
                title: ":is() / :where()",
                subtitle: "セレクタリスト",
                description: ":is()はセレクタリストのグループ化（詳細度を維持）。:where()は同じだが詳細度が常に0。",
                code: {
                  html: '<article>\n  <h2>記事タイトル</h2>\n  <p>:is() でまとめてスタイリング</p>\n  <section>\n    <h3>セクション</h3>\n    <p>ネストされた段落</p>\n  </section>\n</article>',
                  css: ':is(article, section) :is(h2, h3) {\n  color: #0d9488;\n  border-bottom: 2px solid #0d9488;\n  padding-bottom: 4px;\n}\n:where(article, section) p {\n  color: #555;\n  line-height: 1.6;\n}',
                },
                tags: [":is()", ":where()", "セレクタリスト", "詳細度"],
              },
              {
                id: "css-container-query",
                title: "@container",
                subtitle: "コンテナクエリ",
                description: "コンテナ化された祖先要素のサイズに基づいてスタイルを変更。@mediaがビューポート幅で判定するのに対し、@containerはコンポーネントの親コンテナ幅で判定。",
                code: {
                  html: '<div class="wrapper" style="width:350px;">\n  <div class="cq-card">\n    <div class="cq-icon">📦</div>\n    <div class="cq-body"><h3>幅が広い</h3><p>横並び</p></div>\n  </div>\n</div>\n<div class="wrapper" style="width:180px;">\n  <div class="cq-card">\n    <div class="cq-icon">📦</div>\n    <div class="cq-body"><h3>狭い</h3><p>縦並び</p></div>\n  </div>\n</div>',
                  css: '.wrapper {\n  container-type: inline-size;\n  border: 1px dashed #ccc;\n  padding: 8px;\n  margin-bottom: 8px;\n}\n.cq-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 8px;\n  padding: 12px;\n  background: #f0fdfa;\n  border-radius: 8px;\n}\n.cq-icon { font-size: 24px; }\n.cq-body h3 { margin: 0; font-size: 14px; }\n.cq-body p { margin: 4px 0 0; font-size: 12px; color: #666; }\n@container (min-width: 250px) {\n  .cq-card { flex-direction: row; text-align: left; }\n}',
                },
                tags: ["@container", "container-type", "コンテナクエリ"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "react",
    name: "React",
    description: "UIを構築するためのJavaScriptライブラリ",
    longDescription:
      "React は Meta が開発したUI構築ライブラリです。コンポーネントベースの設計で、宣言的なUIと効率的な再レンダリングを実現します。Hooks APIを使ったモダンなReact開発を学びます。",
    icon: "Atom",
    color: "oklch(0.55 0.15 200)",
    officialUrl: "https://react.dev",
    levels: [
      {
        level: "beginner",
        label: "初級",
        description: "Reactの基本概念、コンポーネント、JSXを学びます。",
        sections: [
          {
            id: "react-b-basics",
            title: "JSX とコンポーネント",
            description: "Reactの基本的な書き方",
            topics: [
              {
                id: "react-jsx",
                title: "JSX",
                subtitle: "JavaScript内のHTML風構文",
                description: "JSXはJavaScript内にHTMLライクな構文を書ける拡張。ブラウザが直接理解するものではなく、ビルド時にJavaScriptに変換される。中括弧{}でJavaScript式を埋め込める。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Greeting</span>() {<br>\n  <span style="color:#cba6f7;">const</span> name = <span style="color:#a6e3a1;">"太郎"</span>;<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#89b4fa;">div</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">h1</span>&gt;こんにちは、{name}さん&lt;/<span style="color:#89b4fa;">h1</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">p</span>&gt;今日は {<span style="color:#cba6f7;">new</span> Date().toLocaleDateString()} です&lt;/<span style="color:#89b4fa;">p</span>&gt;<br>\n    &lt;/<span style="color:#89b4fa;">div</span>&gt;<br>\n  );<br>\n}<br><br>\n<span style="color:#6c7086;">// {}内にはJavaScript式が書ける</span><br>\n<span style="color:#6c7086;">// 三項演算子、関数呼び出し、配列メソッド等</span>\n</div>',
                },
                tags: ["JSX", "{}", "式の埋め込み", "コンポーネント"],
              },
              {
                id: "react-component",
                title: "function Component",
                subtitle: "関数コンポーネント",
                description: "Reactコンポーネントは大文字で始まる関数。JSXを返すことでUIを定義する。1つのファイルに1つのコンポーネントが基本。コンポーネントを組み合わせてUIを構築する。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// コンポーネント定義</span><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Button</span>() {<br>\n  <span style="color:#cba6f7;">return</span> &lt;<span style="color:#89b4fa;">button</span>&gt;クリック&lt;/<span style="color:#89b4fa;">button</span>&gt;;<br>\n}<br><br>\n<span style="color:#6c7086;">// コンポーネントの組み合わせ</span><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">App</span>() {<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#89b4fa;">div</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">h1</span>&gt;アプリ&lt;/<span style="color:#89b4fa;">h1</span>&gt;<br>\n      &lt;<span style="color:#a6e3a1;">Button</span> /&gt;  <span style="color:#6c7086;">← コンポーネントを使用</span><br>\n      &lt;<span style="color:#a6e3a1;">Button</span> /&gt;  <span style="color:#6c7086;">← 再利用可能</span><br>\n    &lt;/<span style="color:#89b4fa;">div</span>&gt;<br>\n  );<br>\n}\n</div>',
                },
                tags: ["関数コンポーネント", "大文字始まり", "再利用"],
              },
              {
                id: "react-props",
                title: "props",
                subtitle: "コンポーネントへのデータ渡し",
                description: "propsは親コンポーネントから子コンポーネントにデータを渡す仕組み。読み取り専用で、子は受け取ったpropsを変更してはいけない。TypeScriptでは型を定義して安全に使う。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">type</span> <span style="color:#89b4fa;">CardProps</span> = {<br>\n  title: <span style="color:#a6e3a1;">string</span>;<br>\n  description: <span style="color:#a6e3a1;">string</span>;<br>\n  isNew?: <span style="color:#a6e3a1;">boolean</span>;  <span style="color:#6c7086;">// ? = 省略可</span><br>\n};<br><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Card</span>({ title, description, isNew }: <span style="color:#89b4fa;">CardProps</span>) {<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#89b4fa;">div</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">h2</span>&gt;{title} {isNew &amp;&amp; <span style="color:#a6e3a1;">"🆕"</span>}&lt;/<span style="color:#89b4fa;">h2</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">p</span>&gt;{description}&lt;/<span style="color:#89b4fa;">p</span>&gt;<br>\n    &lt;/<span style="color:#89b4fa;">div</span>&gt;<br>\n  );<br>\n}<br><br>\n<span style="color:#6c7086;">// 使う側</span><br>\n&lt;<span style="color:#a6e3a1;">Card</span> title=<span style="color:#a6e3a1;">"React"</span> description=<span style="color:#a6e3a1;">"UIライブラリ"</span> isNew /&gt;\n</div>',
                },
                tags: ["props", "型定義", "分割代入", "読み取り専用"],
              },
              {
                id: "react-children",
                title: "children",
                subtitle: "子要素の受け渡し",
                description: "childrenは特別なpropsで、コンポーネントの開始タグと閉じタグの間に書いた内容が渡される。レイアウトコンポーネントやラッパーコンポーネントで頻繁に使われる。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Card</span>({ children }: { children: React.ReactNode }) {<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#89b4fa;">div</span> className=<span style="color:#a6e3a1;">"border rounded-lg p-4"</span>&gt;<br>\n      {children}  <span style="color:#6c7086;">← 中身は使う側が決める</span><br>\n    &lt;/<span style="color:#89b4fa;">div</span>&gt;<br>\n  );<br>\n}<br><br>\n<span style="color:#6c7086;">// 使う側</span><br>\n&lt;<span style="color:#a6e3a1;">Card</span>&gt;<br>\n  &lt;<span style="color:#89b4fa;">h2</span>&gt;タイトル&lt;/<span style="color:#89b4fa;">h2</span>&gt;<br>\n  &lt;<span style="color:#89b4fa;">p</span>&gt;自由な中身&lt;/<span style="color:#89b4fa;">p</span>&gt;<br>\n&lt;/<span style="color:#a6e3a1;">Card</span>&gt;\n</div>',
                },
                tags: ["children", "ReactNode", "ラッパー", "コンポジション"],
              },
              {
                id: "react-conditional",
                title: "条件付きレンダリング / リスト",
                subtitle: "動的なUI表示",
                description: "&&演算子や三項演算子で条件付き表示。配列のmap()でリストを描画し、各要素にユニークなkey属性が必須。keyはReactが効率的にDOMを更新するために使用する。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// 条件付き表示</span><br>\n{isLoggedIn ? &lt;<span style="color:#a6e3a1;">Dashboard</span> /&gt; : &lt;<span style="color:#a6e3a1;">Login</span> /&gt;}<br>\n{hasError &amp;&amp; &lt;<span style="color:#89b4fa;">p</span>&gt;エラー発生&lt;/<span style="color:#89b4fa;">p</span>&gt;}<br><br>\n<span style="color:#6c7086;">// リスト表示</span><br>\n<span style="color:#cba6f7;">const</span> items = [<span style="color:#a6e3a1;">"React"</span>, <span style="color:#a6e3a1;">"Vue"</span>, <span style="color:#a6e3a1;">"Angular"</span>];<br><br>\n&lt;<span style="color:#89b4fa;">ul</span>&gt;<br>\n  {items.map((item) =&gt; (<br>\n    &lt;<span style="color:#89b4fa;">li</span> <span style="color:#f9e2af;">key</span>={item}&gt;{item}&lt;/<span style="color:#89b4fa;">li</span>&gt;<br>\n  ))}<br>\n&lt;/<span style="color:#89b4fa;">ul</span>&gt;<br><br>\n<span style="color:#f38ba8;">// NG: key={index} はアンチパターン</span>\n</div>',
                },
                tags: ["条件分岐", "&&", "三項演算子", "map", "key"],
              },
            ],
          },
          {
            id: "react-b-hooks",
            title: "基本Hooks",
            description: "状態管理と副作用の基本",
            topics: [
              {
                id: "react-usestate",
                title: "useState",
                subtitle: "状態管理",
                description: "コンポーネント内で状態（変化する値）を管理するHook。[値, 更新関数]のペアを返す。更新関数を呼ぶとコンポーネントが再レンダリングされる。直接値を変更してはいけない。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> { useState } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"react"</span>;<br><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Counter</span>() {<br>\n  <span style="color:#cba6f7;">const</span> [count, setCount] = <span style="color:#89b4fa;">useState</span>(0);<br><br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#89b4fa;">div</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">p</span>&gt;カウント: {count}&lt;/<span style="color:#89b4fa;">p</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">button</span> onClick={() =&gt; setCount(count + 1)}&gt;<br>\n        +1<br>\n      &lt;/<span style="color:#89b4fa;">button</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">button</span> onClick={() =&gt; setCount(0)}&gt;<br>\n        リセット<br>\n      &lt;/<span style="color:#89b4fa;">button</span>&gt;<br>\n    &lt;/<span style="color:#89b4fa;">div</span>&gt;<br>\n  );<br>\n}\n</div>',
                },
                tags: ["useState", "状態管理", "再レンダリング", "更新関数"],
              },
              {
                id: "react-useeffect",
                title: "useEffect",
                subtitle: "副作用の実行",
                description: "レンダリング後に実行される副作用（API呼び出し、タイマー、DOM操作等）を管理。依存配列で実行タイミングを制御。クリーンアップ関数で後片付け。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> { useState, useEffect } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"react"</span>;<br><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Timer</span>() {<br>\n  <span style="color:#cba6f7;">const</span> [sec, setSec] = <span style="color:#89b4fa;">useState</span>(0);<br><br>\n  <span style="color:#89b4fa;">useEffect</span>(() =&gt; {<br>\n    <span style="color:#cba6f7;">const</span> id = setInterval(() =&gt; {<br>\n      setSec((s) =&gt; s + 1);<br>\n    }, 1000);<br><br>\n    <span style="color:#6c7086;">// クリーンアップ（コンポーネント消滅時）</span><br>\n    <span style="color:#cba6f7;">return</span> () =&gt; clearInterval(id);<br>\n  }, []); <span style="color:#6c7086;">← 空配列 = マウント時のみ</span><br><br>\n  <span style="color:#cba6f7;">return</span> &lt;<span style="color:#89b4fa;">p</span>&gt;{sec}秒経過&lt;/<span style="color:#89b4fa;">p</span>&gt;;<br>\n}<br><br>\n<span style="color:#6c7086;">// 依存配列:</span><br>\n<span style="color:#6c7086;">// []      → マウント時のみ</span><br>\n<span style="color:#6c7086;">// [count] → countが変わるたび</span><br>\n<span style="color:#6c7086;">// 省略    → 毎レンダリング（非推奨）</span>\n</div>',
                },
                tags: ["useEffect", "副作用", "依存配列", "クリーンアップ"],
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        label: "中級",
        description: "高度なHooks、カスタムHook、パターンを学びます。",
        sections: [
          {
            id: "react-i-hooks",
            title: "追加Hooks",
            description: "状態管理とパフォーマンスのためのHook",
            topics: [
              {
                id: "react-useref",
                title: "useRef",
                subtitle: "値の永続化・DOM参照",
                description: "再レンダリングを引き起こさずに値を保持するHook。DOM要素への参照（ref）としてもよく使われる。.currentプロパティで値にアクセス。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// DOM参照</span><br>\n<span style="color:#cba6f7;">const</span> inputRef = <span style="color:#89b4fa;">useRef</span>&lt;HTMLInputElement&gt;(<span style="color:#fab387;">null</span>);<br><br>\n&lt;<span style="color:#89b4fa;">input</span> ref={inputRef} /&gt;<br>\n&lt;<span style="color:#89b4fa;">button</span> onClick={() =&gt; inputRef.current?.focus()}&gt;<br>\n  フォーカス<br>\n&lt;/<span style="color:#89b4fa;">button</span>&gt;<br><br>\n<span style="color:#6c7086;">// 値の永続化（レンダリングをまたいで保持）</span><br>\n<span style="color:#cba6f7;">const</span> renderCount = <span style="color:#89b4fa;">useRef</span>(0);<br>\nrenderCount.current += 1;<br>\n<span style="color:#6c7086;">// ↑ 更新しても再レンダリングされない</span>\n</div>',
                },
                tags: ["useRef", "ref", "DOM参照", "current"],
              },
              {
                id: "react-usememo-callback",
                title: "useMemo / useCallback",
                subtitle: "メモ化",
                description: "useMemoは計算結果をキャッシュし、依存値が変わった時だけ再計算。useCallbackは関数をメモ化し、子コンポーネントへの不要な再レンダリングを防ぐ。過度な使用は逆効果。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// 重い計算をメモ化</span><br>\n<span style="color:#cba6f7;">const</span> sorted = <span style="color:#89b4fa;">useMemo</span>(<br>\n  () =&gt; items.sort((a, b) =&gt; a.price - b.price),<br>\n  [items]  <span style="color:#6c7086;">← itemsが変わった時だけ再計算</span><br>\n);<br><br>\n<span style="color:#6c7086;">// 関数をメモ化（子への不要な再レンダリング防止）</span><br>\n<span style="color:#cba6f7;">const</span> handleClick = <span style="color:#89b4fa;">useCallback</span>(<br>\n  () =&gt; setCount((c) =&gt; c + 1),<br>\n  []  <span style="color:#6c7086;">← 依存なし = 常に同じ関数</span><br>\n);<br><br>\n<span style="color:#f38ba8;">// ⚠ 全てをメモ化する必要はない</span><br>\n<span style="color:#f38ba8;">// 本当にパフォーマンス問題がある時だけ使う</span>\n</div>',
                },
                tags: ["useMemo", "useCallback", "メモ化", "パフォーマンス"],
              },
              {
                id: "react-custom-hook",
                title: "カスタムHook",
                subtitle: "ロジックの再利用",
                description: "use で始まる関数として、複数のコンポーネントで共通するロジックを抽出・再利用できる。useState や useEffect 等の組み合わせをカプセル化する。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// カスタムHook定義</span><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">useToggle</span>(initial = <span style="color:#fab387;">false</span>) {<br>\n  <span style="color:#cba6f7;">const</span> [on, setOn] = useState(initial);<br>\n  <span style="color:#cba6f7;">const</span> toggle = useCallback(<br>\n    () =&gt; setOn((v) =&gt; !v), []<br>\n  );<br>\n  <span style="color:#cba6f7;">return</span> { on, toggle } <span style="color:#cba6f7;">as const</span>;<br>\n}<br><br>\n<span style="color:#6c7086;">// 使う側</span><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Menu</span>() {<br>\n  <span style="color:#cba6f7;">const</span> { on: isOpen, toggle } = <span style="color:#89b4fa;">useToggle</span>();<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;&gt;<br>\n      &lt;<span style="color:#89b4fa;">button</span> onClick={toggle}&gt;メニュー&lt;/<span style="color:#89b4fa;">button</span>&gt;<br>\n      {isOpen &amp;&amp; &lt;<span style="color:#89b4fa;">nav</span>&gt;...&lt;/<span style="color:#89b4fa;">nav</span>&gt;}<br>\n    &lt;/&gt;<br>\n  );<br>\n}\n</div>',
                },
                tags: ["カスタムHook", "use接頭辞", "ロジック再利用"],
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        label: "上級",
        description: "Server Components、Suspense、パフォーマンス最適化を学びます。",
        sections: [
          {
            id: "react-a-patterns",
            title: "設計パターン",
            description: "スケーラブルなReactアプリケーション設計",
            topics: [
              {
                id: "react-server-components",
                title: "Server Components / Client Components",
                subtitle: "サーバー・クライアント分離",
                description: "Next.js App RouterではデフォルトがServer Component（サーバーで実行、JS送信なし）。useState等のインタラクティブ機能が必要な場合のみ\"use client\"を付けてClient Componentにする。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// Server Component（デフォルト）</span><br>\n<span style="color:#6c7086;">// → サーバーで実行、JSバンドルに含まれない</span><br>\n<span style="color:#cba6f7;">async function</span> <span style="color:#89b4fa;">UserList</span>() {<br>\n  <span style="color:#cba6f7;">const</span> users = <span style="color:#cba6f7;">await</span> fetchUsers();<br>\n  <span style="color:#cba6f7;">return</span> &lt;<span style="color:#89b4fa;">ul</span>&gt;{users.map(...)}&lt;/<span style="color:#89b4fa;">ul</span>&gt;;<br>\n}<br><br>\n<span style="color:#6c7086;">// Client Component（"use client"を宣言）</span><br>\n<span style="color:#a6e3a1;">"use client"</span>;<br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Counter</span>() {<br>\n  <span style="color:#cba6f7;">const</span> [c, setC] = useState(0);<br>\n  <span style="color:#6c7086;">// ↑ useState等が必要 → Client必須</span><br>\n  <span style="color:#cba6f7;">return</span> &lt;<span style="color:#89b4fa;">button</span> onClick={...}&gt;{c}&lt;/<span style="color:#89b4fa;">button</span>&gt;;<br>\n}\n</div>',
                },
                tags: ["Server Components", "use client", "Next.js", "バンドルサイズ"],
              },
              {
                id: "react-suspense",
                title: "Suspense / lazy",
                subtitle: "非同期UI・コード分割",
                description: "Suspenseは非同期処理中のフォールバックUIを宣言的に定義。React.lazyと組み合わせてコンポーネントを遅延読み込み（コード分割）し、初期バンドルサイズを削減。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> { Suspense, lazy } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"react"</span>;<br><br>\n<span style="color:#6c7086;">// 遅延読み込み（必要になるまでロードしない）</span><br>\n<span style="color:#cba6f7;">const</span> HeavyChart = lazy(() =&gt;<br>\n  <span style="color:#cba6f7;">import</span>(<span style="color:#a6e3a1;">"./HeavyChart"</span>)<br>\n);<br><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">Dashboard</span>() {<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#a6e3a1;">Suspense</span> fallback={&lt;<span style="color:#89b4fa;">p</span>&gt;読み込み中...&lt;/<span style="color:#89b4fa;">p</span>&gt;}&gt;<br>\n      &lt;<span style="color:#a6e3a1;">HeavyChart</span> /&gt;<br>\n    &lt;/<span style="color:#a6e3a1;">Suspense</span>&gt;<br>\n  );<br>\n}\n</div>',
                },
                tags: ["Suspense", "lazy", "コード分割", "フォールバック"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "tailwind-css",
    name: "Tailwind CSS",
    description: "ユーティリティファーストのCSSフレームワーク",
    longDescription:
      "Tailwind CSS はユーティリティクラスを組み合わせてスタイリングするCSSフレームワークです。CSSファイルを書かずにHTML/JSX内でデザインを完結でき、デザインシステムとの統合も容易です。",
    icon: "Wind",
    color: "oklch(0.55 0.15 200)",
    officialUrl: "https://tailwindcss.com",
    levels: [
      {
        level: "beginner",
        label: "初級",
        description: "ユーティリティクラスの基本的な使い方を学びます。",
        sections: [
          {
            id: "tw-b-spacing",
            title: "スペーシング・サイズ",
            description: "余白とサイズの制御",
            topics: [
              {
                id: "tw-padding-margin",
                title: "p-* / m-*",
                subtitle: "パディング・マージン",
                description: "p-4 は padding: 1rem (16px)。m-2 は margin: 0.5rem (8px)。方向指定: px-(左右), py-(上下), pt-(上), mb-(下)等。数値は4の倍数のpx: 1=4px, 2=8px, 4=16px, 8=32px。",
                code: {
                  html: '<div class="demo-p">p-4 (padding: 16px)</div>\n<div class="demo-px">px-6 py-2 (左右24px, 上下8px)</div>\n<div class="demo-m">mt-4 (margin-top: 16px)</div>',
                  css: '.demo-p { padding: 16px; background: #0d9488; color: white; border-radius: 4px; margin-bottom: 8px; }\n.demo-px { padding: 8px 24px; background: #14b8a6; color: white; border-radius: 4px; margin-bottom: 8px; }\n.demo-m { margin-top: 16px; padding: 8px; background: #f0fafa; border: 2px dashed #0d9488; border-radius: 4px; }',
                },
                tags: ["p-*", "m-*", "px-*", "py-*", "spacing"],
              },
              {
                id: "tw-width-height",
                title: "w-* / h-* / max-w-*",
                subtitle: "幅・高さ",
                description: "w-full (100%), w-1/2 (50%), w-64 (16rem)。h-screen (100vh)。max-w-md, max-w-lg等のプリセット。min-h-screenでフルスクリーン高さ。",
                code: {
                  html: '<div class="w-full-demo">w-full (100%)</div>\n<div class="w-half-demo">w-1/2 (50%)</div>\n<div class="w-fixed-demo">w-48 (12rem)</div>',
                  css: '.w-full-demo { width: 100%; background: #0d9488; color: white; padding: 8px; border-radius: 4px; margin-bottom: 4px; text-align: center; }\n.w-half-demo { width: 50%; background: #14b8a6; color: white; padding: 8px; border-radius: 4px; margin-bottom: 4px; text-align: center; }\n.w-fixed-demo { width: 12rem; background: #5eead4; color: #333; padding: 8px; border-radius: 4px; text-align: center; }',
                },
                tags: ["w-*", "h-*", "max-w-*", "min-h-*"],
              },
            ],
          },
          {
            id: "tw-b-visual",
            title: "テキスト・装飾",
            description: "テキストと視覚的なスタイリング",
            topics: [
              {
                id: "tw-text",
                title: "text-* / font-*",
                subtitle: "テキストスタイル",
                description: "text-sm/base/lg/xl等でサイズ。text-center/right等で配置。font-bold/semibold等で太さ。text-gray-500等で色。leading-*で行間。tracking-*で文字間隔。",
                code: {
                  html: '<p class="t-sm">text-sm (14px)</p>\n<p class="t-xl">text-xl font-bold (20px太字)</p>\n<p class="t-center">text-center (中央揃え)</p>\n<p class="t-color">text-teal-600 (色付き)</p>',
                  css: '.t-sm { font-size: 14px; }\n.t-xl { font-size: 20px; font-weight: bold; }\n.t-center { text-align: center; }\n.t-color { color: #0d9488; }',
                },
                tags: ["text-*", "font-*", "leading-*", "tracking-*"],
              },
              {
                id: "tw-bg-border",
                title: "bg-* / border-* / rounded-*",
                subtitle: "背景・枠線・角丸",
                description: "bg-blue-500等で背景色。border, border-2等で枠線。rounded-md/lg/full等で角丸。shadow-sm/md/lg等で影。ring-*でフォーカスリング。",
                code: {
                  html: '<div class="box-1">bg + border + rounded-lg</div>\n<div class="box-2">rounded-full + shadow-lg</div>',
                  css: '.box-1 { background: #f0fdfa; border: 2px solid #0d9488; border-radius: 8px; padding: 12px; margin-bottom: 8px; }\n.box-2 { background: #0d9488; color: white; border-radius: 9999px; padding: 12px 24px; display: inline-block; box-shadow: 0 10px 15px rgba(0,0,0,0.1); }',
                },
                tags: ["bg-*", "border-*", "rounded-*", "shadow-*", "ring-*"],
              },
            ],
          },
          {
            id: "tw-b-layout",
            title: "Flexbox / Grid",
            description: "レイアウトユーティリティ",
            topics: [
              {
                id: "tw-flex",
                title: "flex / items-* / justify-*",
                subtitle: "Flexboxレイアウト",
                description: "flexでFlexコンテナ化。items-center (align-items: center), justify-between (justify-content: space-between)。gap-*でアイテム間隔。flex-col で縦並び。",
                code: {
                  html: '<div class="flex-demo">\n  <div class="flex-item">A</div>\n  <div class="flex-item">B</div>\n  <div class="flex-item">C</div>\n</div>',
                  css: '.flex-demo {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 8px;\n  background: #f0fafa;\n  padding: 12px;\n  border-radius: 8px;\n}\n.flex-item {\n  background: #0d9488;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 4px;\n}',
                },
                tags: ["flex", "items-*", "justify-*", "gap-*"],
              },
              {
                id: "tw-grid",
                title: "grid / grid-cols-*",
                subtitle: "Gridレイアウト",
                description: "gridでGridコンテナ化。grid-cols-3で3列。gap-*で間隔。col-span-2で2列分のセル。レスポンシブ: md:grid-cols-3。",
                code: {
                  html: '<div class="grid-demo">\n  <div class="grid-cell">1</div>\n  <div class="grid-cell">2</div>\n  <div class="grid-cell">3</div>\n  <div class="grid-cell span-2">col-span-2</div>\n  <div class="grid-cell">5</div>\n</div>',
                  css: '.grid-demo { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }\n.grid-cell { background: #0d9488; color: white; padding: 16px; border-radius: 4px; text-align: center; }\n.span-2 { grid-column: span 2; }',
                },
                tags: ["grid", "grid-cols-*", "col-span-*", "gap-*"],
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        label: "中級",
        description: "レスポンシブ、状態バリアント、カスタマイズを学びます。",
        sections: [
          {
            id: "tw-i-responsive",
            title: "レスポンシブ・状態",
            description: "ブレークポイントと状態バリアント",
            topics: [
              {
                id: "tw-breakpoints",
                title: "sm: / md: / lg: / xl:",
                subtitle: "レスポンシブ接頭辞",
                description: "モバイルファーストで、接頭辞はmin-width条件。sm:(640px〜), md:(768px〜), lg:(1024px〜), xl:(1280px〜)。接頭辞なし = 全サイズ。",
                code: {
                  html: '<div class="responsive-demo">\n  <div class="resp-item">1</div>\n  <div class="resp-item">2</div>\n  <div class="resp-item">3</div>\n</div>\n<p style="font-size:12px;color:#666;">↑ モバイル: 1列 → md: 3列</p>',
                  css: '.responsive-demo {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 8px;\n}\n@media (min-width: 768px) {\n  .responsive-demo {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.resp-item { background: #0d9488; color: white; padding: 16px; border-radius: 4px; text-align: center; }',
                },
                tags: ["sm:", "md:", "lg:", "モバイルファースト"],
              },
              {
                id: "tw-hover-focus",
                title: "hover: / focus: / active: / group-hover:",
                subtitle: "状態バリアント",
                description: "hover:bg-blue-600 でホバー時のスタイル。focus:ring-2 でフォーカス時。group クラスの親に対して group-hover: で子のスタイルを変更可能。",
                code: {
                  html: '<button class="variant-demo">hover: / focus: / active:</button>\n<p style="font-size:12px;color:#666;margin-top:4px;">↑ ホバー・フォーカス・クリックで変化</p>',
                  css: '.variant-demo {\n  padding: 12px 24px;\n  background: #0d9488;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.variant-demo:hover {\n  background: #0f766e;\n  transform: translateY(-1px);\n}\n.variant-demo:focus {\n  outline: 2px solid #14b8a6;\n  outline-offset: 2px;\n}\n.variant-demo:active {\n  transform: scale(0.98);\n}',
                },
                tags: ["hover:", "focus:", "active:", "group-hover:"],
              },
              {
                id: "tw-dark-motion",
                title: "dark: / motion-safe: / motion-reduce:",
                subtitle: "メディアバリアント",
                description: "dark:bg-gray-800 でダークモード時のスタイル。motion-safe: でアニメーション許可時のみ適用。motion-reduce: で動き軽減設定時のスタイル。",
                code: {
                  html: '<div class="dark-demo">\n  <p>ライトモード: 白背景</p>\n  <p>dark: → ダーク背景 に切り替わる</p>\n</div>\n<div class="motion-demo">motion-safe:animate-bounce</div>',
                  css: '.dark-demo {\n  background: white;\n  color: #333;\n  padding: 12px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  margin-bottom: 8px;\n}\n.motion-demo {\n  display: inline-block;\n  background: #0d9488;\n  color: white;\n  padding: 12px 20px;\n  border-radius: 8px;\n  animation: bounce 1s infinite;\n}\n@keyframes bounce {\n  0%, 100% { transform: translateY(0); }\n  50% { transform: translateY(-10px); }\n}\n@media (prefers-reduced-motion: reduce) {\n  .motion-demo { animation: none; }\n}',
                },
                tags: ["dark:", "motion-safe:", "motion-reduce:", "ダークモード"],
              },
            ],
          },
          {
            id: "tw-i-custom",
            title: "カスタマイズ",
            description: "Tailwindの拡張と高度な使い方",
            topics: [
              {
                id: "tw-arbitrary",
                title: "w-[200px] / text-[#1da1f2]",
                subtitle: "任意値 (Arbitrary Values)",
                description: "[]内に任意のCSS値を指定できる。デザイントークンにない値が必要な時に使用。多用するとTailwindの利点（一貫性）が失われるため、テーマ拡張を優先する。",
                code: {
                  html: '<div class="arbitrary-demo">w-[200px] bg-[#0d9488]</div>\n<p class="arbitrary-text">text-[13px] leading-[1.8]</p>',
                  css: '.arbitrary-demo {\n  width: 200px;\n  background: #0d9488;\n  color: white;\n  padding: 12px;\n  border-radius: 4px;\n  margin-bottom: 8px;\n}\n.arbitrary-text {\n  font-size: 13px;\n  line-height: 1.8;\n}',
                },
                tags: ["[]", "arbitrary values", "任意値"],
              },
              {
                id: "tw-cn-clsx",
                title: "cn() / clsx()",
                subtitle: "条件付きクラス結合",
                description: "clsxやcn（tailwind-mergeと組み合わせ）で、条件に応じたクラスの動的な結合ができる。重複するTailwindクラスを自動解決する。Reactコンポーネントでは必須パターン。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> { cn } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"@/lib/utils"</span>;<br><br>\n<span style="color:#6c7086;">// 条件付きクラス</span><br>\n&lt;<span style="color:#89b4fa;">button</span><br>\n  className={cn(<br>\n    <span style="color:#a6e3a1;">"px-4 py-2 rounded-md"</span>,<br>\n    isActive<br>\n      ? <span style="color:#a6e3a1;">"bg-primary text-white"</span><br>\n      : <span style="color:#a6e3a1;">"bg-muted text-muted-foreground"</span>,<br>\n    className <span style="color:#6c7086;">← 親からのclass上書き</span><br>\n  )}<br>\n/&gt;<br><br>\n<span style="color:#6c7086;">// cn() = clsx() + tailwind-merge</span><br>\ncn(<span style="color:#a6e3a1;">"p-4"</span>, <span style="color:#a6e3a1;">"p-2"</span>) → <span style="color:#a6e3a1;">"p-2"</span> <span style="color:#6c7086;">← 後勝ち</span>\n</div>',
                },
                tags: ["cn()", "clsx()", "tailwind-merge", "条件付きクラス"],
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        label: "上級",
        description: "テーマ設計、プラグイン、パフォーマンス最適化を学びます。",
        sections: [
          {
            id: "tw-a-theme",
            title: "テーマ・設計",
            description: "デザインシステムとしてのTailwind活用",
            topics: [
              {
                id: "tw-css-variables",
                title: "@theme / CSS変数統合",
                subtitle: "Tailwind v4テーマ",
                description: "Tailwind v4では@theme inlineブロックでCSS変数をTailwindトークンとして登録。shadcn/uiのvar()変数と直接統合できる。デザイントークンの一元管理が可能。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">@theme</span> inline {<br>\n  <span style="color:#6c7086;">/* CSS変数をTailwindトークンに */</span><br>\n  --color-primary: var(--primary);<br>\n  --spacing-phi-md: 1rem;<br>\n  --font-size-body: 1rem;<br>\n}<br><br>\n<span style="color:#6c7086;">/* 使用: bg-primary, p-phi-md */</span><br>\n&lt;<span style="color:#89b4fa;">div</span> className=<span style="color:#a6e3a1;">"bg-primary p-phi-md"</span>&gt;<br>\n  Tailwindトークンとして使用<br>\n&lt;/<span style="color:#89b4fa;">div</span>&gt;\n</div>',
                },
                tags: ["@theme", "CSS変数", "デザイントークン", "v4"],
              },
              {
                id: "tw-layer-utilities",
                title: "@layer utilities / components",
                subtitle: "カスタムユーティリティ",
                description: "@layer utilitiesでカスタムユーティリティクラスを定義。@layer componentsで再利用可能なコンポーネントスタイルを定義。Tailwindのpurge/treeshakingの対象になる。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">@layer</span> utilities {<br>\n  .shadow-neumorphic {<br>\n    box-shadow:<br>\n      8px 8px 16px rgba(0,0,0,0.06),<br>\n      -8px -8px 16px rgba(255,255,255,0.8);<br>\n  }<br>\n  .glass {<br>\n    background: rgba(255,255,255,0.6);<br>\n    backdrop-filter: blur(12px);<br>\n  }<br>\n}<br><br>\n<span style="color:#6c7086;">/* HTMLで普通のクラスとして使える */</span><br>\n&lt;<span style="color:#89b4fa;">div</span> className=<span style="color:#a6e3a1;">"shadow-neumorphic glass"</span>&gt;\n</div>',
                },
                tags: ["@layer", "utilities", "components", "カスタムクラス"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "shadcn-ui",
    name: "shadcn/ui",
    description: "コピー&ペーストで使えるReactコンポーネント集",
    longDescription:
      "shadcn/ui は Radix UI をベースとした、アクセシブルでカスタマイズ可能なUIコンポーネント集です。npmパッケージではなく、プロジェクトにコードを直接コピーして使う方式で、完全な制御が可能です。",
    icon: "Component",
    color: "oklch(0.45 0.05 0)",
    officialUrl: "https://ui.shadcn.com",
    levels: [
      {
        level: "beginner",
        label: "初級",
        description: "shadcn/uiの基本的なコンポーネントの使い方を学びます。",
        sections: [
          {
            id: "shadcn-b-setup",
            title: "セットアップ・基本",
            description: "インストールと基本コンポーネント",
            topics: [
              {
                id: "shadcn-install",
                title: "npx shadcn@latest init / add",
                subtitle: "インストール",
                description: "shadcn/uiはnpmパッケージではなく、CLIでコンポーネントのソースコードをプロジェクトにコピーする。init でプロジェクト設定、add で個別コンポーネントを追加。コードが手元にあるため自由にカスタマイズ可能。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;"># 1. プロジェクト初期化</span><br>\n$ npx shadcn@latest init<br><br>\n<span style="color:#6c7086;"># 2. コンポーネントを追加</span><br>\n$ npx shadcn@latest add button<br>\n$ npx shadcn@latest add card badge tabs<br><br>\n<span style="color:#6c7086;"># → src/components/ui/ にコード生成</span><br>\nsrc/components/ui/button.tsx<br>\nsrc/components/ui/card.tsx<br>\nsrc/components/ui/badge.tsx<br>\nsrc/components/ui/tabs.tsx<br><br>\n<span style="color:#a6e3a1;">// コードが手元にあるので自由に編集可能！</span>\n</div>',
                },
                tags: ["init", "add", "CLI", "コンポーネント追加"],
              },
              {
                id: "shadcn-button",
                title: "<Button>",
                subtitle: "ボタンコンポーネント",
                description: "variant prop で見た目を変更: default, destructive, outline, secondary, ghost, link。size prop でサイズ: default, sm, lg, icon。asChild で別の要素として描画可能。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> { Button } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"@/components/ui/button"</span>;<br><br>\n&lt;<span style="color:#a6e3a1;">Button</span>&gt;Default&lt;/<span style="color:#a6e3a1;">Button</span>&gt;<br>\n&lt;<span style="color:#a6e3a1;">Button</span> variant=<span style="color:#a6e3a1;">"outline"</span>&gt;Outline&lt;/<span style="color:#a6e3a1;">Button</span>&gt;<br>\n&lt;<span style="color:#a6e3a1;">Button</span> variant=<span style="color:#a6e3a1;">"destructive"</span>&gt;Delete&lt;/<span style="color:#a6e3a1;">Button</span>&gt;<br>\n&lt;<span style="color:#a6e3a1;">Button</span> variant=<span style="color:#a6e3a1;">"ghost"</span> size=<span style="color:#a6e3a1;">"sm"</span>&gt;Small Ghost&lt;/<span style="color:#a6e3a1;">Button</span>&gt;<br>\n&lt;<span style="color:#a6e3a1;">Button</span> variant=<span style="color:#a6e3a1;">"link"</span>&gt;Link Style&lt;/<span style="color:#a6e3a1;">Button</span>&gt;<br><br>\n<span style="color:#6c7086;">// asChild: Link等として描画</span><br>\n&lt;<span style="color:#a6e3a1;">Button</span> asChild&gt;<br>\n  &lt;<span style="color:#89b4fa;">a</span> href="/about"&gt;About&lt;/<span style="color:#89b4fa;">a</span>&gt;<br>\n&lt;/<span style="color:#a6e3a1;">Button</span>&gt;\n</div>',
                },
                tags: ["Button", "variant", "size", "asChild"],
              },
              {
                id: "shadcn-card",
                title: "<Card>",
                subtitle: "カードコンポーネント",
                description: "Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter の組み合わせで構成。構造的なコンテンツの表示に最適。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> {<br>\n  Card, CardHeader, CardTitle,<br>\n  CardDescription, CardContent, CardFooter<br>\n} <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"@/components/ui/card"</span>;<br><br>\n&lt;<span style="color:#a6e3a1;">Card</span>&gt;<br>\n  &lt;<span style="color:#a6e3a1;">CardHeader</span>&gt;<br>\n    &lt;<span style="color:#a6e3a1;">CardTitle</span>&gt;タイトル&lt;/<span style="color:#a6e3a1;">CardTitle</span>&gt;<br>\n    &lt;<span style="color:#a6e3a1;">CardDescription</span>&gt;説明文&lt;/<span style="color:#a6e3a1;">CardDescription</span>&gt;<br>\n  &lt;/<span style="color:#a6e3a1;">CardHeader</span>&gt;<br>\n  &lt;<span style="color:#a6e3a1;">CardContent</span>&gt;<br>\n    &lt;<span style="color:#89b4fa;">p</span>&gt;コンテンツ&lt;/<span style="color:#89b4fa;">p</span>&gt;<br>\n  &lt;/<span style="color:#a6e3a1;">CardContent</span>&gt;<br>\n  &lt;<span style="color:#a6e3a1;">CardFooter</span>&gt;<br>\n    &lt;<span style="color:#a6e3a1;">Button</span>&gt;アクション&lt;/<span style="color:#a6e3a1;">Button</span>&gt;<br>\n  &lt;/<span style="color:#a6e3a1;">CardFooter</span>&gt;<br>\n&lt;/<span style="color:#a6e3a1;">Card</span>&gt;\n</div>',
                },
                tags: ["Card", "CardHeader", "CardContent", "CardFooter"],
              },
            ],
          },
          {
            id: "shadcn-b-form",
            title: "フォームコンポーネント",
            description: "入力関連のコンポーネント",
            topics: [
              {
                id: "shadcn-badge-tabs",
                title: "<Badge> / <Tabs>",
                subtitle: "バッジ・タブ切替",
                description: "Badgeはステータスやカテゴリの表示に使う小さなラベル。Tabsは複数パネルのタブ切替UI。TabsList, TabsTrigger, TabsContentで構成。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> { Badge } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"@/components/ui/badge"</span>;<br>\n<span style="color:#cba6f7;">import</span> { Tabs, TabsList, TabsTrigger, TabsContent }<br>\n  <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"@/components/ui/tabs"</span>;<br><br>\n&lt;<span style="color:#a6e3a1;">Badge</span>&gt;Default&lt;/<span style="color:#a6e3a1;">Badge</span>&gt;<br>\n&lt;<span style="color:#a6e3a1;">Badge</span> variant=<span style="color:#a6e3a1;">"secondary"</span>&gt;Secondary&lt;/<span style="color:#a6e3a1;">Badge</span>&gt;<br><br>\n&lt;<span style="color:#a6e3a1;">Tabs</span> defaultValue=<span style="color:#a6e3a1;">"tab1"</span>&gt;<br>\n  &lt;<span style="color:#a6e3a1;">TabsList</span>&gt;<br>\n    &lt;<span style="color:#a6e3a1;">TabsTrigger</span> value=<span style="color:#a6e3a1;">"tab1"</span>&gt;タブ1&lt;/<span style="color:#a6e3a1;">TabsTrigger</span>&gt;<br>\n    &lt;<span style="color:#a6e3a1;">TabsTrigger</span> value=<span style="color:#a6e3a1;">"tab2"</span>&gt;タブ2&lt;/<span style="color:#a6e3a1;">TabsTrigger</span>&gt;<br>\n  &lt;/<span style="color:#a6e3a1;">TabsList</span>&gt;<br>\n  &lt;<span style="color:#a6e3a1;">TabsContent</span> value=<span style="color:#a6e3a1;">"tab1"</span>&gt;内容1&lt;/<span style="color:#a6e3a1;">TabsContent</span>&gt;<br>\n  &lt;<span style="color:#a6e3a1;">TabsContent</span> value=<span style="color:#a6e3a1;">"tab2"</span>&gt;内容2&lt;/<span style="color:#a6e3a1;">TabsContent</span>&gt;<br>\n&lt;/<span style="color:#a6e3a1;">Tabs</span>&gt;\n</div>',
                },
                tags: ["Badge", "Tabs", "TabsList", "TabsTrigger"],
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        label: "中級",
        description: "テーマカスタマイズとコンポーネントの拡張を学びます。",
        sections: [
          {
            id: "shadcn-i-theme",
            title: "テーマ・CSS変数",
            description: "shadcn/uiのカラーシステム",
            topics: [
              {
                id: "shadcn-css-vars",
                title: "CSS変数によるテーマ",
                subtitle: "カラーカスタマイズ",
                description: "shadcn/uiは :root のCSS変数でテーマカラーを管理。--primary, --secondary, --muted, --accent, --destructive等。oklch形式で定義し、.darkクラスでダークモード切替。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">:root</span> {<br>\n  --background: oklch(0.985 0.003 174);<br>\n  --foreground: oklch(0.15 0.01 174);<br>\n  --primary: oklch(0.45 0.12 174);<br>\n  --primary-foreground: oklch(0.985 0.005 174);<br>\n  --secondary: oklch(0.95 0.015 174);<br>\n  --muted: oklch(0.96 0.008 174);<br>\n  --accent: oklch(0.55 0.12 174);<br>\n  --destructive: oklch(0.577 0.245 27);<br>\n  --border: oklch(0.90 0.005 174);<br>\n  --ring: oklch(0.45 0.12 174);<br>\n}<br><br>\n<span style="color:#6c7086;">/* Tailwindクラスで使用 */</span><br>\nbg-primary text-primary-foreground<br>\nbg-muted text-muted-foreground\n</div>',
                },
                tags: ["CSS変数", "--primary", "--secondary", "oklch", "テーマ"],
              },
              {
                id: "shadcn-cva",
                title: "cva (Class Variance Authority)",
                subtitle: "バリアントパターン",
                description: "cvaはコンポーネントのスタイルバリアントを型安全に定義するユーティリティ。shadcn/uiの全コンポーネントがこのパターンで構築されている。variant と size の組み合わせで多彩なスタイルを実現。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> { cva } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"class-variance-authority"</span>;<br><br>\n<span style="color:#cba6f7;">const</span> buttonVariants = cva(<br>\n  <span style="color:#a6e3a1;">"rounded-md font-medium transition-colors"</span>,<br>\n  {<br>\n    variants: {<br>\n      variant: {<br>\n        default: <span style="color:#a6e3a1;">"bg-primary text-primary-foreground"</span>,<br>\n        outline: <span style="color:#a6e3a1;">"border border-input bg-background"</span>,<br>\n        ghost: <span style="color:#a6e3a1;">"hover:bg-accent"</span>,<br>\n      },<br>\n      size: {<br>\n        default: <span style="color:#a6e3a1;">"h-10 px-4 py-2"</span>,<br>\n        sm: <span style="color:#a6e3a1;">"h-9 px-3"</span>,<br>\n        lg: <span style="color:#a6e3a1;">"h-11 px-8"</span>,<br>\n      },<br>\n    },<br>\n    defaultVariants: {<br>\n      variant: <span style="color:#a6e3a1;">"default"</span>,<br>\n      size: <span style="color:#a6e3a1;">"default"</span>,<br>\n    },<br>\n  }<br>\n);\n</div>',
                },
                tags: ["cva", "variants", "class-variance-authority", "型安全"],
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        label: "上級",
        description: "カスタムコンポーネント作成とRadix UIの活用を学びます。",
        sections: [
          {
            id: "shadcn-a-custom",
            title: "カスタムコンポーネント",
            description: "shadcn/uiパターンでの独自コンポーネント構築",
            topics: [
              {
                id: "shadcn-radix",
                title: "Radix UI プリミティブ",
                subtitle: "ヘッドレスUIベース",
                description: "shadcn/uiはRadix UIのヘッドレスコンポーネント（スタイルなし・機能のみ）の上にTailwindでスタイルを被せている。Dialog, Popover, Select等の複雑なUIがアクセシビリティ対応済みで使える。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// Radix UIの構造</span><br>\n<span style="color:#cba6f7;">import</span> * as DialogPrimitive<br>\n  <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"@radix-ui/react-dialog"</span>;<br><br>\n<span style="color:#6c7086;">// shadcn/uiがTailwindスタイルを追加</span><br>\n<span style="color:#cba6f7;">const</span> DialogContent = React.forwardRef(<br>\n  ({ className, ...props }, ref) =&gt; (<br>\n    &lt;<span style="color:#a6e3a1;">DialogPrimitive.Content</span><br>\n      ref={ref}<br>\n      className={cn(<br>\n        <span style="color:#a6e3a1;">"fixed left-1/2 top-1/2"</span>,<br>\n        <span style="color:#a6e3a1;">"-translate-x-1/2 -translate-y-1/2"</span>,<br>\n        <span style="color:#a6e3a1;">"bg-background rounded-lg shadow-lg"</span>,<br>\n        <span style="color:#a6e3a1;">"p-6"</span>,<br>\n        className<br>\n      )}<br>\n      {...props}<br>\n    /&gt;<br>\n  )<br>\n);\n</div>',
                },
                tags: ["Radix UI", "ヘッドレス", "Dialog", "アクセシビリティ"],
              },
              {
                id: "shadcn-extend",
                title: "コンポーネントの拡張パターン",
                subtitle: "プロジェクト固有のカスタマイズ",
                description: "shadcn/uiコンポーネントはプロジェクト内にソースがあるため、直接編集してカスタマイズ可能。既存コンポーネントをラップして新しいバリアントを追加するパターンが実用的。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// 既存Buttonを拡張した IconButton</span><br>\n<span style="color:#cba6f7;">import</span> { Button, <span style="color:#cba6f7;">type</span> ButtonProps }<br>\n  <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"@/components/ui/button"</span>;<br>\n<span style="color:#cba6f7;">import</span> { cn } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"@/lib/utils"</span>;<br><br>\n<span style="color:#cba6f7;">type</span> IconButtonProps = ButtonProps &amp; {<br>\n  icon: React.ReactNode;<br>\n  label: <span style="color:#a6e3a1;">string</span>;<br>\n};<br><br>\n<span style="color:#cba6f7;">export function</span> <span style="color:#89b4fa;">IconButton</span>(<br>\n  { icon, label, className, ...props }: IconButtonProps<br>\n) {<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#a6e3a1;">Button</span><br>\n      aria-label={label}<br>\n      className={cn(<span style="color:#a6e3a1;">"gap-2"</span>, className)}<br>\n      {...props}<br>\n    &gt;<br>\n      {icon}<br>\n      {label}<br>\n    &lt;/<span style="color:#a6e3a1;">Button</span>&gt;<br>\n  );<br>\n}\n</div>',
                },
                tags: ["拡張", "ラッパー", "カスタムバリアント", "型継承"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "nextjs",
    name: "Next.js",
    description: "Reactベースのフルスタックフレームワーク",
    longDescription:
      "Next.js は Vercel が開発したReactフレームワークです。App Routerによるファイルベースルーティング、Server Components、SSR/SSG、API Routes等を提供し、Reactアプリの本番運用に必要な機能が揃っています。",
    icon: "Globe",
    color: "oklch(0.35 0.02 0)",
    officialUrl: "https://nextjs.org",
    levels: [
      {
        level: "beginner",
        label: "初級",
        description: "Next.jsの基本概念、ルーティング、ページ作成を学びます。",
        sections: [
          {
            id: "next-b-routing",
            title: "App Router / ルーティング",
            description: "ファイルベースのルーティングシステム",
            topics: [
              {
                id: "next-file-routing",
                title: "page.tsx / layout.tsx",
                subtitle: "ファイルベースルーティング",
                description: "app/ディレクトリ内のフォルダ構造がそのままURLパスになる。page.tsxがページ本体、layout.tsxが共通レイアウト。layout.tsxは子ページ切替時に再レンダリングされない。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// フォルダ構造 → URL</span><br>\napp/<br>\n├── page.tsx           <span style="color:#a6e3a1;">→ /</span><br>\n├── layout.tsx         <span style="color:#6c7086;">← 共通レイアウト</span><br>\n├── about/<br>\n│   └── page.tsx       <span style="color:#a6e3a1;">→ /about</span><br>\n├── blog/<br>\n│   ├── page.tsx       <span style="color:#a6e3a1;">→ /blog</span><br>\n│   └── [slug]/<br>\n│       └── page.tsx   <span style="color:#a6e3a1;">→ /blog/hello-world</span><br>\n└── not-found.tsx      <span style="color:#6c7086;">← 404ページ</span>\n</div>',
                },
                tags: ["page.tsx", "layout.tsx", "App Router", "ファイルベース"],
              },
              {
                id: "next-dynamic-routes",
                title: "[slug] / [...slug]",
                subtitle: "動的ルーティング",
                description: "[slug]フォルダで動的パラメータを受け取る。paramsはPromiseとしてasync/awaitで取得（Next.js 15+）。[...slug]で複数セグメント対応。generateStaticParamsで静的生成も可能。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// app/blog/[slug]/page.tsx</span><br>\n<span style="color:#cba6f7;">type</span> Props = {<br>\n  params: Promise&lt;{ slug: <span style="color:#a6e3a1;">string</span> }&gt;;<br>\n};<br><br>\n<span style="color:#cba6f7;">export default async function</span> <span style="color:#89b4fa;">BlogPost</span>(<br>\n  { params }: Props<br>\n) {<br>\n  <span style="color:#cba6f7;">const</span> { slug } = <span style="color:#cba6f7;">await</span> params;<br>\n  <span style="color:#cba6f7;">return</span> &lt;<span style="color:#89b4fa;">h1</span>&gt;{slug}&lt;/<span style="color:#89b4fa;">h1</span>&gt;;<br>\n}<br><br>\n<span style="color:#6c7086;">// 静的生成</span><br>\n<span style="color:#cba6f7;">export async function</span> <span style="color:#89b4fa;">generateStaticParams</span>() {<br>\n  <span style="color:#cba6f7;">return</span> [<br>\n    { slug: <span style="color:#a6e3a1;">"hello"</span> },<br>\n    { slug: <span style="color:#a6e3a1;">"world"</span> },<br>\n  ];<br>\n}\n</div>',
                },
                tags: ["[slug]", "params", "generateStaticParams", "動的ルート"],
              },
              {
                id: "next-loading-error",
                title: "loading.tsx / error.tsx / not-found.tsx",
                subtitle: "特殊ファイル",
                description: "loading.tsx: ページ読み込み中のスケルトンUI（Suspenseを自動ラップ）。error.tsx: エラー発生時のフォールバック（\"use client\"必須）。not-found.tsx: 404ページ。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// loading.tsx — 自動でSuspenseラップ</span><br>\n<span style="color:#cba6f7;">export default function</span> <span style="color:#89b4fa;">Loading</span>() {<br>\n  <span style="color:#cba6f7;">return</span> &lt;<span style="color:#89b4fa;">div</span>&gt;読み込み中...&lt;/<span style="color:#89b4fa;">div</span>&gt;;<br>\n}<br><br>\n<span style="color:#6c7086;">// error.tsx — "use client" 必須</span><br>\n<span style="color:#a6e3a1;">"use client"</span>;<br>\n<span style="color:#cba6f7;">export default function</span> <span style="color:#89b4fa;">Error</span>(<br>\n  { error, reset }: { error: Error; reset: () =&gt; void }<br>\n) {<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#89b4fa;">div</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">h2</span>&gt;エラー: {error.message}&lt;/<span style="color:#89b4fa;">h2</span>&gt;<br>\n      &lt;<span style="color:#89b4fa;">button</span> onClick={reset}&gt;再試行&lt;/<span style="color:#89b4fa;">button</span>&gt;<br>\n    &lt;/<span style="color:#89b4fa;">div</span>&gt;<br>\n  );<br>\n}\n</div>',
                },
                tags: ["loading.tsx", "error.tsx", "not-found.tsx", "Suspense"],
              },
            ],
          },
          {
            id: "next-b-components",
            title: "コンポーネント・ナビゲーション",
            description: "Next.js固有のコンポーネント",
            topics: [
              {
                id: "next-link",
                title: "<Link>",
                subtitle: "クライアントサイドナビゲーション",
                description: "Next.jsのLinkコンポーネントは<a>タグの代わりに使い、ページ遷移時にフルリロードせずクライアントサイドで遷移する。自動プリフェッチでリンク先を事前読み込み。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> Link <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"next/link"</span>;<br><br>\n<span style="color:#6c7086;">// 基本</span><br>\n&lt;<span style="color:#a6e3a1;">Link</span> href=<span style="color:#a6e3a1;">"/about"</span>&gt;About&lt;/<span style="color:#a6e3a1;">Link</span>&gt;<br><br>\n<span style="color:#6c7086;">// 動的ルート</span><br>\n&lt;<span style="color:#a6e3a1;">Link</span> href={`/blog/${post.slug}`}&gt;<br>\n  {post.title}<br>\n&lt;/<span style="color:#a6e3a1;">Link</span>&gt;<br><br>\n<span style="color:#f38ba8;">// NG: &lt;a href="/about"&gt; は使わない</span><br>\n<span style="color:#6c7086;">// → フルリロードが発生してしまう</span>\n</div>',
                },
                tags: ["Link", "next/link", "プリフェッチ", "ナビゲーション"],
              },
              {
                id: "next-image",
                title: "<Image>",
                subtitle: "画像最適化",
                description: "Next.jsのImageコンポーネントは画像を自動最適化（WebP変換、リサイズ、遅延読み込み）。width/heightまたはfillが必須。外部画像はnext.config.tsのremotePatternsで許可が必要。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import</span> Image <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"next/image"</span>;<br><br>\n<span style="color:#6c7086;">// サイズ指定</span><br>\n&lt;<span style="color:#a6e3a1;">Image</span><br>\n  src=<span style="color:#a6e3a1;">"/logo.png"</span><br>\n  alt=<span style="color:#a6e3a1;">"ロゴ"</span><br>\n  width={200}<br>\n  height={100}<br>\n  priority  <span style="color:#6c7086;">← LCP画像に付ける</span><br>\n/&gt;<br><br>\n<span style="color:#6c7086;">// fill: 親要素に合わせる</span><br>\n&lt;<span style="color:#89b4fa;">div</span> className=<span style="color:#a6e3a1;">"relative h-64"</span>&gt;<br>\n  &lt;<span style="color:#a6e3a1;">Image</span><br>\n    src=<span style="color:#a6e3a1;">"/hero.jpg"</span><br>\n    alt=<span style="color:#a6e3a1;">"ヒーロー"</span><br>\n    fill<br>\n    className=<span style="color:#a6e3a1;">"object-cover"</span><br>\n  /&gt;<br>\n&lt;/<span style="color:#89b4fa;">div</span>&gt;\n</div>',
                },
                tags: ["Image", "next/image", "画像最適化", "priority", "fill"],
              },
              {
                id: "next-metadata",
                title: "Metadata API",
                subtitle: "SEO・メタデータ",
                description: "exportでmetadataオブジェクトを定義、またはgenerateMetadata関数で動的に生成。title, description, openGraph等を型安全に設定。layout.tsxで共通設定、page.tsxで上書き。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">import type</span> { Metadata } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"next"</span>;<br><br>\n<span style="color:#6c7086;">// 静的メタデータ</span><br>\n<span style="color:#cba6f7;">export const</span> metadata: Metadata = {<br>\n  title: <span style="color:#a6e3a1;">"サイト名"</span>,<br>\n  description: <span style="color:#a6e3a1;">"サイトの説明"</span>,<br>\n};<br><br>\n<span style="color:#6c7086;">// 動的メタデータ</span><br>\n<span style="color:#cba6f7;">export async function</span> <span style="color:#89b4fa;">generateMetadata</span>(<br>\n  { params }: Props<br>\n): Promise&lt;Metadata&gt; {<br>\n  <span style="color:#cba6f7;">const</span> { slug } = <span style="color:#cba6f7;">await</span> params;<br>\n  <span style="color:#cba6f7;">return</span> {<br>\n    title: `${slug} — サイト名`,<br>\n  };<br>\n}\n</div>',
                },
                tags: ["Metadata", "generateMetadata", "title", "SEO"],
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        label: "中級",
        description: "データ取得、Server Actions、ミドルウェアを学びます。",
        sections: [
          {
            id: "next-i-data",
            title: "データ取得",
            description: "サーバーサイドでのデータ取得戦略",
            topics: [
              {
                id: "next-server-fetch",
                title: "Server Component での fetch",
                subtitle: "サーバーサイドデータ取得",
                description: "Server Componentではasync/awaitで直接データを取得できる。fetchのcacheオプションでキャッシュ戦略を制御。revalidateで再検証間隔を指定（ISR）。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// Server Component（デフォルト）</span><br>\n<span style="color:#cba6f7;">async function</span> <span style="color:#89b4fa;">PostList</span>() {<br>\n  <span style="color:#cba6f7;">const</span> res = <span style="color:#cba6f7;">await</span> fetch(<br>\n    <span style="color:#a6e3a1;">"https://api.example.com/posts"</span>,<br>\n    { next: { revalidate: 3600 } }<br>\n    <span style="color:#6c7086;">↑ 1時間ごとに再検証（ISR）</span><br>\n  );<br>\n  <span style="color:#cba6f7;">const</span> posts = <span style="color:#cba6f7;">await</span> res.json();<br><br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;<span style="color:#89b4fa;">ul</span>&gt;<br>\n      {posts.map((p) =&gt; (<br>\n        &lt;<span style="color:#89b4fa;">li</span> key={p.id}&gt;{p.title}&lt;/<span style="color:#89b4fa;">li</span>&gt;<br>\n      ))}<br>\n    &lt;/<span style="color:#89b4fa;">ul</span>&gt;<br>\n  );<br>\n}\n</div>',
                },
                tags: ["fetch", "revalidate", "ISR", "Server Component"],
              },
              {
                id: "next-server-actions",
                title: "Server Actions",
                subtitle: "サーバーサイド関数",
                description: "\"use server\"で宣言した関数はサーバーでのみ実行される。フォーム送信やデータ変更に使用。API Routeを書かずにサーバー処理を実行可能。revalidatePathでキャッシュを更新。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// Server Action</span><br>\n<span style="color:#a6e3a1;">"use server"</span>;<br><br>\n<span style="color:#cba6f7;">export async function</span> <span style="color:#89b4fa;">createPost</span>(<br>\n  formData: FormData<br>\n) {<br>\n  <span style="color:#cba6f7;">const</span> title = formData.get(<span style="color:#a6e3a1;">"title"</span>);<br>\n  <span style="color:#cba6f7;">await</span> db.post.create({ data: { title } });<br>\n  revalidatePath(<span style="color:#a6e3a1;">"/posts"</span>);<br>\n}<br><br>\n<span style="color:#6c7086;">// フォームから直接呼び出し</span><br>\n&lt;<span style="color:#89b4fa;">form</span> action={createPost}&gt;<br>\n  &lt;<span style="color:#89b4fa;">input</span> name=<span style="color:#a6e3a1;">"title"</span> /&gt;<br>\n  &lt;<span style="color:#89b4fa;">button</span> type=<span style="color:#a6e3a1;">"submit"</span>&gt;投稿&lt;/<span style="color:#89b4fa;">button</span>&gt;<br>\n&lt;/<span style="color:#89b4fa;">form</span>&gt;\n</div>',
                },
                tags: ["use server", "Server Actions", "formData", "revalidatePath"],
              },
              {
                id: "next-middleware",
                title: "middleware.ts",
                subtitle: "ミドルウェア",
                description: "リクエストがページに到達する前に実行される処理。認証チェック、リダイレクト、ヘッダー追加等に使用。プロジェクトルートにmiddleware.tsを配置。matcherで対象パスを制限。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// middleware.ts（プロジェクトルート）</span><br>\n<span style="color:#cba6f7;">import</span> { NextResponse } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"next/server"</span>;<br>\n<span style="color:#cba6f7;">import type</span> { NextRequest } <span style="color:#cba6f7;">from</span> <span style="color:#a6e3a1;">"next/server"</span>;<br><br>\n<span style="color:#cba6f7;">export function</span> <span style="color:#89b4fa;">middleware</span>(req: NextRequest) {<br>\n  <span style="color:#cba6f7;">const</span> token = req.cookies.get(<span style="color:#a6e3a1;">"token"</span>);<br><br>\n  <span style="color:#cba6f7;">if</span> (!token) {<br>\n    <span style="color:#cba6f7;">return</span> NextResponse.redirect(<br>\n      <span style="color:#cba6f7;">new</span> URL(<span style="color:#a6e3a1;">"/login"</span>, req.url)<br>\n    );<br>\n  }<br>\n}<br><br>\n<span style="color:#cba6f7;">export const</span> config = {<br>\n  matcher: [<span style="color:#a6e3a1;">"/dashboard/:path*"</span>],<br>\n};\n</div>',
                },
                tags: ["middleware", "NextResponse", "matcher", "認証"],
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        label: "上級",
        description: "キャッシュ戦略、並列ルート、パフォーマンス最適化を学びます。",
        sections: [
          {
            id: "next-a-cache",
            title: "キャッシュ・レンダリング戦略",
            description: "Next.jsのキャッシュレイヤーとレンダリング方式",
            topics: [
              {
                id: "next-rendering",
                title: "SSG / SSR / ISR / PPR",
                subtitle: "レンダリング戦略",
                description: "SSG: ビルド時に生成（最速）。SSR: リクエスト毎に生成。ISR: 一定間隔で再生成。PPR (Partial Prerendering): ページの静的部分と動的部分を分離してストリーミング。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// SSG（デフォルト: 動的な要素がなければ）</span><br>\n<span style="color:#cba6f7;">export default function</span> <span style="color:#89b4fa;">About</span>() {<br>\n  <span style="color:#cba6f7;">return</span> &lt;<span style="color:#89b4fa;">h1</span>&gt;About&lt;/<span style="color:#89b4fa;">h1</span>&gt;;<br>\n}<br><br>\n<span style="color:#6c7086;">// SSR（動的レンダリング強制）</span><br>\n<span style="color:#cba6f7;">export const</span> dynamic = <span style="color:#a6e3a1;">"force-dynamic"</span>;<br><br>\n<span style="color:#6c7086;">// ISR（再検証間隔を指定）</span><br>\n<span style="color:#cba6f7;">export const</span> revalidate = 3600; <span style="color:#6c7086;">// 1時間</span><br><br>\n<span style="color:#6c7086;">// PPR（実験的機能）</span><br>\n<span style="color:#6c7086;">// next.config.ts で experimental.ppr を有効化</span><br>\n<span style="color:#6c7086;">// 静的シェル + Suspenseで動的部分をストリーミング</span>\n</div>',
                },
                tags: ["SSG", "SSR", "ISR", "PPR", "revalidate"],
              },
              {
                id: "next-parallel-routes",
                title: "@folder / 並列ルート",
                subtitle: "並列・インターセプトルート",
                description: "@で始まるフォルダ名で並列ルート（同じページに複数の独立したコンテンツを同時表示）。(.)で始まるフォルダでインターセプトルート（モーダル表示等）。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// 並列ルート</span><br>\napp/<br>\n├── layout.tsx<br>\n├── @dashboard/   <span style="color:#a6e3a1;">← 並列ルートA</span><br>\n│   └── page.tsx<br>\n├── @analytics/   <span style="color:#a6e3a1;">← 並列ルートB</span><br>\n│   └── page.tsx<br>\n└── page.tsx<br><br>\n<span style="color:#6c7086;">// layout.tsx で両方を表示</span><br>\n<span style="color:#cba6f7;">export default function</span> <span style="color:#89b4fa;">Layout</span>({<br>\n  children,<br>\n  dashboard,<br>\n  analytics,<br>\n}: {<br>\n  children: React.ReactNode;<br>\n  dashboard: React.ReactNode;<br>\n  analytics: React.ReactNode;<br>\n}) {<br>\n  <span style="color:#cba6f7;">return</span> (<br>\n    &lt;&gt;<br>\n      {children}<br>\n      {dashboard}<br>\n      {analytics}<br>\n    &lt;/&gt;<br>\n  );<br>\n}\n</div>',
                },
                tags: ["@folder", "並列ルート", "インターセプト", "モーダル"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "frontend-basics",
    name: "フロントエンド基礎知識",
    description: "Web開発で必要な基礎概念と仕組み",
    longDescription:
      "フロントエンド開発に必要な、ブラウザの仕組み、ネットワーク、開発ツール、パッケージ管理、Git等の基礎知識を体系的に学びます。コードを書く前に理解しておくべき土台です。",
    icon: "BookOpen",
    color: "oklch(0.50 0.10 60)",
    officialUrl: "https://developer.mozilla.org/ja/docs/Learn",
    levels: [
      {
        level: "beginner",
        label: "初級",
        description: "Webの仕組みと開発ツールの基本を学びます。",
        sections: [
          {
            id: "fe-b-web",
            title: "Webの仕組み",
            description: "ブラウザとサーバーの基本",
            topics: [
              {
                id: "fe-http",
                title: "HTTP / HTTPS",
                subtitle: "通信プロトコル",
                description: "ブラウザがサーバーにリクエストを送り、レスポンスを受け取る仕組み。HTTPメソッド: GET（取得）、POST（作成）、PUT（更新）、DELETE（削除）。HTTPSはSSL/TLSで通信を暗号化したもの。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">リクエスト（ブラウザ → サーバー）</span><br>\nGET /api/users HTTP/1.1<br>\nHost: example.com<br>\nAccept: application/json<br><br>\n<span style="color:#a6e3a1;">レスポンス（サーバー → ブラウザ）</span><br>\nHTTP/1.1 200 OK<br>\nContent-Type: application/json<br><br>\n[{ "id": 1, "name": "太郎" }]<br><br>\n<span style="color:#6c7086;">ステータスコード:</span><br>\n200 OK          <span style="color:#a6e3a1;">成功</span><br>\n301 Redirect    <span style="color:#f9e2af;">リダイレクト</span><br>\n404 Not Found   <span style="color:#f38ba8;">見つからない</span><br>\n500 Server Error <span style="color:#f38ba8;">サーバーエラー</span>\n</div>',
                },
                tags: ["HTTP", "HTTPS", "GET", "POST", "ステータスコード"],
              },
              {
                id: "fe-dom",
                title: "DOM (Document Object Model)",
                subtitle: "HTML→ツリー構造",
                description: "ブラウザがHTMLを解析して作る木構造のオブジェクト。JavaScriptはDOMを操作して画面を動的に変更する。ReactはこのDOM操作を仮想DOM経由で効率化している。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">HTML:</span><br>\n&lt;body&gt;<br>\n  &lt;h1&gt;タイトル&lt;/h1&gt;<br>\n  &lt;p&gt;段落&lt;/p&gt;<br>\n&lt;/body&gt;<br><br>\n<span style="color:#a6e3a1;">DOM ツリー:</span><br>\ndocument<br>\n└── html<br>\n    ├── head<br>\n    └── body<br>\n        ├── h1 → "タイトル"<br>\n        └── p  → "段落"<br><br>\n<span style="color:#6c7086;">JavaScript でDOM操作:</span><br>\ndocument.querySelector(<span style="color:#a6e3a1;">"h1"</span>)<br>\n  .textContent = <span style="color:#a6e3a1;">"新タイトル"</span>;<br><br>\n<span style="color:#6c7086;">React: 仮想DOMで差分だけ更新</span>\n</div>',
                },
                tags: ["DOM", "ツリー構造", "querySelector", "仮想DOM"],
              },
              {
                id: "fe-devtools",
                title: "ブラウザ開発者ツール",
                subtitle: "DevTools",
                description: "F12またはCmd+Option+Iで開く。要素パネル（HTML/CSS確認）、コンソール（JSログ・エラー）、ネットワーク（通信監視）、パフォーマンス（速度計測）が主要機能。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">主要パネル:</span><br><br>\n<span style="color:#a6e3a1;">Elements</span>（要素）<br>\n  HTMLの確認・編集、CSSの確認・変更<br>\n  ボックスモデルの視覚化<br><br>\n<span style="color:#a6e3a1;">Console</span>（コンソール）<br>\n  console.log() の出力確認<br>\n  エラーメッセージの確認<br>\n  JavaScriptの実行<br><br>\n<span style="color:#a6e3a1;">Network</span>（ネットワーク）<br>\n  APIリクエスト/レスポンスの確認<br>\n  読み込み時間の計測<br><br>\n<span style="color:#a6e3a1;">Application</span>（アプリケーション）<br>\n  Cookie, LocalStorage の確認<br><br>\n<span style="color:#f9e2af;">開き方: F12 / Cmd+Option+I</span>\n</div>',
                },
                tags: ["DevTools", "Elements", "Console", "Network", "F12"],
              },
            ],
          },
          {
            id: "fe-b-tools",
            title: "開発ツール",
            description: "パッケージ管理とビルドツール",
            topics: [
              {
                id: "fe-npm",
                title: "npm / package.json",
                subtitle: "パッケージ管理",
                description: "npmはNode.jsのパッケージ管理ツール。package.jsonにプロジェクトの依存パッケージとスクリプトを定義。npm installで依存をインストール、npm run devで開発サーバー起動。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// package.json</span><br>\n{<br>\n  "name": <span style="color:#a6e3a1;">"my-app"</span>,<br>\n  "scripts": {<br>\n    "dev": <span style="color:#a6e3a1;">"next dev"</span>,<br>\n    "build": <span style="color:#a6e3a1;">"next build"</span>,<br>\n    "lint": <span style="color:#a6e3a1;">"eslint ."</span><br>\n  },<br>\n  "dependencies": {<br>\n    "next": <span style="color:#a6e3a1;">"^16.0.0"</span>,<br>\n    "react": <span style="color:#a6e3a1;">"^19.0.0"</span><br>\n  },<br>\n  "devDependencies": {<br>\n    "typescript": <span style="color:#a6e3a1;">"^5.0.0"</span><br>\n  }<br>\n}<br><br>\n<span style="color:#f9e2af;">$ npm install</span>     <span style="color:#6c7086;">依存インストール</span><br>\n<span style="color:#f9e2af;">$ npm run dev</span>     <span style="color:#6c7086;">開発サーバー</span><br>\n<span style="color:#f9e2af;">$ npm run build</span>   <span style="color:#6c7086;">本番ビルド</span>\n</div>',
                },
                tags: ["npm", "package.json", "dependencies", "scripts"],
              },
              {
                id: "fe-git-basics",
                title: "Git 基礎",
                subtitle: "バージョン管理",
                description: "ファイルの変更履歴を管理するツール。add（ステージング）→ commit（記録）→ push（リモートに送信）の流れ。ブランチで並行作業、Pull Requestでレビュー。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#f9e2af;">$ git init</span>              <span style="color:#6c7086;">リポジトリ初期化</span><br>\n<span style="color:#f9e2af;">$ git add .</span>             <span style="color:#6c7086;">全ファイルをステージ</span><br>\n<span style="color:#f9e2af;">$ git commit -m "feat: 初期実装"</span><br>\n<span style="color:#f9e2af;">$ git push origin main</span>  <span style="color:#6c7086;">リモートに送信</span><br><br>\n<span style="color:#89b4fa;">ブランチ:</span><br>\n<span style="color:#f9e2af;">$ git checkout -b feature/login</span><br>\n<span style="color:#6c7086;">→ 作業 → commit → push</span><br>\n<span style="color:#6c7086;">→ Pull Request でレビュー</span><br>\n<span style="color:#6c7086;">→ merge で main に統合</span><br><br>\n<span style="color:#89b4fa;">よく使うコマンド:</span><br>\n<span style="color:#f9e2af;">git status</span>   <span style="color:#6c7086;">変更確認</span><br>\n<span style="color:#f9e2af;">git diff</span>     <span style="color:#6c7086;">差分表示</span><br>\n<span style="color:#f9e2af;">git log</span>      <span style="color:#6c7086;">履歴確認</span><br>\n<span style="color:#f9e2af;">git pull</span>     <span style="color:#6c7086;">リモートの変更取得</span>\n</div>',
                },
                tags: ["git", "commit", "push", "branch", "Pull Request"],
              },
            ],
          },
        ],
      },
      {
        level: "intermediate",
        label: "中級",
        description: "TypeScript、API連携、環境変数を学びます。",
        sections: [
          {
            id: "fe-i-typescript",
            title: "TypeScript 基礎",
            description: "型安全なJavaScript",
            topics: [
              {
                id: "fe-ts-types",
                title: "基本型 / type / interface",
                subtitle: "型定義",
                description: "string, number, boolean, null, undefinedが基本型。typeで型エイリアス、interfaceでオブジェクト型を定義。?で省略可能、|でユニオン型。TypeScriptはビルド時に型チェックし、実行時にはJavaScriptになる。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// 基本型</span><br>\n<span style="color:#cba6f7;">const</span> name: <span style="color:#a6e3a1;">string</span> = <span style="color:#a6e3a1;">"太郎"</span>;<br>\n<span style="color:#cba6f7;">const</span> age: <span style="color:#a6e3a1;">number</span> = 25;<br>\n<span style="color:#cba6f7;">const</span> active: <span style="color:#a6e3a1;">boolean</span> = <span style="color:#fab387;">true</span>;<br><br>\n<span style="color:#6c7086;">// type（型エイリアス）</span><br>\n<span style="color:#cba6f7;">type</span> <span style="color:#89b4fa;">Status</span> = <span style="color:#a6e3a1;">"active"</span> | <span style="color:#a6e3a1;">"inactive"</span>;<br><br>\n<span style="color:#6c7086;">// type（オブジェクト型）</span><br>\n<span style="color:#cba6f7;">type</span> <span style="color:#89b4fa;">User</span> = {<br>\n  id: <span style="color:#a6e3a1;">number</span>;<br>\n  name: <span style="color:#a6e3a1;">string</span>;<br>\n  email?: <span style="color:#a6e3a1;">string</span>;  <span style="color:#6c7086;">← ? = 省略可能</span><br>\n  status: Status;<br>\n};<br><br>\n<span style="color:#6c7086;">// 配列型</span><br>\n<span style="color:#cba6f7;">const</span> items: <span style="color:#a6e3a1;">string</span>[] = [<span style="color:#a6e3a1;">"a"</span>, <span style="color:#a6e3a1;">"b"</span>];\n</div>',
                },
                tags: ["string", "number", "type", "interface", "ユニオン型"],
              },
              {
                id: "fe-ts-generics",
                title: "Generics / Utility Types",
                subtitle: "汎用的な型",
                description: "Generics(<T>)で型をパラメータ化し、再利用可能な型定義を作る。Utility Types: Partial<T>（全プロパティ省略可能）、Pick<T, K>（一部抽出）、Omit<T, K>（一部除外）、Record<K, V>。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// Generics</span><br>\n<span style="color:#cba6f7;">function</span> <span style="color:#89b4fa;">first</span>&lt;T&gt;(arr: T[]): T | <span style="color:#fab387;">undefined</span> {<br>\n  <span style="color:#cba6f7;">return</span> arr[0];<br>\n}<br>\nfirst([1, 2, 3]);      <span style="color:#6c7086;">→ number</span><br>\nfirst([<span style="color:#a6e3a1;">"a"</span>, <span style="color:#a6e3a1;">"b"</span>]);    <span style="color:#6c7086;">→ string</span><br><br>\n<span style="color:#6c7086;">// Utility Types</span><br>\n<span style="color:#cba6f7;">type</span> User = { id: number; name: string; email: string };<br><br>\nPartial&lt;User&gt;      <span style="color:#6c7086;">→ 全て省略可能</span><br>\nPick&lt;User, <span style="color:#a6e3a1;">"id"</span> | <span style="color:#a6e3a1;">"name"</span>&gt;  <span style="color:#6c7086;">→ id, nameだけ</span><br>\nOmit&lt;User, <span style="color:#a6e3a1;">"email"</span>&gt;      <span style="color:#6c7086;">→ email以外</span><br>\nRecord&lt;string, number&gt; <span style="color:#6c7086;">→ {[k: string]: number}</span>\n</div>',
                },
                tags: ["Generics", "Partial", "Pick", "Omit", "Record"],
              },
            ],
          },
          {
            id: "fe-i-api",
            title: "API連携・環境変数",
            description: "外部サービスとの連携と設定管理",
            topics: [
              {
                id: "fe-fetch-api",
                title: "fetch / async/await",
                subtitle: "API通信",
                description: "fetch()でHTTPリクエストを送信し、レスポンスを受け取る。async/awaitで非同期処理を同期的に書ける。エラーハンドリングはtry/catchで行う。res.ok でステータスチェック。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#cba6f7;">async function</span> <span style="color:#89b4fa;">getUsers</span>() {<br>\n  <span style="color:#cba6f7;">try</span> {<br>\n    <span style="color:#cba6f7;">const</span> res = <span style="color:#cba6f7;">await</span> fetch(<span style="color:#a6e3a1;">"/api/users"</span>);<br><br>\n    <span style="color:#cba6f7;">if</span> (!res.ok) {<br>\n      <span style="color:#cba6f7;">throw new</span> Error(`HTTP ${res.status}`);<br>\n    }<br><br>\n    <span style="color:#cba6f7;">const</span> data = <span style="color:#cba6f7;">await</span> res.json();<br>\n    <span style="color:#cba6f7;">return</span> data;<br>\n  } <span style="color:#cba6f7;">catch</span> (error) {<br>\n    console.error(<span style="color:#a6e3a1;">"通信エラー:"</span>, error);<br>\n  }<br>\n}<br><br>\n<span style="color:#6c7086;">// POST リクエスト</span><br>\n<span style="color:#cba6f7;">await</span> fetch(<span style="color:#a6e3a1;">"/api/users"</span>, {<br>\n  method: <span style="color:#a6e3a1;">"POST"</span>,<br>\n  headers: { <span style="color:#a6e3a1;">"Content-Type"</span>: <span style="color:#a6e3a1;">"application/json"</span> },<br>\n  body: JSON.stringify({ name: <span style="color:#a6e3a1;">"太郎"</span> }),<br>\n});\n</div>',
                },
                tags: ["fetch", "async/await", "try/catch", "JSON", "API"],
              },
              {
                id: "fe-env",
                title: ".env / 環境変数",
                subtitle: "環境設定",
                description: ".envファイルでAPIキーやURL等の設定値を管理。Next.jsではNEXT_PUBLIC_接頭辞でクライアントに公開。秘密の値（APIキー等）はサーバーのみで使用。.envはGitにコミットしない（.gitignoreに追加）。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#6c7086;">// .env.local</span><br>\nDATABASE_URL=<span style="color:#a6e3a1;">"postgresql://..."</span><br>\nAPI_SECRET=<span style="color:#a6e3a1;">"sk_..."</span>  <span style="color:#f38ba8;">← サーバーのみ</span><br>\nNEXT_PUBLIC_API_URL=<span style="color:#a6e3a1;">"https://api.example.com"</span><br>\n  <span style="color:#a6e3a1;">↑ NEXT_PUBLIC_ = クライアントでも使える</span><br><br>\n<span style="color:#6c7086;">// 使用（Server Component）</span><br>\n<span style="color:#cba6f7;">const</span> url = process.env.DATABASE_URL;<br><br>\n<span style="color:#6c7086;">// 使用（Client Component）</span><br>\n<span style="color:#cba6f7;">const</span> apiUrl = process.env.NEXT_PUBLIC_API_URL;<br><br>\n<span style="color:#f38ba8;">// .gitignore に必ず追加:</span><br>\n.env<br>\n.env.local<br>\n.env.*.local\n</div>',
                },
                tags: [".env", "NEXT_PUBLIC_", "環境変数", "APIキー", ".gitignore"],
              },
            ],
          },
        ],
      },
      {
        level: "advanced",
        label: "上級",
        description: "パフォーマンス、セキュリティ、デプロイを学びます。",
        sections: [
          {
            id: "fe-a-performance",
            title: "パフォーマンス",
            description: "Core Web Vitalsと最適化",
            topics: [
              {
                id: "fe-core-web-vitals",
                title: "LCP / INP / CLS",
                subtitle: "Core Web Vitals",
                description: "Googleの検索ランキングに影響する指標。LCP (Largest Contentful Paint): 最大コンテンツの表示速度、2.5秒以内が目標。INP (Interaction to Next Paint): 操作への応答速度、200ms以内。CLS (Cumulative Layout Shift): レイアウトのずれ、0.1以下。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">Core Web Vitals:</span><br><br>\n<span style="color:#a6e3a1;">LCP</span> (Largest Contentful Paint)<br>\n  目標: ≤ 2.5秒<br>\n  改善: 画像最適化, フォント最適化,<br>\n       priority属性, preload<br><br>\n<span style="color:#a6e3a1;">INP</span> (Interaction to Next Paint)<br>\n  目標: ≤ 200ms<br>\n  改善: 重い処理の分割, Web Worker,<br>\n       useDeferredValue, useTransition<br><br>\n<span style="color:#a6e3a1;">CLS</span> (Cumulative Layout Shift)<br>\n  目標: ≤ 0.1<br>\n  改善: 画像にwidth/height指定,<br>\n       フォントのsize-adjust,<br>\n       動的コンテンツにスペース確保<br><br>\n<span style="color:#f9e2af;">計測: Lighthouse, PageSpeed Insights</span>\n</div>',
                },
                tags: ["LCP", "INP", "CLS", "Core Web Vitals", "Lighthouse"],
              },
              {
                id: "fe-security",
                title: "XSS / CSRF / CSP",
                subtitle: "Webセキュリティ基礎",
                description: "XSS: 悪意あるスクリプト注入。対策: ユーザー入力のエスケープ、dangerouslySetInnerHTMLを避ける。CSRF: なりすましリクエスト。対策: トークン検証。CSP: 実行可能なスクリプトを制限するHTTPヘッダー。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#f38ba8;">XSS (Cross-Site Scripting)</span><br>\n  攻撃: ユーザー入力にscriptを注入<br>\n  対策: Reactは自動エスケープ<br>\n  <span style="color:#f38ba8;">危険: dangerouslySetInnerHTML</span><br><br>\n<span style="color:#f38ba8;">CSRF (Cross-Site Request Forgery)</span><br>\n  攻撃: 偽サイトからリクエスト偽装<br>\n  対策: CSRFトークン, SameSite Cookie<br><br>\n<span style="color:#a6e3a1;">安全なコーディング:</span><br>\n<span style="color:#6c7086;">// ✓ Reactの自動エスケープ</span><br>\n&lt;p&gt;{userInput}&lt;/p&gt;<br><br>\n<span style="color:#6c7086;">// ✗ 直接HTML注入（避ける）</span><br>\n&lt;div dangerouslySetInnerHTML=<br>\n  {{ __html: userInput }} /&gt;<br><br>\n<span style="color:#6c7086;">// ✓ 環境変数でAPIキー管理</span><br>\n<span style="color:#6c7086;">// ✗ コードにハードコード</span>\n</div>',
                },
                tags: ["XSS", "CSRF", "CSP", "セキュリティ", "エスケープ"],
              },
            ],
          },
          {
            id: "fe-a-deploy",
            title: "デプロイ・CI/CD",
            description: "本番環境への公開とワークフロー",
            topics: [
              {
                id: "fe-vercel-deploy",
                title: "Vercel / CI/CD",
                subtitle: "デプロイとワークフロー",
                description: "VercelはNext.jsの開発元が運営するホスティングサービス。GitHubリポジトリと連携し、pushするたびに自動でビルド・デプロイ（CI/CD）。プレビューURL、本番URLが自動生成される。",
                code: {
                  html: '<div style="background:#1e1e2e;color:#cdd6f4;padding:16px;border-radius:8px;font-family:monospace;font-size:13px;line-height:1.8;">\n<span style="color:#89b4fa;">Vercel デプロイフロー:</span><br><br>\n1. GitHub にプッシュ<br>\n   <span style="color:#f9e2af;">$ git push origin main</span><br><br>\n2. Vercel が自動検知<br>\n   → npm install<br>\n   → npm run build<br>\n   → デプロイ<br><br>\n3. URL が生成される<br>\n   本番: <span style="color:#a6e3a1;">myapp.vercel.app</span><br>\n   PR:   <span style="color:#a6e3a1;">myapp-git-feature-xxx.vercel.app</span><br><br>\n<span style="color:#89b4fa;">プレビューデプロイ:</span><br>\n  feature ブランチのPR → 自動プレビュー<br>\n  レビュアーが実際の動作を確認可能<br><br>\n<span style="color:#89b4fa;">環境変数:</span><br>\n  Vercel ダッシュボード → Settings<br>\n  → Environment Variables で設定\n</div>',
                },
                tags: ["Vercel", "CI/CD", "デプロイ", "プレビュー", "GitHub連携"],
              },
            ],
          },
        ],
      },
    ],
  },
];
