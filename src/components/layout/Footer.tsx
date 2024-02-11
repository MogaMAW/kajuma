import React, { Fragment } from "react";
import { IconContext } from "react-icons";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <Fragment>
      <footer
        className="flex flex-col  items-center 
         justify-center px-4 sm:px-8 py-6 pb-16"
        style={{
          backgroundImage: `linear-gradient(
          to bottom,
          #ff8787,
          #ff8787,
          #ff8787,
          #ff8787,
          #ff8787,
          #fff
        )`,
        }}
      >
        <div className="flex flex-col sm:flex-row w-full gap-4">
          <div className="w-full space-y-2 text-white">
            <span className="font-semibold text-xl">Address</span>
            <div className="flex flex-col">
              <span className="">KAJUMA AGRO COMPANY</span>
              <span>Plot 6d Old Port Bell Road</span>
              <span>Kampala, Uganda</span>
            </div>
          </div>
          <div className="w-full space-y-2 text-white">
            <span className="font-semibold text-xl">Contact Us</span>
            <div className="flex flex-col">
              <span>0779632799</span>
              <span>0773429441</span>
            </div>
          </div>
          <div className="w-full space-y-2 text-white">
            <span className="font-semibold text-xl">Follow Us</span>
            <p className="flex items-center justify-start gap-x-4">
              <Link to="#">
                <IconContext.Provider
                  value={{
                    size: "1.4rem",
                    color: "#fff",
                  }}
                >
                  <BsInstagram />
                </IconContext.Provider>
              </Link>
              <Link to="#">
                <IconContext.Provider
                  value={{
                    size: "1.4rem",
                    color: "#fff",
                  }}
                >
                  <FaXTwitter />
                </IconContext.Provider>
              </Link>
              <Link to="#">
                <IconContext.Provider
                  value={{
                    size: "1.4rem",
                    color: "#fff",
                  }}
                >
                  <BsFacebook />
                </IconContext.Provider>
              </Link>
              <Link to="#">
                <IconContext.Provider
                  value={{
                    size: "1.6rem",
                    color: "#fff",
                  }}
                >
                  <FaWhatsapp />
                </IconContext.Provider>
              </Link>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 w-full my-3">
          <span className="w-full h-[3px] bg-white hidden sm:block"></span>
          <span className="text-white w-full text-center bg-green-500s">
            Copyright&copy;{new Date(Date.now()).getFullYear()}
          </span>
          <span className="w-full h-[3px] bg-white hidden sm:block"></span>
        </div>
      </footer>
    </Fragment>
  );
};
