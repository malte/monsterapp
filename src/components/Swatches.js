import React from "react";
import { Swatch } from "./Swatch";
import './Swatches.css';

export class Swatches extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      swatchColors : [ 15, 55, 120, 180, 220, 260, 340]
    }
  }
  renderSwatches() {
    const swatchesArray = [];
    for (let i = 0; i < this.state.swatchColors.length ; i++) {
      swatchesArray.push(<Swatch
        key= {this.state.swatchColors[i]}
        swatchColor={this.state.swatchColors[i]}
        onClick={() => this.props.onClick(this.state.swatchColors[i])}
      />)
    };
    return swatchesArray;
  }
  render() {
    return (
      <ul className="swatches">
        {this.renderSwatches()}
      </ul>
    );
  }
}
