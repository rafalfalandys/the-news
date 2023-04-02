import { LoaderFunction } from "react-router-dom";
import { getLocalData } from "../helper";
import store from "../store";
import { uiActions } from "../store/ui-slice";

const loader: LoaderFunction = () => {
  try {
    const data = getLocalData();

    // set redux state to display proper data in footer
    store.dispatch(
      uiActions.controlResults({
        total: data.totalResults,
        onScreen: data.totalResults,
      })
    );

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`${error}`);
  }
};

export default loader;
