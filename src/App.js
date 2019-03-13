import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

import { Header } from "./components/Header";
import { TypeControl } from "./components/TypeControl";
import { PartsControl } from "./components/PartsControl";
import { Swatches } from "./components/Swatches";
import { MonsterImage } from "./components/MonsterImage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsterColorValue: 120,
      type: "4legs",
      parts: [1, 2, 3, 4, 5, 6, 7, 8]
    };
    this.changeType = this.changeType.bind(this);
    this.getRandomParts = this.getRandomParts.bind(this);
  }

  changeType(newType){
    this.setState({
      type: newType
   });
  }
  getRandomParts(parts){
    this.setState({
      parts: parts
    });
  }
  changeColor(color){
    this.setState({
      monsterColorValue: Swatches.monsterColorValue
  });
  }
  render() {
    return (
      <div className="App">
        <Header className="header"/>
        <TypeControl onChange={this.changeType} />
        <PartsControl onClick={this.getRandomParts} />
        <Swatches />
        <MonsterImage
          type={this.state.type }
          monsterColor={this.state.monsterColorValue+"deg"}
          parts={this.state.parts}
        />
      </div>
    );
  }
}

App.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string,
  parts: PropTypes.array
};

export default App;
