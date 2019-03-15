import React from "react";
import PropTypes from "prop-types";
import './Swatch.css';

export class Swatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
   const monsterColorValue = this.props.color;
   console.log("monsterColorValue: " +monsterColorValue);
  }
  render() {
    return (
      <li className="swatch"
      style={{ backgroundColor: `hsl(${this.props.color}, 50%, 50%)` }}
      onClick={this.handleClick}>
      </li>
    );
  }
}

Swatch.propTypes = {
  color: PropTypes.number
};
