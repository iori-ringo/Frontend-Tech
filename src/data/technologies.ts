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
];
