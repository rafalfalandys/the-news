import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  LoaderFunction,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage, { loader as loadCountries } from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";

const MainContent = lazy(() => import("./components/Main/Main"));

const loadArticles: LoaderFunction = ({ params, request }) =>
  import("./components/Main/Main").then((module) =>
    module.loader({ params, request })
  );

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: loadCountries,
        children: [
          {
            path: "country/:countryCode",
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                <MainContent />
              </Suspense>
            ),
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
