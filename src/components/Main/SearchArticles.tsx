import { Input } from "antd";
import { FormEventHandler, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Btn from "../UI/Btn";
import classes from "./SearchArticles.module.scss";

const SearchArticles: React.FC = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const navigation = useNavigation();

  // checking loading state to display loading spinner
  const isLoading = navigation.state === "loading";

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
            {query && !isLoading && <span> Search</span>}
            {!query && !isLoading && <span> See all articles</span>}
            {isLoading && <span> Loading...</span>}
          </Btn>
        </form>
      </main>
    </div>
  );
};

export default SearchArticles;
