import React, { Fragment } from "react";
import { Header } from "../layout/Header";
import { Mission } from "../layout/Mission";
import { Products } from "../layout/Products";
import { UniqueSelling } from "../layout/UniqueSelling";
import { Testimonial } from "../layout/Testimonial";
import { Footer } from "../layout/Footer";
import { CallToActionInfo } from "../layout/CallToActionInfo";

export const LandingPage: React.FC = () => {
  return (
    <Fragment>
      <div className="bg-white w-full text-gray-800 space-y-16">
        <Header />
        <Mission />
        <UniqueSelling />
        <Products />
        <CallToActionInfo />
        <Testimonial />
        <Footer />
      </div>
    </Fragment>
  );
};
