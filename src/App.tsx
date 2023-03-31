import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArticleModal from "./components/Main/ArticleModal";
import loadArticles from "./loadArticlesFunction";
import Main from "./components/Main/Main";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

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
            path: "country/:countryCode",
            element: <Main />,
            loader: loadArticles,
            id: "country",
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
