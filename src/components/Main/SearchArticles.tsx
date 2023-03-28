import { Input } from "antd";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import useText from "../../hooks/useText";
import Btn from "../UI/Btn";
import classes from "./SearchArticles.module.scss";

const SearchArticles: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const buildQuery = useQuery();
  const text = useText();

  // handling search - passing searchQuery tu url, and then to loader function
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (searchQuery)
      navigate(`${buildQuery("all", { keyword: searchQuery, page: 1 })}`);
    else navigate(buildQuery("all", { page: 1, keyword: "__skip__" }));
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
            {!searchQuery && <span>{text.searchView.btnAllArticles}</span>}
            {searchQuery && <span>{text.searchView.btnSearch}</span>}
          </Btn>
        </form>
      </main>
    </div>
  );
};

export default SearchArticles;
