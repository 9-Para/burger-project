import React from "react";
import burgerLogo from "../../assets/logo.png";
import myStyle from "./Logo.css";

const logo=(props)=>(
    <div className={myStyle.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="My Burger"/>
    </div>
);
export default logo;