import { LoaderFunction } from "react-router-dom";
import { buildQueryParams } from "../helper";
import { ArtcilesResObj, QueryObj } from "../types";
import { uiActions } from "../store/ui-slice";
import store from "../store";
import articlesMock from "../assets/articlesMock.json";

//////////////////////////////////////////////////////////
/////////////////////// THE ENGINE ///////////////////////
//////////////////////////////////////////////////////////

const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const { results }: QueryObj = buildQueryParams(request.url);
    const { countryCode } = params;

    // hold 1s to fake fetching
    const delay = () => new Promise((resolve) => setTimeout(resolve, 700));
    await delay();

    const randomDigit = Math.floor(Math.random() * 10); // picking random article list from 10 mock objects
    const data: ArtcilesResObj =
      countryCode === "all" ? articlesMock[0] : articlesMock[randomDigit];

    // amount of articles to display in footer
    const resultsNum = results || 20;
    const onScreen = // handling case when total is smaller then page size
      data.totalResults <= resultsNum ? data.totalResults : resultsNum;

    // updating state for footer data
    store.dispatch(
      uiActions.controlResults({
        total: data.totalResults,
        onScreen,
      })
    );

    const trimData: ArtcilesResObj = {
      totalResults: data.totalResults,
      status: data.status,
      articles: data.articles.slice(0, results),
    };

    return trimData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export default loader;
