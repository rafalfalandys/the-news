import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLocalData } from "../helper";
import { RootState } from "../store";
import { uiActions } from "../store/ui-slice";
import { Article } from "../types";

const useBookmarks = (article: Article) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const bumpState = useSelector((state: RootState) => state.ui.bump);

  const localData = getLocalData();

  useEffect(() => {
    setIsBookmarked(
      localData.articles.map((el) => el.url).includes(article.url)
    );
  }, [localData.articles, article, params]);

  const toggleBookmarkHandler = () => {
    const localStorage = window.localStorage.getItem("bookmarks");

    // if current article is not bookmarked - add it to local storage and mark as bookmarked
    if (!isBookmarked) {
      const newLocalStorage = localStorage
        ? [...JSON.parse(localStorage), article]
        : [article];

      window.localStorage.setItem("bookmarks", JSON.stringify(newLocalStorage));
      setIsBookmarked(true);
    }

    // if current article is bookmarked - remove it from local storage and mark as not bookmarked
    if (isBookmarked) {
      const newLocalStorage = JSON.parse(localStorage!).filter(
        (el: Article) => el.url !== article.url
      );
      window.localStorage.setItem("bookmarks", JSON.stringify(newLocalStorage));
      setIsBookmarked(false);
    }

    // trigger bump effect on bookmarks link
    dispatch(uiActions.controlBump("true"));
  };

  // finish bump animation
  useEffect(() => {
    setTimeout(() => {
      dispatch(uiActions.controlBump("false"));
    }, 200);
  }, [bumpState, dispatch]);

  return { isBookmarked, toggleBookmarkHandler, localData };
};

export default useBookmarks;
