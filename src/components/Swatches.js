import React from "react";
import PropTypes from "prop-types";
import { Swatch } from "./Swatch";
import './Swatches.css';

export class Swatches extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const colors = [ 0, 50, 120, 180, 260, 340];
    const ColorOptions = colors.map(function(colorValue){
      return <Swatch color={colorValue} />
    });

    return (
      <ul className="swatches">
        { ColorOptions }
      </ul>
    );
  }
}

Swatches.propTypes = {
  color: PropTypes.number
};
