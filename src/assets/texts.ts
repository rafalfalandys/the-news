export type TextObj = {
  header: {
    logo: string;
    popupBtn: string;
    viewSwitch: { list: string; grid: string };
    bookmarks: string;
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
    error: string;
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
    bookmarks: "Bookmarks",
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
    error: "No articles to display",
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
      "Believe it or not, but what I have been struggling the most with, were bloody icons.\n It's a tradition in my case. Some are too ugly, some clash with typescript and other ones breaks all the tests, etc.\n Of course there is a solution for everything, but really - couldn't they just work?",
    headerPros: "I had the most fun with",
    textPros:
      "When I finally found the right ones!\n And seriously. With projects like this one, I like to get to know some new tools, and this time it's been react-transition-group. The modal window with article details is a separate route, and I was veeeery happy to trigger the animation after it was mounted.\n It's also been my first time with real URL navigation, and I am quite proud of the function which builds URLs for me.",
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
    msg: "Click on logo to go to the home page",
  },
};

export const textsPolish: TextObj = {
  header: {
    logo: "The News",
    popupBtn: "Popup",
    viewSwitch: { list: "Lista", grid: "Kafelki" },
    bookmarks: "Zakładki",
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
    error: "Nie ma tu nic do wyświetlenia",
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
    headerMain: "Z ostatniej chwili!",
    headerCons: "Najbardziej męczyłem się z:",
    textCons:
      "Wierzcie lub nie, ale najwięcej czasu spędziłem użerając się z ikonami. \n To już jest taka moja tradycja, przy każdym projekcie. Jedne są brzydkie, inne nie lubią się z typescriptem, kolejne wykrzaczają mi testy, etc. \n Wiadomo - na wszystko jest jakieś rozwiązanie, ale czy te paczki z ikonami nie mogłyby po prostu działać...",
    headerPros: "Najbardziej ucieszyłem się gdy:",
    textPros:
      "Nareszcie znalazłem te jedyne!\n A tak serio. Lubię przy okazji takich projektów uczyć się nowych rzeczy i tym razem padło m.in. na react-transition-group. Modal z detalami artykułu jest osobnym routem i bardzo się ucieszyłem jak udało mi się odpalić animację przy jego zamontowaniu (to dobre słowo? komponenty się 'montuje'? 🤔).\n To też mój pierwszy raz z prawdziwą nawigacją po URL i jestem dosyć dumny z funkcji, która zajmuje się ich budowaniem.",
  },
  articleDetails: {
    link: "Idź do strony",
    author: "Autor:",
  },
  modal: {
    btnClose: "Zamknij",
  },
  error: {
    header: "Ups. Coś poszło nie tak.",
    msg: "Kliknij w logo, żeby wrócić do strony głównej",
  },
};
