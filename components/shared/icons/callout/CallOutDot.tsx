import React from "react";

const CallOutDot = ({
  positionX,
  positionY,
}: {
  positionX: number | string;
  positionY: number | string;
}) => {
  return (
    <g
      transform={`translate(${Number(positionX) - 24}, ${
        Number(positionY) - 24
      })`}
    >
      <rect
        className="circle-outer"
        x="0.5"
        y="0.5"
        width="47"
        height="47"
        rx="23.5"
        stroke="white"
      />
      <g filter="url(#filter0_f_2880_6)" className="circle-middle">
        <rect x="6.5" y="6.5" width="35" height="35" rx="17.5" stroke="white" />
      </g>
      <rect
        className="circle-inner"
        x="11"
        y="11"
        width="26"
        height="26"
        rx="13"
        fill="#D9D9D9"
      />
    </g>
  );
};

export default CallOutDot;
