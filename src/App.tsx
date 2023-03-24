import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { loader as loadArticles } from "./components/Main/Main";
import ErrorPage from "./pages/ErrorPage";
import HomePage, { loader as initLoader } from "./pages/HomePage";
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
        loader: initLoader,
        children: [
          {
            path: "country/:countryCode",
            element: <Main />,
            loader: loadArticles,
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
