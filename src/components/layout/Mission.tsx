import React, { Fragment } from "react";
import dataImages from "../../data/images.json";

export const Mission: React.FC = () => {
  const images = dataImages.app;
  return (
    <Fragment>
      <section
        className="flex flex-col md:flex-row gap-4
        px-4 sm:px-8 items-center justify-center md:gap-16"
      >
        <div className="w-full max-w-[450px] aspect-[3/3] relative">
          <div
            className="w-3/5 md h-[70%] aspect-[3/4] rounded-xl
             absolute top-0 left-0"
            style={{
              backgroundImage: `url(${images["Img4"]})`,
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div
            className="w-3/5 h-[70%] aspect-[3/4] rounded-xl
             absolute bottom-0 right-0"
            style={{
              backgroundImage: `url(${images["Img11"]})`,
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="w-full max-w-[400px] space-y-4">
          <div>
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-base text-gray-700">
              Mission: To uplift communities through sustainable agriculture
              offering premium quality, locally sourced beef, and broiler
              chicken. With over 4 years in poultry supply, focusing on ensuring
              food security, delivering an exceptional customer experience, and
              prioritizing efficiency and value for our clients{" "}
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Description</h4>
            <p className="text-base text-gray-700">
              Kajuma agro, with over four years of expertise in poultry supply,
              specializes in delivering high quality, locally bred bee and
              broiler chicken. Offering a diverse range of chicken sizes and
              categories, our dedicated team prioritizes an exceptional customer
              experience, ensuring our products provide unmatched value for
              money
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
