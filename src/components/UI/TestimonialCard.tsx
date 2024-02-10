import React, { Fragment } from "react";

interface TestimonialCardProps {
  userImageUrl: string;
  username: string;
  message: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = (props) => {
  return (
    <Fragment>
      <div
        className="text-gray-800 flex 
         flex-col justify-center items-center w-72
         rounded-xl shadow-md p-4 border-[1px] border-gray-200
         gap-4"
      >
        <div
          className="w-28 h-28 rounded-[50%]"
          style={{
            backgroundImage: `url(${props.userImageUrl})`,
            backgroundSize: "cover",
            objectFit: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="w-full text-center">
          <span className="text-lg font-semibold text-center">
            {props.username}
          </span>
        </div>
        <div className="w-full -mt-2">
          <p>{props.message}</p>
        </div>
      </div>
    </Fragment>
  );
};
