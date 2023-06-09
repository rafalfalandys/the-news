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
  bookmarks: {
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
    error: "No articles found",
  },
  bookmarks: {
    error: "You have no bookmarks. Once you add some, they will display here",
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
    headerCons: "What was tough in the project?",
    textCons:
      "Believe it or not, but what I have been struggling the most with, were icons...\n It's a tradition in my case. Some are too ugly, some clash with typescript and other ones breaks all the tests, etc.\n Of course there is a solution for everything, but really - couldn't they just work?",
    headerPros: "What was fun?",
    textPros:
      "When I finally found the right ones!\n And seriously. With projects like this one, I like to widen my toolset. This time, it's been for example react-transition-group. The modal window with article details is a separate route, and I was veeeery happy to trigger the animation after it was mounted.\n It's been also my first time with real URL navigation, and I am quite proud of the function which builds URLs for me.",
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
    error: "Nie znaleziono artykułów.",
  },
  bookmarks: {
    error:
      "Nie masz żadnych zakładek. Jak tylko jakieś dodasz - pojawią się tutaj.",
  },
  searchView: {
    header: "Znajdź wiadomości:",
    btnSearch: "Szukaj",
    btnAllArticles: "Zobacz losowe wiadomości",
  },
  footer: {
    totalArticles: "Artykułów w sumie:",
    onScreen: "Wyświetlanych:",
  },
  popup: {
    headerMain: "Z ostatniej chwili!",
    headerCons: "Co sprawiło mi tu największe trudności?",
    textCons:
      "Wierzcie lub nie, ale najwięcej czasu spędziłem z ikonami... \n To już jest taka moja tradycja, przy każdym projekcie. Jedne są brzydkie, inne nie lubią się z typescriptem, kolejne wykrzaczają mi testy, etc. \n Wiadomo - na wszystko jest jakieś rozwiązanie, ale czy te paczki z ikonami nie mogłyby po prostu działać...",
    headerPros: "A co największy fun?",
    textPros:
      "Nareszcie znalazłem te jedyne!\n A tak serio. Lubię przy okazji takich projektów poszerzać trochę swój warsztat. Tym razem wybór padł m.in. na react-transition-group. Modal z detalami artykułu jest osobnym routem i bardzo się ucieszyłem jak udało mi się uruchomić animację przy jego zamontowaniu (to dobre słowo? komponenty się 'montuje'? 🤔).\n To też mój pierwszy raz z prawdziwą nawigacją po URL i jestem dosyć dumny z funkcji, która zajmuje się jego budowaniem.",
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
