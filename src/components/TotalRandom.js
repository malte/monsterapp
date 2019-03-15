import React from "react";
import PropTypes from "prop-types";

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
    console.log(types[Math.floor(Math.random()*types.length)]);
    const type = `${types[Math.floor(Math.random()*types.length)]}`;
    return type;
  }
  handleClick() {
    const parts = this.randomizeParts();
    const type = this.randomizeType();
    const color = Math.floor(Math.random() * Math.floor(360));
    this.props.onClick(parts, type, color);
  }


  render() {
    return (
      <button className="button totalRandom" onClick={this.handleClick}>
        Random Everything
      </button>
    );
  }
}

TotalRandom.propTypes = {
  parts: PropTypes.array,
  types: PropTypes.string,
  color: PropTypes.number
};
