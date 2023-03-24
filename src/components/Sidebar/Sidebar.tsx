import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AVAILABLE_COUNTRIES } from "../../config";
import { Country, Article } from "../../types";
import CountryEl from "./CountryEl";
import classes from "./Sidebar.module.scss";

const Sidebar: React.FC = () => {
  const loaderData = useLoaderData() as {
    countries: Country[];
    articles: Article;
  };

  const [query, setQuery] = useState("");

  // filtering all available countries and sorting alphabetically
  const countriesList = loaderData.countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase().trim())
    )
    .filter((country) =>
      AVAILABLE_COUNTRIES.map(
        (code) => code === country.cca2.toLowerCase()
      ).reduce((acc, cur) => acc || cur)
    )
    .sort((a, b) => {
      if (a.name.common < b.name.common) return -1;
      if (a.name.common > b.name.common) return 1;
      else return 0;
    });

  // building countries components
  const countries = countriesList.map((country) => (
    <CountryEl
      key={country.cca2}
      flag={country.flag}
      name={country.name.common}
      code={country.cca2.toLowerCase()}
    />
  ));

  return (
    <aside className={classes.wrapper}>
      <div className={classes.sidebar}>
        <h2>News from:</h2>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={classes.input}
          maxLength={20}
        />
        <ul className={classes.list}>{countries}</ul>
      </div>
    </aside>
  );
};

export default Sidebar;
