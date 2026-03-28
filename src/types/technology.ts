/** 学習トピック */
export type Topic = {
  id: string;
  title: string;
  description: string;
  /** 想定学習時間（分） */
  estimatedMinutes: number;
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
