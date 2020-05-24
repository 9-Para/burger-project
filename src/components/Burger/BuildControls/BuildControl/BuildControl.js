import React from "react";
import myStyle from "./BuildControl.css";

const buildControl = (props) => (
  <div className={myStyle.BuildControl}>
    <div className={myStyle.Label}>{props.ingLabel}</div>
    <button
      className={myStyle.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={myStyle.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
