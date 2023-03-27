import { useSelector } from "react-redux";
import { textsEnglish, textsPolish } from "../assets/texts";
import { RootState } from "../store";

const useText = () => {
  const isEnglish = useSelector((state: RootState) => state.ui.isEnglish);
  const text = isEnglish ? textsEnglish : textsPolish;

  return text;
};

export default useText;
