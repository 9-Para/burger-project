import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import myStyle from "./CheckoutSummary.css";
const checkoutSummary = (props) => {
  return (
    <div className={myStyle.CheckoutSummary}>
      <h1>We hope it tastes well..</h1>
      <p>
        A very delicious burger with{" "}
        <b>
          {props.ingredients.cheese} cheese, {props.ingredients.meat} meat, {props.ingredients.salad} salad and {props.ingredients.bacon} bacon </b> is waiting to be ordered!
      </p>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        Continue
      </Button>
    </div>
  );
};
export default checkoutSummary;
