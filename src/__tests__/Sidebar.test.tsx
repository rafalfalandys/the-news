import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import store from "../store";
import Sidebar from "../components/Sidebar/Sidebar";
import { AVAILABLE_COUNTRIES } from "../config";

jest.mock("antd/es/input/Input", () => {
  return "input";
});

const routes = [
  {
    path: "/",
    element: <Sidebar />,
  },
  {
    path: "/country/:countryCode",
    element: <Sidebar />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/", "/country/pl"],
  initialIndex: 0,
});

const renderSidebar = () => {
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

describe("Sidebar test", () => {
  test("shows search input", () => {
    renderSidebar();
    const searchBox = screen.getByRole("textbox");

    expect(searchBox).toBeInTheDocument();
  });

  test("click on 'see random articles' changes url to '/country/all'", () => {
    renderSidebar();
    const links = screen.getAllByRole("link");
    fireEvent.click(links[0]);

    expect(router.state.location.pathname).toEqual(`/country/all`);
  });

  test("click on each country changes url to one available in API", () => {
    renderSidebar();

    // first link is a link to random articles so I start with 2nd
    const links = screen.getAllByRole("link").slice(1);

    links.forEach((link, i) => {
      fireEvent.click(link);

      // 2 last letters of the url should be included in api available countries array
      const urlCountry = router.state.location.pathname.slice(-2);
      const isAvailable = AVAILABLE_COUNTRIES.includes(urlCountry);

      expect(isAvailable).toEqual(true);
    });
  });
});
