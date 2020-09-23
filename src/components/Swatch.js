import React from "react";
import "./Swatch.css";


export const Swatch = (props) => {
  let handleClick = () => {
      props.onClick(props.swatchColor);
  };
  return (
    <li
      className={
        props.selectedColorField !== props.key
          ? "notched-10 swatch"
          : "notched-10 swatch selected"
      }
      style={{
        backgroundColor: `hsl(${props.swatchColor}, 50%, 50%)`
      }}
      onClick={handleClick}
    />
  );
}
