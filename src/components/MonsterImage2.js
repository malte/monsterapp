import React from "react";
import PropTypes from "prop-types";
import "./MonsterImage.css";
import { useState, useEffect } from "react";

const MonsterImage = props => {
  const [monsterOpacity, setMonsterOpacity] = useState();
  useEffect(() => {
    console.log("useEffect runs");
    setTimeout(setMonsterOpacity(0), 5000);
    setMonsterOpacity(1);
  });

  const contrast = "200%";
  const MonsterComposite = [];
  const renderParts = (type, parts, color) => {
    let partsNum = 8;
    let i;
    for (i = 0; i < partsNum; i++) {
      console.log(`iteration: ${i}`)
      MonsterComposite.push(
      <img
        style={{
          filter: `brightness(.${50 +
            2 * i}) contrast(${contrast}) sepia(1) saturate(2) hue-rotate(${
              color
            })contrast(200%)`
          }}
          alt=""
          src={`${process.env.PUBLIC_URL}/monster-parts/${type}/${partsNum - i}/${parts[i]}.png`}
      />
      )
    }
  };

  renderParts(props.type, props.parts, props.monsterColor);
  return (
    <div className="container">
      <div className="frame" />
      <div className="background" style={{ backgroundColor: `hsl(${props.monsterColorValue - 180},55%,90%)` }}>
        <div className="monster-comp" style={{ opacity: props.monsterOpacity }}>
         {MonsterComposite}
        </div>
      </div>
    </div>
  );
};

MonsterImage.propTypes = {
  type: PropTypes.string,
  monsterColor: PropTypes.string,
  parts: PropTypes.array
};

export default MonsterImage;
