import React from "react";
import PropTypes from "prop-types";
import './MonsterImage.css';

export class MonsterImage extends React.Component {
  constructor(props) {
    super();
    this.state = {
      type: props.type,
      monsterColor: props.monsterColor,
      parts: props.parts,
    };
  }
  render() {
    return (
      <div className="frame">
        <div className="monster-comp">
          <img style={{'filter': `brightness(.36) sepia(1) saturate(2) hue-rotate(${this.props.monsterColor}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/8/" + this.props.parts[0] + ".png"}/>
          <img style={{'filter': `brightness(.38) sepia(1) saturate(2) hue-rotate(${this.props.monsterColor}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/7/" + this.props.parts[1] + ".png"}/>
          <img style={{'filter': `brightness(.40) sepia(1) saturate(2) hue-rotate(${this.props.monsterColor}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/6/" + this.props.parts[2] + ".png"}/>
          <img style={{'filter': `brightness(.42) sepia(1) saturate(2) hue-rotate(${this.props.monsterColor}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/5/" + this.props.parts[3] + ".png"}/>
          <img style={{'filter': `brightness(.44) sepia(1) saturate(2) hue-rotate(${this.props.monsterColor}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/4/" + this.props.parts[4] + ".png"}/>
          <img style={{'filter': `brightness(.46) sepia(1) saturate(2) hue-rotate(${this.props.monsterColor}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/3/" + this.props.parts[5] + ".png"}/>
          <img style={{'filter': `brightness(.46) sepia(1) saturate(2) hue-rotate(${this.props.monsterColor}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/2/" + this.props.parts[6] + ".png"}/>
          <img style={{'filter': `brightness(.46) sepia(1) saturate(2) hue-rotate(${this.props.monsterColor}) contrast(200%)`}} alt="" src={process.env.PUBLIC_URL + "/monster-parts/" + this.props.type + "/1/" + this.props.parts[7] + ".png"}/>
        </div>
      </div>
    );
  }
}

MonsterImage.propTypes = {
  type: PropTypes.string,
  monsterColor: PropTypes.string,
  parts: PropTypes.array
};
