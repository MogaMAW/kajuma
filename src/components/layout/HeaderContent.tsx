import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import logo from "../../assets/logo.jpeg";
import { Button } from "../UI/Button";
import { Helmet } from "react-helmet";

interface HeaderContentProps {
  className?: string;
  image: string;
}

export const HeaderContent: React.FC<HeaderContentProps> = (props) => {
  return (
    <Fragment>
      {/* Meta Tags for SEO */}
      <Helmet>
        <title>KAJUMA | Agro Company Ltd - Chicken and Meat Products</title>
        <meta
          name="description"
          content="KAJUMA Agro Company Ltd specializes in chicken and meat products. Explore our range of high-quality products and place your order today."
        />
        <meta
          property="og:title"
          content="KAJUMA | Agro Company Ltd - Chicken and Meat Products"
        />
        <meta
          property="og:description"
          content="KAJUMA Agro Company Ltd specializes in chicken and meat products. Explore our range of high-quality products and place your order today."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:url" content="https://kajuma.netlify.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* End of Meta Tags */}

      <div
        className={twMerge(`w-full relative`, props.className)}
        style={{
          backgroundImage: `linear-gradient(
            to right,
            hsl(210,10.8%,14.5%, 0.6),
            hsl(210,10.8%,14.5%, 0.3),
            hsl(210,10.8%,14.5%, 0.2)
          ), url(${props.image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
        }}
      >
        <nav
          className="w-full bg-white flex items-center 
           justify-between px-4 sm:px-8 lg:px-16 py-0
           uppercase text-sm sticky top-0 left-0"
        >
          <NavLink to="/">
            <img src={logo} alt="logo" className="w-20 h-auto" />
          </NavLink>
          <NavLink to="#home" className="hidden sm:block">
            <span>Home</span>
          </NavLink>
          <NavLink to="#about" className="hidden sm:block">
            <span>About</span>
          </NavLink>
          <NavLink to="#services" className="hidden sm:block">
            <span>Services</span>
          </NavLink>
          <NavLink to="#gallery" className="hidden sm:block">
            <span>Gallery</span>
          </NavLink>
          <NavLink to="#order">
            <Button
              type="button"
              label="Order"
              className="px-4 rounded-3xl text-gray-50
              font-semibold uppercase"
            />
          </NavLink>
        </nav>
        <div
          className="flex flex-col items-center justify-center
          text-white gap-4 h-[90%]"
          style={{
            backgroundImage: `linear-gradient(
              to right,
              hsl(210,10.8%,14.5%, 0.2),
              hsl(210,10.8%,14.5%, 0.6),
              hsl(210,10.8%,14.5%, 0.2)
            )`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="flex flex-col items-center gap-4">
            <span className="text-5xl font-bold">KAJUMA</span>
            <span
              className="text-3xl font-bold text-yellow-400
            underline"
            >
              AGRO COMPANY LTD
            </span>
          </h1>
          <p>CHICKEN AND MEAT PRODUCTS</p>
          <NavLink to="#order">
            <Button
              type="button"
              label="Order"
              className="px-8 py-3 rounded-3xl text-gray-50
              font-semibold uppercase"
            />
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
};
