import Input from "antd/es/input/Input";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import useText from "../../hooks/useText";
import { Country, Article } from "../../types";
import CountryEl from "./CountryEl";
import classes from "./Sidebar.module.scss";
import countriesNamesPL from "../../assets/countriesNamesPL.json";
import { filterCountries } from "../../helper";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const Sidebar: React.FC = () => {
  const loaderData = useLoaderData() as {
    countries: Country[];
    articles: Article;
  };
  const text = useText();
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);
  const [query, setQuery] = useState("");

  // filter countries available in news API. Array of available ones is in config file. It is copied from API documentation
  const countriesFiltered = filterCountries(loaderData.countries.slice(0));

  // adding Polish names to countries objects. I extracted all names, copied whole array, translated in google translator, and pasted new array as separate json
  countriesFiltered.forEach(
    (country, i) => (country.name.namePL = countriesNamesPL[i])
  );

  // filtering countries by search query
  const countriesList = countriesFiltered
    .filter((country) => {
      if (isEnglish)
        return country.name.common
          .toLowerCase()
          .includes(query.toLowerCase().trim());

      return country.name
        .namePL!.toLowerCase()
        .includes(query.toLowerCase().trim());
    })
    .sort((a, b) => {
      if (isEnglish) {
        // sort english names
        if (a.name.common === "Poland") return -1;
        if (b.name.common === "Poland") return -1;
        if (a.name.common < b.name.common) return -1;
        if (a.name.common > b.name.common) return 1;
        else return 0;
      } else {
        // sort polish names
        if (a.name.namePL! === "Polska") return -1;
        if (b.name.namePL! === "Polska") return 1;
        if (a.name.namePL! < b.name.namePL!) return -1;
        if (a.name.namePL! > b.name.namePL!) return 1;
        else return 0;
      }
    });

  // building countries components
  const countries = countriesList.map((country) => (
    <CountryEl
      key={country.cca2}
      flag={country.flag}
      name={isEnglish ? country.name.common : country.name.namePL!}
      code={country.cca2.toLowerCase()}
    />
  ));

  return (
    <aside className={classes.wrapper}>
      <div className={classes.sidebar}>
        <h2>{text.sideBar.header}</h2>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={classes.input}
          maxLength={20}
        />
        <ul className={classes.list}>
          <CountryEl flag="" name={text.sideBar.randomAricles} code="all" />
          {countries}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
