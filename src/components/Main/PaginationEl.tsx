import "./PaginationEl.scss"; // css modules is unable to override antd styling so I use scss in this component
import { Pagination } from "antd";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { ArtcilesResObj } from "../../types";
import { buildQueryParams } from "../../helper";
import useQuery from "../../hooks/useQuery";

const PaginationEl: React.FC = () => {
  const navigate = useNavigate();
  const buildQuery = useQuery();
  const loaderData = useLoaderData() as ArtcilesResObj;
  const location = useLocation();

  const queries = buildQueryParams(location.search);

  // reusing loader data
  const { totalResults } = loaderData;

  const changePagination: (page: number, pageSize: number) => void = (
    page,
    pageSize
  ) => {
    navigate(buildQuery({ results: pageSize, page }), {
      replace: true,
    });
  };

  return (
    <Pagination
      defaultCurrent={1}
      current={queries.page || 1}
      total={totalResults}
      onChange={changePagination}
      defaultPageSize={20}
      pageSize={queries.results || 20}
      pageSizeOptions={[10, 20, 50]}
      showSizeChanger={true}
      responsive={true}
    />
  );
};

export default PaginationEl;
