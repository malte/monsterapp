import React from "react";
import PropTypes from "prop-types";
import "./MonsterImage.css";

const MonsterImage = props => {


  const contrast = "200%";
  const MonsterComposite = [];

  const renderParts = (type, part, color) => {
    let partNum = 8;
    let i;
    for (i = 0; i < partNum; i++) {
      MonsterComposite.push(
      <img
        key={`${type}_${part}_${i}`}
        style={{
          filter: `brightness(.${50 +
            2 * i}) contrast(${contrast}) sepia(1) saturate(2) hue-rotate(${
              color
            })contrast(200%)`
          }}
          alt=""
          src={`${process.env.PUBLIC_URL}/monster-parts/${type}/${partNum - i}/${part[i]}.png`}
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
