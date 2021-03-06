import React,{Component} from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component{

  // This could be a functional component, doesn't have to be a class
    componentWillUpdate(){
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (ingKey) => {
        return (
          <li key={ingKey}>
            <span style={{ textTransform: "capitalise" }}>{ingKey}</span>:{" "}
            {this.props.ingredients[ingKey]}
          </li>
        );
      }
    );

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price:&#8377;{this.props.price} </strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL{" "}
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}
export default OrderSummary;
