import classes from "./PaginationEl.module.scss";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { ArtcilesResObj } from "../../types";
import { uiActions } from "../../store/ui-slice";

const PaginationEl: React.FC = () => {
  const loaderData = useLoaderData() as ArtcilesResObj;
  const curPageState = useSelector(
    (state: RootState) => state.ui.pages.current
  );
  const curResultsState = useSelector(
    (state: RootState) => state.ui.results.onPage
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buildQuery = useQuery();
  const params = useParams();

  const { totalResults } = loaderData;

  const changePagination: (page: number, pageSize: number) => void = (
    page,
    pageSize
  ) => {
    dispatch(uiActions.controlResultsPerPage(pageSize));
    dispatch(uiActions.controlPage(page));
    navigate(buildQuery(params.countryCode!, { results: pageSize, page }), {
      replace: true,
    });
  };

  return (
    <Pagination
      defaultCurrent={1}
      current={curPageState}
      total={totalResults}
      onChange={changePagination}
      defaultPageSize={20}
      pageSize={curResultsState}
      className={classes.pagination}
    />
  );
};

export default PaginationEl;
