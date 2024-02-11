import React, { Fragment, ReactNode } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ElementSliderProps {
  slides: ReactNode[];
}

export const ElementSlider: React.FC<ElementSliderProps> = (props) => {
  return (
    <Fragment>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {props.slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};
