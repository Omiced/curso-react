import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  //estado isloanding
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async (category) => {
    const newImages = await getGifts(category);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages(category);
  }, []);
  return {
    images,
    isLoading,
  };
};
