import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticleModal from "./components/Main/ArticleModal";
import loadApiArticles from "./loader functions/loadApiArticles";
import loadMockArticles from "./loader functions/loadMockArticles";
import Main from "./components/Main/Main";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import SearchArticles from "./components/Main/SearchArticles";
import loadLocalArticles from "./loader functions/loadLocalArticles";

const checkIsMock = () => {
  if (!process.env.REACT_APP_IS_MOCK) {
    return false;
  } else if (typeof process.env.REACT_APP_IS_MOCK === "string") {
    return process.env.REACT_APP_IS_MOCK === "true";
  } else {
    return process.env.REACT_APP_IS_MOCK;
  }
};

const isMock = checkIsMock();

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        children: [
          {
            index: true,
            element: <SearchArticles />,
          },
          {
            path: "country/:countryCode",
            element: <Main />,
            loader: isMock ? loadMockArticles : loadApiArticles,
            id: "country",
            children: [{ path: ":articleDetails", element: <ArticleModal /> }],
          },
          {
            path: "bookmarks",
            element: <Main />,
            loader: loadLocalArticles,
            id: "bookmarks",
            children: [{ path: ":articleDetails", element: <ArticleModal /> }],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
