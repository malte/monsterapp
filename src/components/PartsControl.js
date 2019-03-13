import React from "react";
import PropTypes from "prop-types";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export class PartsControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.randomizeParts = this.randomizeParts.bind(this);
  }
  handleClick() {
    this.randomizeParts();
  }
  randomizeParts() {
    const randomParts = [];
    for (let i = 0; i < 8; i++) {
      randomParts.push(getRandomInt(7)+1);
    };
    console.log("randomparts button aktivated: " + randomParts);
    return randomParts;
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Change Parts
      </button>
    );
  }
}

PartsControl.propTypes = {
  parts: PropTypes.array
};
