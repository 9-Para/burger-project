import React from "react";
import myStyle from "./Button.css";

const button = (props) => (
  <button
    disabled={props.disabled}
    onClick={props.clicked}
    className={[myStyle.Button, myStyle[props.btnType]].join(" ")}
  >
    {props.children}
  </button>
);
export default button;
