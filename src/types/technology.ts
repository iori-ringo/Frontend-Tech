/** コードサンプル */
export type CodeExample = {
  html: string;
  /** CSSトピック用（HTMLと組み合わせてプレビュー） */
  css?: string;
};

/** 学習トピック（HTML要素/CSSプロパティ単位） */
export type Topic = {
  id: string;
  /** タグ名/プロパティ名 (例: "<h1> 〜 <h6>") */
  title: string;
  /** 短い日本語名 (例: "見出しタグ") */
  subtitle: string;
  /** 説明文 */
  description: string;
  /** コード例 + プレビュー用 */
  code: CodeExample;
  tags: string[];
};

/** コンテンツセクション */
export type ContentSection = {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
};

/** 難易度レベル */
export type Level = "beginner" | "intermediate" | "advanced";

/** レベル別コンテンツ */
export type LevelContent = {
  level: Level;
  /** 表示ラベル（"初級" | "中級" | "上級"） */
  label: string;
  description: string;
  sections: ContentSection[];
};

/** 技術データ */
export type Technology = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  /** Lucide アイコン名 */
  icon: string;
  /** アクセントカラー (oklch) */
  color: string;
  officialUrl: string;
  levels: LevelContent[];
};
