import React, { Component } from "react";
import PropTypes from "prop-types";
import myStyle from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={myStyle.BreadBottom}></div>;
        break;
      case "bread-top":
        ingredient = (
          <div className={myStyle.BreadTop}>
            <div className={myStyle.Seeds1}></div>
            <div className={myStyle.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ingredient = <div className={myStyle.Meat}></div>;
        break;
      case "cheese":
        ingredient = <div className={myStyle.Cheese}></div>;
        break;
      case "salad":
        ingredient = <div className={myStyle.Salad}></div>;
        break;
      case "bacon":
        ingredient = <div className={myStyle.Bacon}></div>;
        break;
      default:
        ingredient = null;
        
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};
export default BurgerIngredient;
