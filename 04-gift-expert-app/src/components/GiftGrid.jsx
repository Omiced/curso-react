import { useState,useEffect } from "react";
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({category}) => {
  const {images,isLoading} = useFetchGifs(category);
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading&&<h2>Carganding...</h2>
      }
      <div className="card-grid">
        {images.map((image) => <GiftItem key={image.id} {...image}/>)}
      </div>
    </>
  )
}
