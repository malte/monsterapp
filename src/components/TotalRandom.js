import React from "react";
import PropTypes from "prop-types";
import { swatchColors } from "./SwatchColors";


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export class TotalRandom extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  randomizeParts() {
    const randomParts = [];
    for (let i = 0; i < 8; i++) {
      randomParts.push(getRandomInt(7)+1);
    };
    return randomParts;
  }
  randomizeType() {
    const types = [ "4legs", "birds", "dragon", "fish", "gewuerm", "headfoot", "horses", "humanoid", "mantis", "spider" ];
    const type = `${types[Math.floor(Math.random()*types.length)]}`;
    return type;
  }
  handleClick() {
    const parts = this.randomizeParts();
    const type = this.randomizeType();
    const colorIndex = Math.floor(Math.random() * Math.floor(swatchColors.length));
    this.props.onClick(parts, type, colorIndex);

  }


  render() {
    return (
      <button className="button totalRandom" onClick={this.handleClick}>
        Random all
      </button>
    );
  }
}

TotalRandom.propTypes = {
  parts: PropTypes.array,
  types: PropTypes.string,
  colorIndex: PropTypes.number
};
