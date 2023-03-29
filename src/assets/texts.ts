export type TextObj = {
  header: {
    logo: string;
    popupBtn: string;
    viewSwitch: { list: string; grid: string };
  };
  sideBar: {
    header: string;
    randomAricles: string;
  };
  main: {
    locales: string;
    yesterday: string;
    today: string;
    page: string;
  };
  searchView: {
    header: string;
    btnSearch: string;
    btnAllArticles: string;
  };
  footer: {
    totalArticles: string;
    onScreen: string;
  };
  popup: {
    headerMain: string;
    headerCons: string;
    textCons: string;
    headerPros: string;
    textPros: string;
  };
  articleDetails: {
    link: string;
    author: string;
  };
  modal: {
    btnClose: string;
  };
  error: {
    header: string;
    msg: string;
  };
};

export const textsEnglish: TextObj = {
  header: {
    logo: "The News",
    popupBtn: "Popup",
    viewSwitch: { list: "List", grid: "Tiles" },
  },
  sideBar: {
    header: "News From:",
    randomAricles: "Show random articles",
  },
  main: {
    locales: "en-EN",
    yesterday: "Yesterday",
    today: "Today",
    page: "page",
  },
  searchView: {
    header: "Search articles",
    btnSearch: "Search",
    btnAllArticles: "See random articles",
  },
  footer: {
    totalArticles: "Total articles:",
    onScreen: "Displaying:",
  },
  popup: {
    headerMain: "Breaking News!",
    headerCons: "I struggled the most with:",
    textCons:
      "Believe it or not, but what I have been struggling the most with were icons.",
    headerPros: "I had the most fun with",
    textPros: "When I finally found the right ones!",
  },
  articleDetails: {
    link: "Go to page",
    author: "Author:",
  },
  modal: {
    btnClose: "Close",
  },
  error: {
    header: "Something went wrong.",
    msg: "Click on logo to go to the home page (maybe it will help)",
  },
};

export const textsPolish: TextObj = {
  header: {
    logo: "The News",
    popupBtn: "Popup",
    viewSwitch: { list: "Lista", grid: "Kafelki" },
  },
  sideBar: {
    header: "Wiadomości z:",
    randomAricles: "Pokaż losowe wiadomości",
  },
  main: {
    locales: "pl-PL",
    yesterday: "Wczoraj",
    today: "Dzisiaj",
    page: "stron",
  },
  searchView: {
    header: "Znajdź wiadomości o:",
    btnSearch: "Szukaj",
    btnAllArticles: "Zobacz losowe wiadomości",
  },
  footer: {
    totalArticles: "Artykułów w sumie:",
    onScreen: "Wyświetlanych:",
  },
  popup: {
    headerMain: "Z ostatneij chwili!",
    headerCons: "Najbardziej męczyłem się z:",
    textCons: "Wierzcie lub nie, ale najwięcej czasu spędziłem na ikonach",
    headerPros: "Najbardziej ucieszyłem się gdy:",
    textPros: "Nareszcie zaczęły działać!",
  },
  articleDetails: {
    link: "Zobacz detale",
    author: "Autor:",
  },
  modal: {
    btnClose: "Zamknij",
  },
  error: {
    header: "Ups. Coś poszło nie tak.",
    msg: "Kliknij w logo, żeby wrócić do strony głównej (może pomoże ;])",
  },
};
