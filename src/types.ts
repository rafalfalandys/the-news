export type Article = {
  author: string | null;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: { id: any; name: string | null };
  title: string;
  url: string;
  urlToImage: string | null;
};

export type ArtcilesResObj = {
  articles: Article[];
  status: string;
  totalResults: number;
};

export type Country = {
  namePL: string;
  nameEN: string;
  cca2: string;
  flag: string;
};

export type QueryObj = {
  [key: string]: any;
  keyword?: string | null;
  articleTitle?: string;
  countryQuery?: string;
  page?: number;
  results?: number;
};
