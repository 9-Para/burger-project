import React from "react";
import {NavLink} from "react-router-dom";
import myStyle from "./NavigationItem.css";

const navigationItem = (props) => (
  <li className={myStyle.NavigationItem}>
    <NavLink activeClassName={myStyle.active}
      to={props.link} exact={props.exact} >
        
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
