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
