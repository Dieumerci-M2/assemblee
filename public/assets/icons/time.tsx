import React from "react";

interface IProps {
    size?: number;
}

function TimeIcon(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size || 1}em`}
      height={`${props.size || 1}em`}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2m0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8"
      ></path>
      <path fill="currentColor" d="M13 7h-2v6h6v-2h-4z"></path>
    </svg>
  );
}

export default TimeIcon;
