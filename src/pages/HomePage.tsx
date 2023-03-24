import { LoaderFunction, Outlet } from "react-router-dom";
import classes from "./HomePage.module.scss";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { API_KEY, COUNTRIES_URL, NEWS_URL } from "../config";
import Main from "../components/Main/Main";

const HomePage: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default HomePage;

////////////////////////////////////////////////////////
/////////////////// LOADER FUNCTION ////////////////////
////////////////////////////////////////////////////////

export const loader: LoaderFunction = async () => {
  try {
    const resArticles = await fetch(NEWS_URL + "everything?q=keyword", {
      method: "GET",
      headers: {
        "X-Api-Key": `${API_KEY}`,
      },
    });
    if (!resArticles.ok) throw new Error("Could not fetch news data");

    const resCountries = await fetch(
      COUNTRIES_URL + "all?fields=name,flag,cca2"
    );
    if (!resCountries.ok) throw new Error("Could not fetch countries data");

    const articlesData = await resArticles.json();
    const countriesData = await resCountries.json();

    return { articles: articlesData.articles, countries: countriesData };
  } catch (error) {
    console.log(error);
    return error;
  }
};
