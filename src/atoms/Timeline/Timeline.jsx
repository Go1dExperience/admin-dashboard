import React from "react";
import { SvgIcon } from "@mui/material";

export const TimelineIcon = props => {
  return (
    <SvgIcon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="60 273.95 20 20"
      >
        <g data-name="Dot">
          <g data-name="Ellipse 23">
            <path
              d="M60 283.9a10 10 0 1 1 0 .1z"
              fill="#fff"
              fillRule="evenodd"
            />
            <path
              d="M60.5 283.903a9.5 9.5 0 1 1 0 .095z"
              strokeLinejoin="round"
              strokeLinecap="round"
              stroke="#60b74f"
              fill="transparent"
              strokeWidth=".95"
            />
          </g>
          <path
            d="M64 283.9a6 6 0 1 1 0 .1z"
            fill="#60b74f"
            fillRule="evenodd"
            data-name="Ellipse 22"
          />
        </g>
      </svg>
    </SvgIcon>
  );
};
