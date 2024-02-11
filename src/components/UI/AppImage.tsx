import React, { Fragment, ReactNode } from "react";

interface AppImageProps {
  url: string;
}

export const AppImage: React.FC<AppImageProps> = (props): ReactNode => {
  return (
    <Fragment>
      <div
        className="w-full max-w-[300px] h-auto aspect-[4/3] rounded-xl"
        style={{
          backgroundImage: `url(${props.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Fragment>
  );
};
