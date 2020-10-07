import React from "react";
import "./Swatch.css";


export const Swatch = (props) => {
  let handleClick = () => {
      props.onClick(props.swatchColor);
  };
  return (
    <li
      className={
        props.colorIndex === props.selectedColorField
          ? "notched-10 swatch selected"
          : "notched-10 swatch"
      }
      style={{
        backgroundColor: `hsl(${props.swatchColor}, 50%, 50%)`
      }}
      onClick={handleClick}
    />
  );
}
