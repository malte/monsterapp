import React from "react";
import PropTypes from "prop-types";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

export class PartsControl extends React.Component {
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
  handleClick() {
    const parts = this.randomizeParts();
    this.props.onClick(parts);
  }


  render() {
    return (
      <button className="button" onClick={this.handleClick}>
        Change Parts
      </button>
    );
  }
}

PartsControl.propTypes = {
  parts: PropTypes.array
};
