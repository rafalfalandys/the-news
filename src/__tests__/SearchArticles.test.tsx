import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { textsPolish } from "../assets/texts";
import SearchArticles from "../components/Main/SearchArticles";
import store from "../store";

const renderMain = () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <SearchArticles />
      </Provider>
    </MemoryRouter>
  );
};

describe("Main content tests", () => {
  test("render search page on home page", () => {
    renderMain();
    const searchBox = screen.getByRole("textbox");

    expect(searchBox).toBeInTheDocument();
  });

  test("btn shows 'losowe wiadomości' if no search query", () => {
    renderMain();
    const searchBtn = screen.getByLabelText(/search button/i);

    expect(searchBtn.textContent).toEqual(
      textsPolish.searchView.btnAllArticles
    );
  });

  //   test("btn shows 'szukaj' if search query is typed", async () => {
  //     renderMain();

  //     const searchBox = screen.getByRole("textbox");
  //     const searchBtn = await screen.findByLabelText(/search button/i);

  //     fireEvent.click(searchBox);
  //     userEvent.keyboard("test");

  //     expect(searchBtn.textContent).toEqual(textsPolish.searchView.btnSearch);
  //   });
});
