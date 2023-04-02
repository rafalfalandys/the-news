import classes from "./SearchArticles.module.scss";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "antd";
import useQuery from "../../hooks/useQuery";
import Btn from "../UI/Btn";
import useText from "../../hooks/useText";

const SearchArticles: React.FC = () => {
  const navigate = useNavigate();
  const buildQuery = useQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const text = useText();

  // handling search - passing searchQuery tu url, and then to loader function
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (searchQuery)
      navigate(`${buildQuery({ to: "all", keyword: searchQuery, page: 1 })}`);
    else navigate(buildQuery({ to: "all", page: 1, keyword: "__skip__" }));
  };

  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="search articles" className={classes.label}>
            <h2>{text.searchView.header}</h2>
          </label>
          <Input
            id="search articles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
          />
          <Btn>
            <span aria-label="search button">
              {searchQuery
                ? text.searchView.btnSearch
                : text.searchView.btnAllArticles}
            </span>
          </Btn>
        </form>
      </main>
    </div>
  );
};

export default SearchArticles;
