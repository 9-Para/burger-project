import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import myStyle from "./BuildControls.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const buildControls = (props) => {

  return (
    <div className={myStyle.BuildControls}>
      <p>
        Current Price: <strong> &#8377; {props.price}</strong>
      </p>

      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          ingLabel={ctrl.label}
          added={() => props.ingredientAdded(ctrl.type)}
          removed={() => props.ingredientRemoved(ctrl.type)}
          disabled={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={myStyle.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}

      >
        {props.isAuth?"ORDER NOW!":"SIGN UP TO ORDER"}
      </button>
    </div>
  );
};
export default buildControls;
