import React, { Fragment } from "react";
import { TestimonialCard } from "../UI/TestimonialCard";
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
      </div>
    </Fragment>
  );
};
