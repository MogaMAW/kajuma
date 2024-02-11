import React, { Fragment } from "react";
import { ElementSlider } from "../UI/ElementSlider";
import { AppImage } from "../UI/AppImage";
import dataImages from "../../data/images.json";

export const CallToActionInfo: React.FC = () => {
  const images = dataImages.app;
  const infoImages = [
    <AppImage url={images.Img1} />,
    <AppImage url={images.Img2} />,
    <AppImage url={images.Img7} />,
  ];

  return (
    <Fragment>
      <div className="px-4 sm:px-8">
        <div className="w-full">
          <ElementSlider slides={infoImages} />
        </div>
      </div>
    </Fragment>
  );
};
