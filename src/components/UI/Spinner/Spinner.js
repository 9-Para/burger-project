import React from "react";
import myStyle from "./Spinner.css";
const spinner=()=>(
    <div className={myStyle.Loader}>
        <div className={myStyle.DoubleBounce1}></div>
        <div className={myStyle.DoubleBounce2}></div>
    </div>
);
export default spinner;