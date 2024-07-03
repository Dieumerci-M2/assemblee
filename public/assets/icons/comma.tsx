import React from "react";

interface IProps {
    size?: number;
}

function CommaIcon(props : IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size || 1}em`}
      height={`${props.size || 1}em`}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M7 3h9.95v9.96l-3.99 7.98H8l3.97-7.98H7z"
      ></path>
    </svg>
  );
}

export default CommaIcon;
