import React from "react";
import "./Swatch.css";

export function Swatch(props) {
  return (
    <li
      className="swatch"
      style={{ backgroundColor: `hsl(${props.swatchColor}, 50%, 50%)` }}
      onClick={() => props.onClick(props.swatchColor)}
    ></li>
  );
};
