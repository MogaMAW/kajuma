import React, { Fragment, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  children: ReactNode;
}

export const Card: React.FC<CardProps> = (props) => {
  return (
    <Fragment>
      <div
        className={twMerge(
          "bg-white text-gray-800 shadow-lg rounded-xl p-4",
          props.className
        )}
      >
        {props.children}
      </div>
    </Fragment>
  );
};
