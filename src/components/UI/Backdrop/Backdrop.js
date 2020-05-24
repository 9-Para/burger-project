import React from "react";
import myStyle from "./Backdrop.css";

const backdrop = (props) =>
props.show ? <div className={myStyle.Backdrop} onClick={props.clicked}></div> : null;

export default backdrop;
