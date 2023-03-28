import { Outlet, useLocation, useNavigation } from "react-router-dom";
import classes from "./HomePage.module.scss";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
// import { COUNTRIES_URL } from "../config";
import Footer from "../components/Footer/Footer";
import SearchArticles from "../components/Main/SearchArticles";
import PopupWindow from "../components/Popup/Popup";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const HomePage: React.FC = () => {
  // check location to display search page on '/'
  const location = useLocation();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const isModalVisible = useSelector(
    (state: RootState) => state.ui.isModalVisible
  );

  return (
    <div className={classes.wrapper}>
      <Header />
      <div className={classes.content}>
        <Sidebar />
        {!isLoading && <Outlet />}
        {location.pathname === "/" && !isLoading && <SearchArticles />}

        {isLoading && <LoadingSpinner />}
      </div>
      <Footer />
      {isModalVisible && <PopupWindow />}
    </div>
  );
};

export default HomePage;
