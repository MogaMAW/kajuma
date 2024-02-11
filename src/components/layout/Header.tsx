import React, { Fragment } from "react";
import { Slider } from "../UI/Slider";
import { HeaderContent } from "./HeaderContent";
import dataImages from "../../data/images.json";

export const Header: React.FC = () => {
  const images = dataImages.app;

  // const slides = [
  //   <HeaderContent image={images["Img24"]} className="bg-center" />,
  //   <HeaderContent
  //     image={images["Img25"]}
  //     className="bg-center md:bg-bottom"
  //   />,
  //   <HeaderContent image={images["Img28"]} className="bg-center" />,
  //   <HeaderContent image={images["Img15"]} className="bg-center" />,
  //   <HeaderContent
  //     image={images["Img11"]}
  //     className="bg-center md:bg-bottom"
  //   />,
  //   <HeaderContent image={images["Img20"]} className="bg-center" />,
  //   <HeaderContent
  //     image={images["Img21"]}
  //     className="bg-center md:bg-bottoms"
  //   />,
  // ];

  const slides = [
    <HeaderContent
      image={images["Img25"]}
      className="bg-center md:bg-bottom"
    />,
    <HeaderContent
      image={images["Img11"]}
      className="bg-center md:bg-bottom"
    />,
    <HeaderContent
      image={images["Img21"]}
      className="bg-center md:bg-bottoms"
    />,
  ];

  return (
    <Fragment>
      <div className="w-full">
        <Slider slides={slides} />
      </div>
    </Fragment>
  );
};
