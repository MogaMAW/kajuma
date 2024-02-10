import React, { Fragment } from "react";
import { TestimonialCard } from "../UI/TestimonialCard";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade"; // Import the fade effect CSS

import testimonial from "../../data/testimonials.json";

export const Testimonial: React.FC = () => {
  const testimonials = testimonial.testimonials;
  return (
    <Fragment>
      <div className="flex flex-col items-center gap-6 px-4 sm:px-8">
        <div>
          <p
            className="text-3xl w-full text-center font-semibold
            text-gray-700"
          >
            What Our Clients Say About Us
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
           gap-4"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <TestimonialCard
                username={testimonial.username}
                userImageUrl={testimonial.userImageUrl}
                message={testimonial.message}
              />
            </div>
          ))}
        </div>

        {/* <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            effect="fade"
            modules={[Pagination, Navigation, EffectFade]}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard
                  username={testimonial.username}
                  userImageUrl={testimonial.userImageUrl}
                  message={testimonial.message}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </Fragment>
  );
};
