import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  label: string;
  type: "submit" | "reset" | "button";
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <Fragment>
      <button
        className={twMerge(
          "text-gray-50 bg-primary p-2 text-center rounded w-full outline-none",
          props.className
        )}
        type={props.type}
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </Fragment>
  );
};
