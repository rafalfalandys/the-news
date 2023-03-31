import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Header from "../components/Header/Header";
import store from "../store";

afterEach(() => cleanup());

export const routes = [
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/country/:countryCode",
    element: <Header />,
  },
];

const router = createMemoryRouter(routes, {
  initialEntries: ["/", "/country/pl"],
  initialIndex: 1,
});

const renderHeader = () => {
  render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

describe("Header", () => {
  test("renders logo", () => {
    renderHeader();

    const logo = screen.getByRole("link");

    expect(logo).toBeInTheDocument();
  });

  test("click on logo changes url to '/'", async () => {
    renderHeader();

    const logo = screen.getByRole("link");
    fireEvent.click(logo);

    expect(router.state.location.pathname).toEqual("/");
  });

  test("layout switch is not visible on home page", () => {
    renderHeader();

    const switchBtns = screen.queryByLabelText("list/grid switch");

    expect(switchBtns).not.toBeInTheDocument();
  });

  test("browsing articles switches on the layout btns", async () => {
    renderHeader();

    const switchBtns = screen.queryByLabelText("list/grid switch");

    expect(switchBtns).not.toBeInTheDocument();
    expect(router.state.location.pathname).toEqual("/");
  });
});
