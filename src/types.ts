export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: any; name: string }[];
  title: string;
  url: string;
  urlToImage: string;
};

export type ArtcilesResObj = {
  articles: Article[];
  status: string;
  totalResults: number;
};

export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      spa: {
        official: string;
        common: string;
      };
    };
  };
  cca2: string;
  flag: string;
};

export const testArticle1 = {
  author: "Rafał",
  content: "Some article",
  description: "Some article about how cool articles are",
  publishedAt: "2022-07-21T09:35:31.820Z",
  source: [
    { id: "1", name: "gazeta" },
    { id: "2", name: "telewizja" },
  ],
  title: "Test title",
  url: "https://www.wp.pl",
  urlToImage:
    "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80",
};

export const testArticle2 = {
  author: "Wera",
  content: "Some article 2",
  description: "A long story short!",
  publishedAt: "2022-11-21T09:35:31.820Z",
  source: [{ id: "11", name: "radio" }],
  title: "TITLE 2",
  url: "https://www.onet.pl",
  urlToImage:
    "https://images.unsplash.com/photo-1679487423264-1e56d6f4eb22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1704&q=80",
};

export const testArticlesObj = {
  articles: [testArticle1, testArticle2],
  status: "ok",
  totalResults: 2,
};
