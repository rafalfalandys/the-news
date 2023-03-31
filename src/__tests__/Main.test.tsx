import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
// import loadArticles from "./loaderFunction";
import articlesMock from "../assets/articlesMock.json";
import Main from "../components/Main/Main";
import store from "../store";

const loadArticles = () => articlesMock[0];

//   const fakeFetch = jest.fn();
//   window.fetch = fakeFetch;
//   fakeFetch.mockResolvedValueOnce({ json: async () => articlesMock[0] });
// });

const routes = [
  {
    path: "/country/:countryCode",
    element: <Main />,
    loader: loadArticles,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/country/all?page=1?results=20"],
  initialIndex: 0,
});

const renderMainContent = () => {
  // workaround for window.matchMedia is not a function
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

describe("Main content tests", () => {
  test("has proper length", () => {
    renderMainContent();

    const articles = screen.getAllByRole("listitem", { name: /article/i });

    expect(articles).toHaveLength(articlesMock[0].articles.length);
  });
});
