import React, { Fragment } from "react";
import { Card } from "../UI/Card";
import { Button } from "../UI/Button";
import dataImages from "../../data/images.json";

export const Products: React.FC = () => {
  const images = dataImages.app;

  return (
    <Fragment>
      <div className="px-4 sm:px-8 space-y-8 relative pb-28">
        <div className="w-full flex items-center gap-4">
          {/* <span className="w-full border-[1px] border-gray-400"></span> */}
          <span className="text-2xl text-gray-800 font-bold w-full text-center">
            Our products
          </span>
          {/* <span className="w-full border-[1px] border-gray-400"></span> */}
        </div>
        <div
          className="flex flex-col sm:flex-row justify-start 
           sm:justify-center items-center sm:items-start gap-8"
        >
          <div
            className="w-full max-w-[450px] h-auto aspect-[4/3] rounded-xl"
            style={{
              backgroundImage: `url(${images["Img26"]})`,
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="w-full max-w-[400px] space-y-4">
            <p className="text-xl font-semibold">Chicken</p>
            <p>
              Our broiler chicken at Kajuma Agro is meticulously raised and
              ethically slaughtered, ensuring the highest standards of quality.
              Employing cutting-edge technology in our processing, we guarantee
              the freshness and hygiene of our chicken products. Each piece is
              carefully packaged in visually appealing, uniquely sealed air
              packages, preserving the freshness and flavour until it reaches
              our customers. With a focus on advanced technology and
              preservation, our broiler chicken reflects our commitment to
              delivering top-notch poultry products
            </p>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row items-center 
           justify-center gap-8"
        >
          <Card
            className="text-sm flex flex-col items-center 
            gap-4 w-fulls border-[1px] border-gray-100
            w-full md:w-64"
          >
            <p className="flex items-center justify-center">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              <span className="w-24 text-blue-400 text-center">Prices</span>
              <span className="w-12 h-[1px] bg-gray-400"></span>
            </p>
            <span>Whole chicken (1kg) ~ 11500 /-</span>
            <span>Chicken fillet ~ 13000 /-</span>
            <span>Gizzards (1kg) ~ 11500 /-</span>
          </Card>
          <Card
            className="text-sm flex flex-col items-center 
             gap-4 w-fulls border-[1px] border-gray-100
             w-full md:w-64"
          >
            <p className="flex items-center justify-center">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              <span className="w-24 text-blue-400 text-center">Prices</span>
              <span className="w-12 h-[1px] bg-gray-400"></span>
            </p>
            <span> Chicken Wings (1kg) ~ 13000 /-</span>
            <span>Chicken limbs(1kg) ~ 12000 /-</span>
            <span> Drumsticks (1kg) ~ 14000/-</span>
          </Card>
          <Card
            className="text-sm flex flex-col items-center 
             gap-4 w-fulls border-[1px] border-gray-100
             w-full md:w-64"
          >
            <p className="flex items-center justify-center">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              <span className="w-24 text-blue-400 text-center">Prices</span>
              <span className="w-12 h-[1px] bg-gray-400"></span>
            </p>
            <span> Backs (1piece) ~ 3000 /-</span>
            <span>Chicken necks (1kg) ~ 7000 /-</span>
            <span> Liver (1kg) ~ 8000 /-</span>
          </Card>
        </div>
        <div
          className="flex flex-col sm:flex-row justify-start 
           sm:justify-center items-center sm:items-start gap-8"
        >
          <div className="w-full max-w-[400px] space-y-4">
            <span className="text-xl font-semibold">Beef</span>
            <p>
              Our locally bred beef at Kajuma Agro is characterized by its
              ethical sourcing, ensuring the well-being of the animals
              throughout their lives. Employing advanced technology in the
              slaughter and processing stages, we maintain the authenticity of
              texture and flavor in our meat products. The result is a
              premium-quaiity beef that reflects our commitment to ethical
              practices, technological innovation, and delivering an exceptional
              culinary experience
            </p>
          </div>
          <div
            className="w-full max-w-[450px] h-auto aspect-[4/3] rounded-xl"
            style={{
              backgroundImage: `url(${images["Img28"]})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              objectFit: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div
          className="flex flex-col md:flex-row items-center 
           justify-center gap-8"
        >
          <Card
            className="text-sm flex flex-col items-center 
            gap-4 w-fulls border-[1px] border-gray-100
            w-full md:w-64"
          >
            <p className="flex items-center justify-center">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              <span className="w-24 text-blue-400 text-center">Prices</span>
              <span className="w-12 h-[1px] bg-gray-400"></span>
            </p>
            <span>Top side uncut(1kg) ~ 35000 /-</span>
            <span>Beef chuck (1kg) ~ 19500 /-</span>
            <span>Brisket cut (1kg) . ~ 42000 /-</span>
          </Card>
          <Card
            className="text-sm flex flex-col items-center 
             gap-4  border-[1px] border-gray-100
             w-full md:w-60"
          >
            <p className="flex items-center justify-center">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              <span className="w-24 text-blue-400 text-center">Prices</span>
              <span className="w-12 h-[1px] bg-gray-400"></span>
            </p>
            <span>Foreshank (1kg) ~ 14500 /-</span>
            <span>Rib steak (1kg) ~ 28500 /-</span>
            <span>plate primal (1kg) ~ 25000 /-</span>
          </Card>
          <Card
            className="text-sm flex flex-col items-center 
             gap-4 w-fulls border-[1px] border-gray-100
             w-full md:w-60"
          >
            <p className="flex items-center justify-center">
              <span className="w-12 h-[1px] bg-gray-400"></span>
              <span className="w-24 text-blue-400 text-center">Prices</span>
              <span className="w-12 h-[1px] bg-gray-400"></span>
            </p>
            <span>Flank steak (1kg) ~ 42000 /-</span>
            <span>Rump cap (1kg) ~ 42000 /-</span>
          </Card>
        </div>
        <div
          className="bg-[#a5d8ff]s bg-primaryLight flex justify-center items-center 
           gap-4 p-4 absolute bottom-0 left-0 w-full"
        >
          <span className="text-2xl font-bold text-white">
            Call, Order and We’ll Deliver
          </span>
          <Button
            type="button"
            label="Order"
            className="inline-block w-24 bg-primary font-bold"
          />
        </div>
      </div>
    </Fragment>
  );
};
