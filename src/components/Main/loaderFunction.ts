import { LoaderFunction } from "react-router-dom";
import { API_KEY, NEWS_URL } from "../../config";
import { buildQueryParams } from "../../helper";
import { ArtcilesResObj, QueryObj } from "../../types";
import { uiActions } from "../../store/ui-slice";
import store from "../../store";

//////////////////////////////////////////////////////////
/////////////////////// THE ENGINE ///////////////////////

const loader: LoaderFunction = async ({ params, request }) => {
  try {
    const { keyword, results, page }: QueryObj = buildQueryParams(request.url);
    const { countryCode } = params;

    // if param = 'all', fetch random artciles. If param = country code fetch only articles for this country
    const fetchUrl =
      NEWS_URL +
      (countryCode === "all"
        ? `everything?q=${keyword}&pageSize=${results}&page=${page}`
        : `top-headlines?country=${countryCode}&pageSize=${results}&page=${page}`);

    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": `${API_KEY}`,
      },
    });

    if (!res.ok) throw new Error("Could not fetch news data");

    const data: ArtcilesResObj = await res.json();

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

export default loader;
