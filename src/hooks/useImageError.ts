import { useState } from "react";
import { Article } from "../types";

import ph0 from "../assets/img/placeholders/placeholder_0.jpeg";
import ph1 from "../assets/img/placeholders/placeholder_1.jpeg";
import ph2 from "../assets/img/placeholders/placeholder_2.jpeg";
import ph3 from "../assets/img/placeholders/placeholder_3.jpeg";
import ph4 from "../assets/img/placeholders/placeholder_4.jpeg";
import ph5 from "../assets/img/placeholders/placeholder_5.jpeg";
import ph6 from "../assets/img/placeholders/placeholder_6.jpeg";
import ph7 from "../assets/img/placeholders/placeholder_7.jpeg";
import ph8 from "../assets/img/placeholders/placeholder_8.jpeg";
import ph9 from "../assets/img/placeholders/placeholder_9.jpeg";

const useImageError = (article?: Article) => {
  // get random img
  const placeholders = [ph0, ph1, ph2, ph3, ph4, ph5, ph6, ph7, ph8, ph9];
  const randomInt = Math.floor(Math.random() * 10);
  const placeholder = placeholders[randomInt];

  const [imgSrc, setImgSrc] = useState(article?.urlToImage || placeholder);

  // handle img error
  const handleImageError = () => setImgSrc(placeholder);

  return { imgSrc, handleImageError };
};

export default useImageError;
