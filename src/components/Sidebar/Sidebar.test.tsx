import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import store from "../../store";
import Sidebar from "./Sidebar";

// jest.mock("antd/es/input", () => {
//   return {
//     ...jest.requireActual("antd"),
//     Input: jest.fn((p) => <input />),
//   };
// });

jest.mock("antd/lib/input", () => {
  return jest.fn().mockImplementation(({ onChange }) => {
    return <input data-testid="mock-input" onChange={onChange} />;
  });
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
  test("shows input", () => {
    renderSidebar();
  });
});
