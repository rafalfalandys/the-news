import { Input } from "antd";
import { FormEventHandler, useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import Btn from "../UI/Btn";
import classes from "./SearchArticles.module.scss";

const SearchArticles: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const buildQuery = useQuery();

  // handling search - passing searchQuery tu url, and then to loader function
  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();
    if (searchQuery)
      navigate(`${buildQuery("all", { keyword: searchQuery, page: 1 })}`);
    else navigate(buildQuery("all", { page: 1 }));
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
          />
          <Btn>
            {searchQuery && <span> Search</span>}
            {!searchQuery && <span> See random articles</span>}
          </Btn>
        </form>
      </main>
    </div>
  );
};

export default SearchArticles;
