import React from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export class PartsControl extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomParts = this.getRandomParts.bind(this);
  }
  randomizeParts() {
    const randomParts = [];
    for (let i = 0; i < 8; i++) {
      randomParts.push(getRandomInt(7) + 1);
    }
    return randomParts;
  }
  getRandomParts() {
    const parts = this.randomizeParts();
    this.props.onClick(parts);
  }

  render() {
    return (
      <button className="button" onClick={this.getRandomParts}>
        New {this.props.type}!
      </button>
    );
  }
}
