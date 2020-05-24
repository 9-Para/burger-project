import React from "react";
import myStyle from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
  <header className={myStyle.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={myStyle.Logo}>
      <Logo />
    </div>
    <nav className={myStyle.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);
export default toolbar;
