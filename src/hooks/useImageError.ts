import { useState } from "react";
import { Article } from "../types";

import placeholder from "../assets/img/placeholder.jpeg";

const useImageError = (article?: Article) => {
  const [imgSrc, setImgSrc] = useState(article?.urlToImage || placeholder);

  // handle img error
  const handleImageError = () => setImgSrc(placeholder);

  return { imgSrc, handleImageError };
};

export default useImageError;
