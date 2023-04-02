import { useState } from "react";
import { Article } from "../types";

import ph0 from "../assets/img/placeholders/placeholder_0.jpeg";
import ph1 from "../assets/img/placeholders/placeholder_1.jpeg";
import ph2 from "../assets/img/placeholders/placeholder_2.jpeg";
import ph3 from "../assets/img/placeholders/placeholder_3.jpeg";

const useImageError = (article?: Article) => {
  // get random img
  const placeholders = [ph0, ph1, ph2, ph3];
  const randomInt = Math.floor(Math.random() * placeholders.length);
  const placeholder = placeholders[randomInt];
  console.log(randomInt);

  const [imgSrc, setImgSrc] = useState(article?.urlToImage || placeholder);

  // handle img error
  const handleImageError = () => setImgSrc(placeholder);

  return { imgSrc, handleImageError };
};

export default useImageError;
