import React from "react";

interface IProps {
  size?: number;
}

function EchoIcon(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size || 1}em`}
      height={`${props.size || 1}em`}
      viewBox="0 0 48 48"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.811 33.703C10.541 31.11 9.163 27.71 9.163 24s1.378-7.11 3.648-9.703m5.026 4.393A8.03 8.03 0 0 0 15.839 24a8.03 8.03 0 0 0 1.998 5.31M7.798 38.096C4.498 34.336 2.5 29.398 2.5 24S4.498 13.664 7.798 9.904"></path>
        <path d="M17.837 18.69A8.03 8.03 0 0 0 15.839 24a8.03 8.03 0 0 0 1.998 5.31"></path>
      </g>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M35.189 14.297c2.27 2.593 3.648 5.993 3.648 9.703s-1.378 7.11-3.648 9.703m-5.026-4.393c1.241-1.414 1.998-3.275 1.998-5.31s-.757-3.896-1.998-5.31m10.039-8.786c3.3 3.76 5.298 8.698 5.298 14.096s-1.998 10.336-5.298 14.096"></path>
        <path d="M30.163 29.31c1.241-1.414 1.998-3.275 1.998-5.31s-.757-3.896-1.998-5.31"></path>
      </g>
    </svg>
  );
}

export default EchoIcon;
