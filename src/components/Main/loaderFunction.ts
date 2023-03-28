import { LoaderFunction } from "react-router-dom";
import { buildQueryParams } from "../../helper";
import { QueryObj } from "../../types";
import { uiActions } from "../../store/ui-slice";
import store from "../../store";
import articlesMock from "../../assets/articlesMock.json";

//////////////////////////////////////////////////////////
/////////////////////// THE ENGINE ///////////////////////
//////////////////////////////////////////////////////////

export const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const { keyword, results, page }: QueryObj = buildQueryParams(request.url);
    const { countryCode } = params;

    // // if param = 'all', fetch random artciles. If param = country code fetch only articles for this country
    // const fetchUrl =
    //   NEWS_URL +
    //   (countryCode === "all"
    //     ? `everything?q=${keyword}&pageSize=${results}&page=${page}`
    //     : `top-headlines?country=${countryCode}&pageSize=${results}&page=${page}`);

    // const res = await fetch(fetchUrl, {
    //   method: "GET",
    //   headers: {
    //     "X-Api-Key": `${API_KEY}`,
    //   },
    // });

    // if (!res.ok) throw new Error("Could not fetch news data");
    // const data: ArtcilesResObj = await res.json();

    // hold 1s to fake fetching
    const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));
    await delay();

    const randomDigit = Math.floor(Math.random() * 10); // picking random article list from 10 mock objects
    const data =
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

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
