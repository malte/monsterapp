import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

import { Header } from "./components/Header";
import { TypeControl } from "./components/TypeControl";
import { PartsControl } from "./components/PartsControl";
import { Swatches } from "./components/Swatches";
import MonsterImage from "./components/MonsterImage";
import { TotalRandom } from "./components/TotalRandom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsterOpacity:1,
      monsterColorValue: 120,
      type: "birds",
      parts: Array(8).fill(1)
    };
    this.changeType = this.changeType.bind(this);
    this.getRandomParts = this.getRandomParts.bind(this);
    this.getTotalRandom = this.getTotalRandom.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  changeType(newType) {
    this.setState({
      type: newType
    });
  }
  getRandomParts(parts) {
    this.setState({
      parts: parts
    });
  }
  getTotalRandom(parts, newType, color) {

    this.setState({
      type: newType
    });
    this.setState({
      parts: parts
    });
    this.setState({
      monsterColorValue: color
    });

  }

  changeColor(newColor, i) {
    this.setState({
      monsterColorValue: newColor
    });
    console.log(i);
  }
  render() {
    return (
      <div className="App">
        <Header className="header" />
        <div className='flex row space-between'>
          <TypeControl onChange={this.changeType} type={this.state.type}/>
          <PartsControl onClick={this.getRandomParts} type={this.state.type} />
          <TotalRandom onClick={this.getTotalRandom} />
        </div>
        <Swatches onClick={swatchColor => this.changeColor(swatchColor)} />
        <MonsterImage
          monsterOpacity={this.state.monsterOpacity}
          type={this.state.type}
          monsterColorValue={this.state.monsterColorValue - 38}
          monsterColor={this.state.monsterColorValue - 38 + "deg"}
          parts={this.state.parts}
        />
        <a className="social-media-link flex row center" href="https://www.instagram.com/malto_illu/">
          <div
            alt="instagram-icon"
            className="instagram-icon"
            style={{ backgroundColor: `hsl(${this.state.monsterColorValue},100%,30%)` }}
            >
          </div>
          <p className="">Follow me on Instagram<br/>for more stuff.</p>
        </a>
        <p className="license">These images may be used for non-commercial purposes. I.e. you may use it as new facebook avatar. Please give appropiate credit. Please dont remix. These images are published under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-nc-nd/4.0/">creative commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
         </a>
         </p>
         <p>
         Made with react js and adobe illustrator.
         </p>
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
