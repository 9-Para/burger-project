/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import {connect } from "react-redux";

import Aux from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import myStyle from "./Layout.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler=()=>{

    this.setState((prevState)=>{
      return {showSideDrawer: !prevState.showSideDrawer}
    });
  }
  render() {
    return (
      <Aux>
        <Toolbar
        isAuth={this.props.isAuthenticated}
        drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer
          isAuth={this.props.isAuthenticated}
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={myStyle.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    isAuthenticated: state.auth.token!==null
  }
}


export default connect(mapStateToProps)(Layout);
