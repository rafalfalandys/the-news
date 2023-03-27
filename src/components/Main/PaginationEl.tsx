import classes from "./PaginationEl.module.scss";
import { Pagination } from "antd";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { ArtcilesResObj } from "../../types";
import { buildQueryParams } from "../../helper";

const PaginationEl: React.FC = () => {
  const loaderData = useLoaderData() as ArtcilesResObj;

  const navigate = useNavigate();
  const buildQuery = useQuery();
  const params = useParams();
  const location = useLocation();

  const queries = buildQueryParams(location.search);

  const { totalResults } = loaderData;

  const changePagination: (page: number, pageSize: number) => void = (
    page,
    pageSize
  ) => {
    navigate(buildQuery(params.countryCode!, { results: pageSize, page }), {
      replace: true,
    });
  };

  return (
    <Pagination
      defaultCurrent={1}
      current={+queries.page!}
      total={totalResults}
      onChange={changePagination}
      defaultPageSize={20}
      pageSize={queries.results}
      className={classes.pagination}
      pageSizeOptions={[10, 20, 50]}
      showSizeChanger={true}
    />
  );
};

export default PaginationEl;
