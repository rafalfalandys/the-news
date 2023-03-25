import { LoaderFunction, Outlet, useLocation } from "react-router-dom";
import classes from "./HomePage.module.scss";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { COUNTRIES_URL } from "../config";
import Footer from "../components/Footer/Footer";
import SearchArticles from "../components/Main/SearchArticles";

const HomePage: React.FC = () => {
  // check for location to display welcome content on home url
  const location = useLocation();

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        {location.pathname === "/" && <SearchArticles />}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

////////////////////////////////////////////////////////
/////////////////// LOADER FUNCTION ////////////////////
////////////////////////////////////////////////////////

export const loader: LoaderFunction = async () => {
  try {
    const resCountries = await fetch(
      COUNTRIES_URL + "all?fields=name,flag,cca2"
    );
    if (!resCountries.ok) throw new Error("Could not fetch countries data");

    const countriesData = await resCountries.json();

    return { countries: countriesData };
  } catch (error) {
    console.log(error);
    return error;
  }
};
