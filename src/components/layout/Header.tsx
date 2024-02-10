import React, { Fragment } from "react";
import { Slider } from "../UI/Slider";
import { HeaderContent } from "./HeaderContent";
import dataImages from "../../data/images.json";

export const Header: React.FC = () => {
  const images = dataImages.app;

  const slides = [
    <HeaderContent image={images["Img1"]} className="bg-center md:bg-top" />,
    <HeaderContent image={images["Img2"]} className="bg-center md:bg-top" />,
    <HeaderContent image={images["Img3"]} className="bg-center md:bg-top" />,
    <HeaderContent image={images["Img7"]} className="bg-center md:bg-top" />,
  ];
  return (
    <Fragment>
      <div className="w-full">
        <Slider slides={slides} />
      </div>
    </Fragment>
  );
};
