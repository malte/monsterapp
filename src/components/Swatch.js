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
      style={
        props.colorIndex === props.selectedColorField
        ? { background: `radial-gradient(
          hsl(${props.swatchColor}, 100%, 75%) 30%,
          hsl(${props.swatchColor}, 90%, 50%) 90% )` }
        : { background: `hsl(${props.swatchColor}, 50%, 50%)` }
      }
      onClick={handleClick}
    />
  );
}
