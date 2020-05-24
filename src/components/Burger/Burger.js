import React from "react";
// import {withRouter} from "react-router-dom";

import myStyle from "./Burger.css";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient";


const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(
    (ingKey) => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    }
    
  ).reduce((arr,el)=>{
    return arr.concat(el);
  },[]);
  if(transformedIngredients.length===0){
    transformedIngredients=<p>Please Start adding Ingredients</p>
  }
  return (
    <div className={myStyle.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
