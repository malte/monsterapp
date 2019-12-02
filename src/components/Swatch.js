import React from "react";
import "./Swatch.css";

export class Swatch extends React.Component {
  render() {
    let className = "swatch";
    let action = () => {
      this.props.onClick(this.props.swatchColor);
    };
    return (
      <li
        className={
          this.props.selectedColorField === this.props.key
            ? "swatch selected"
            : "swatch"
        }
        style={{
          backgroundColor: `hsl(${this.props.swatchColor}, 50%, 50%)`
        }}
        onClick={action}
      />
    );
  }
}
