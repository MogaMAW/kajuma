import React, { Fragment } from "react";
import sellingPoints from "../../data/selling-points.json";
import { Card } from "../UI/Card";

export const UniqueSelling: React.FC = () => {
  const points = sellingPoints.points;

  return (
    <Fragment>
      <div
        className="p-4 sm:p-8"
        style={{
          backgroundImage: `linear-gradient(
            to bottom right,
          #ff8787,
          #fff
        )`,
        }}
      >
        <div className="w-full text-center mb-6">
          <span className="text-white font-semibold text-lg">
            Our Unique Selling Points
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {points.map((point, index) => (
            <div key={index}>
              <Card className="flex flex-col justify-center items-center gap-4">
                <span>{point.title}</span>
                <span>{point.content}</span>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
