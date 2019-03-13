import React from "react";
import PropTypes from "prop-types";

export class TypeControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
   const type = e.target.value;
   this.props.onChange(type);
  }
  render() {
    const types = [ "4legs", "birds", "dragon", "fish", "gewuerm", "headfoot", "horses", "humanoid", "mantis", "spider" ];
    const typeOptions = types.map(function(type){
      return <option value={type}>
      {type}</option>;
    });

    return (
      <select
            id="types"
            onChange={this.handleChange}>
            { typeOptions }
      </select>
    );
  }
}

TypeControl.propTypes = {
  type: PropTypes.string
};
