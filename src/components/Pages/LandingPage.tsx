import React, { Fragment } from "react";
import { Header } from "../layout/Header";
import { Mission } from "../layout/Mission";
import { Products } from "../layout/Products";
import { UniqueSelling } from "../layout/UniqueSelling";
import { Testimonial } from "../layout/Testimonial";
import { Footer } from "../layout/Footer";

export const LandingPage: React.FC = () => {
  return (
    <Fragment>
      <div className="bg-white text-primary">
        <Header />
        <Mission />
        <UniqueSelling />
        <Products />
        <Testimonial />
        <Footer />
      </div>
    </Fragment>
  );
};
