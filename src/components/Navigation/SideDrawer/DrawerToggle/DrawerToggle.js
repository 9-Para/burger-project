import React from "react";
import myStyle from "./DrawerToggle.css";
const DrawerToggle=(props)=>(
    <div  className={myStyle.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);


export default DrawerToggle;