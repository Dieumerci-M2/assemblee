import React from "react";

interface IProps {
  size?: number;
}

function GiveLoveIcon(props: IProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${props.size || 1}em`}
      height={`${props.size || 1}em`}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M20 17q.86 0 1.45.6t.58 1.4L14 22l-7-2v-9h1.95l7.27 2.69q.78.31.78 1.12q0 .47-.34.82t-.86.37H13l-1.75-.67l-.33.94L13 17zM16 3.23Q17.06 2 18.7 2q1.36 0 2.3 1t1 2.3q0 1.03-1 2.46t-1.97 2.39T16 13q-2.08-1.89-3.06-2.85t-1.97-2.39T10 5.3q0-1.36.97-2.3t2.34-1q1.6 0 2.69 1.23M.984 11H5v11H.984z"
      ></path>
    </svg>
  );
}

export default GiveLoveIcon;
