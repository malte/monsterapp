import React from "react";
import { Swatch } from "./Swatch";
import "./Swatches.css";

export class Swatches extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swatchColors: [0, 30, 59, 120, 200, 230, 276],
      selectedColorField: ""
    };
  }
  renderSwatches() {
    const swatchesArray = [];
    for (let i = 0; i < this.state.swatchColors.length; i++) {
      swatchesArray.push(
        <Swatch
          key={i}
          selectedColorfield={this.state.selectedColorfield}
          swatchColor={this.state.swatchColors[i]}
          onClick={() => {
            this.props.onClick(this.state.swatchColors[i]);
            this.setState({ selectedColorField: i });
          }}
        />
      );
    }
    return swatchesArray;
  }
  render() {
    return <ul className="swatches flex row space-in-between">{this.renderSwatches()}</ul>;
  }
}
