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
  return (
    <div className="container">
      <div className="frame" />
      <div
        className="background"
        style={{
          backgroundColor: `hsl(${props.monsterColorValue - 180},55%,90%)`
        }}
      >
        <div className="monster-comp" style={{ opacity: props.monsterOpacity }}>
          <img
            style={{
              filter: `brightness(.50) contrast(${contrast}) sepia(1) saturate(1.1) hue-rotate(${
                props.monsterColor
              }) contrast(200%)`
            }}
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/monster-parts/" +
              props.type +
              "/8/" +
              props.parts[0] +
              ".png"
            }
          />
          <img
            style={{
              filter: `brightness(.52) contrast(${contrast}) sepia(1) saturate(1.1) hue-rotate(${
                props.monsterColor
              }) contrast(200%)`
            }}
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/monster-parts/" +
              props.type +
              "/7/" +
              props.parts[1] +
              ".png"
            }
          />
          <img
            style={{
              filter: `brightness(.54) contrast(${contrast}) sepia(1) saturate(1.1) hue-rotate(${
                props.monsterColor
              }) contrast(200%)`
            }}
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/monster-parts/" +
              props.type +
              "/6/" +
              props.parts[2] +
              ".png"
            }
          />
          <img
            style={{
              filter: `brightness(.57) contrast(${contrast}) sepia(1) saturate(1.1) hue-rotate(${
                props.monsterColor
              }) contrast(200%)`
            }}
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/monster-parts/" +
              props.type +
              "/5/" +
              props.parts[3] +
              ".png"
            }
          />
          <img
            style={{
              filter: `brightness(.60) contrast(${contrast}) sepia(1) saturate(1.1) hue-rotate(${
                props.monsterColor
              }) contrast(200%)`
            }}
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/monster-parts/" +
              props.type +
              "/4/" +
              props.parts[4] +
              ".png"
            }
          />
          <img
            style={{
              filter: `brightness(.62) contrast(${contrast}) sepia(1) saturate(1.1) hue-rotate(${
                props.monsterColor
              }) contrast(200%)`
            }}
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/monster-parts/" +
              props.type +
              "/3/" +
              props.parts[5] +
              ".png"
            }
          />
          <img
            style={{
              filter: `brightness(.62) contrast(${contrast}) sepia(1) saturate(1.1) hue-rotate(${
                props.monsterColor
              }) contrast(200%)`
            }}
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/monster-parts/" +
              props.type +
              "/2/" +
              props.parts[6] +
              ".png"
            }
          />
          <img
            style={{
              filter: `brightness(.62) contrast(${contrast}) sepia(1) saturate(1.1) hue-rotate(${
                props.monsterColor
              }) contrast(200%)`
            }}
            alt=""
            src={
              process.env.PUBLIC_URL +
              "/monster-parts/" +
              props.type +
              "/1/" +
              props.parts[7] +
              ".png"
            }
          />
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
