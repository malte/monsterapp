import React from 'react';
import { Swatch } from "./Swatch";
import { swatchColors } from "./SwatchColors";
import "./Swatches.css";


const Swatches = (props) => {
  console.log(`selectedColorField: ${props.selectedColorField}`)


  const renderSwatches = () => {
    const swatchesArray = [];
    for (let i = 0; i < swatchColors.length; i++) {
      swatchesArray.push(
        <Swatch
          key={i}
          colorIndex={i}
          selectedColorField={props.selectedColorField}
          swatchColor={swatchColors[i]}
          onClick={() => {
            props.onClick(i);
          }}
        />
      );
    }
    return swatchesArray;
  }
  return <ul className="swatches flex row space-in-between">{renderSwatches()}</ul>;
}

export default Swatches;
