import React from "react";
import PropTypes from "prop-types";

const MonsterParts = {
  width: "500px",
  height: "650px",
  position: "absolute",
  left: "calc(50% - 250px)",
}

export class MonsterImage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: props.type,
      color: props.color,
      parts: props.parts
    };
  }
  render() {
    return (
      <div className="monster-comp">
        <img style={MonsterParts} style={{'filter': `brightness(.36) sepia(1) saturate(2) hue-rotate(${this.props.color}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/8/" + this.state.parts[0] + ".png"}/>
        <img style={MonsterParts} style={{'filter': `brightness(.38) sepia(1) saturate(2) hue-rotate(${this.props.color}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/7/" + this.state.parts[1] + ".png"}/>
        <img style={MonsterParts} style={{'filter': `brightness(.40) sepia(1) saturate(2) hue-rotate(${this.props.color}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/6/" + this.state.parts[2] + ".png"}/>
        <img style={MonsterParts} style={{'filter': `brightness(.42) sepia(1) saturate(2) hue-rotate(${this.props.color}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/5/" + this.state.parts[3] + ".png"}/>
        <img style={MonsterParts} style={{'filter': `brightness(.44) sepia(1) saturate(2) hue-rotate(${this.props.color}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/4/" + this.state.parts[4] + ".png"}/>
        <img style={MonsterParts} style={{'filter': `brightness(.46) sepia(1) saturate(2) hue-rotate(${this.props.color}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/3/" + this.state.parts[5] + ".png"}/>
        <img style={MonsterParts} style={{'filter': `brightness(.46) sepia(1) saturate(2) hue-rotate(${this.props.color}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/2/" + this.state.parts[6] + ".png"}/>
        <img style={MonsterParts} style={{'filter': `brightness(.46) sepia(1) saturate(2) hue-rotate(${this.props.color}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/1/" + this.state.parts[7] + ".png"}/>
      </div>
    );
  }
}

MonsterImage.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  parts: PropTypes.array
};
