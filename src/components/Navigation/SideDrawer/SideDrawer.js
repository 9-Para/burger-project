import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import myStyle from "./SideDrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
const sideDrawer = (props) => {
    let attachedClasses=[myStyle.SideDrawer, myStyle.Close];
    if(props.open){
        attachedClasses=[myStyle.SideDrawer,myStyle.Open];
    }

  return (
    <Aux>
        <Backdrop clicked={props.closed} show={props.open}/>
    <div className={attachedClasses.join(" ")} onClick={props.closed}>
      <div className={myStyle.Logo}>
        <Logo />
      </div>

      <nav>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </div>
    </Aux>
  );
};

export default sideDrawer;
