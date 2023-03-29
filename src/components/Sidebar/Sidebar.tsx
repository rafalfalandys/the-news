import data from "../../assets/countries.json";
import classes from "./Sidebar.module.scss";

import { filterCountries, searchCountries, sortCountries } from "../../helper";
import { Fragment, useState } from "react";
import { Country } from "../../types";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

import CountryEl from "./CountryEl";
import LanguageSwitch from "../Header/LanguageSwitch";
import Input from "antd/es/input/Input";
import useText from "../../hooks/useText";
import ToggleSidebarBtn from "./ToggleSidebarBtn";
import Overlay from "../UI/Overlay";
import { Transition } from "react-transition-group";

const Sidebar: React.FC = () => {
  const text = useText();
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const isSidebarVisible = useSelector(
    (state: RootState) => state.ui.isSidebarVisible
  ); // handling sidebar visibility on phones

  // filter countries available in news API. Array of available ones is in config file. It is copied from API documentation.
  const countriesData: Country[] = data;
  const countriesFiltered = filterCountries(countriesData);

  // search countries and sort them alphabetically and bring Poland on top
  const countries = countriesFiltered
    .filter((country) =>
      isEnglish
        ? searchCountries(country.nameEN, query)
        : searchCountries(country.namePL, query)
    )
    .sort((a, b) =>
      isEnglish
        ? sortCountries(a.nameEN, b.namePL)
        : sortCountries(a.namePL, b.namePL)
    );

  const onListToggleHandler = () => dispatch(uiActions.toggleSidebar());

  // building countries components
  const countriesList = countries.map((country) => (
    <CountryEl
      key={country.cca2}
      flag={country.flag}
      name={isEnglish ? country.nameEN : country.namePL}
      code={country.cca2.toLowerCase()}
    />
  ));

  return (
    <Fragment>
      {/* overlay for RWD: */}
      <Overlay
        onClick={onListToggleHandler}
        showState={isSidebarVisible}
        className={classes.overlay}
      />

      {/* Sidebar: */}
      <aside
        className={`${classes.wrapper} ${
          isSidebarVisible ? "" : classes.hidden
        }`}
      >
        <div className={classes.sidebar}>
          <h2>{text.sideBar.header}</h2>
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={classes.input}
            maxLength={20}
          />
          <ul className={classes.list}>
            {/* extra element form showing all random articles */}
            <CountryEl flag="" name={text.sideBar.randomAricles} code="all" />
            {countriesList}
          </ul>
        </div>

        {/* button for hiding sidebar on phone and language switch: */}
        <ToggleSidebarBtn />

        {/* language switch is moved here on phones */}
        <LanguageSwitch className={classes["lang-switch"]} />
      </aside>
    </Fragment>
  );
};

export default Sidebar;
