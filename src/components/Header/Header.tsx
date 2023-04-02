import classes from "./Header.module.scss";

import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";
import ViewSwitch from "./ViewSwitch";
import Btn from "../UI/Btn";
import LanguageSwitch from "./LanguageSwitch";
import useText from "../../hooks/useText";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import TextAndIcon from "../UI/TextAndIcon";
import useQuery from "../../hooks/useQuery";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const text = useText();
  const buildQuery = useQuery();

  const showPopupHandler = () => dispatch(uiActions.controlModal("show"));

  const isArticleView =
    location.pathname.includes("/country") ||
    location.pathname.includes("/bookmarks");

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <Logo />
        <div className={classes.buttons}>
          {/* only display view switch when articles are displayed */}
          {isArticleView && <ViewSwitch />}
          <TextAndIcon>
            <Link
              to={buildQuery({ to: "bookmarks" })}
              className={classes.bookmarks}
            >
              <span> {text.header.bookmarks}</span>
              <BookmarkIcon />
            </Link>
          </TextAndIcon>
          <Btn onClick={showPopupHandler} className={classes["btn-popup"]}>
            {text.header.popupBtn}
          </Btn>
          <LanguageSwitch className={classes["lang-switch"]} />
        </div>
      </header>
    </div>
  );
};

export default Header;
