import React from "react";

export type SVGProps = React.SVGProps<SVGSVGElement>;
export const Logo = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 256"
      width="500"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      {...props}
    >
      <polygon
        points="50,200 150,50 250,200"
        className="dark:fill-white fill-black"
      />

      <path
        className="dark:fill-white fill-black"
        d="M300 50 H380 V120 H420 V50 H500 V200 H420 V140 H380 V200 H300 Z"
      />
    </svg>
  );
};
