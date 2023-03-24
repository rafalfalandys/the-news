import { LoaderFunction, Outlet } from "react-router-dom";
import classes from "./HomePage.module.scss";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { COUNTRIES_URL } from "../config";

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
