import { Input } from "antd";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import Btn from "../UI/Btn";
import classes from "./SearchArticles.module.scss";

const SearchArticles: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  // handling search - passing query tu url, and then to loader function
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (query) navigate(`/country/all?keyword=${query}`);
    else navigate(`/country/all`);
  };

  return (
    <div className={classes.wrapper}>
      <main className={classes.main}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label htmlFor="search articles" className={classes.label}>
            <h2> Search articles</h2>
          </label>
          <Input
            id="search articles"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Btn>
            {query && <span> Search</span>}
            {!query && <span> See all articles</span>}
          </Btn>
        </form>
      </main>
    </div>
  );
};

export default SearchArticles;
