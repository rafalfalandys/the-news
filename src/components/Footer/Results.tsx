import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { RootState } from "../../store";
import { uiActions } from "../../store/ui-slice";
import classes from "./Results.module.scss";

const Results: React.FC = () => {
  const results = useSelector((state: RootState) => state.ui.results);
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const buildQuery = useQuery();

  const handleChange = (value: string) => {
    dispatch(uiActions.controlResultsPerPage(+value));
    console.log(+value);
    navigate(buildQuery(params.countryCode!, null, +value), {
      replace: true,
    });
  };

  return (
    <div className={classes.results}>
      <span>
        Articles:
        <span className={classes.total}>{results.total}</span>
      </span>
      <span>Per page:</span>
      <Select
        defaultValue={results.onPage + ""}
        onChange={handleChange}
        options={[{ value: "10" }, { value: "20" }, { value: "50" }]}
        className={classes.selector}
      />
    </div>
  );
};

export default Results;
