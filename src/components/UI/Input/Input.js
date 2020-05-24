import React from "react";
import myStyle from "./Input.css";

const input = (props) => {
  let inputElement = null;
  const inputClasses=[myStyle.InputElement];
  if(props.invalid && props.shouldValidate && props.touched){
    inputClasses.push(myStyle.InValid);
  }
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value} onChange={props.changed}
        />
      );
      break;

    case "select":
      const opt = props.elementConfig.options;
      const option = opt.map((opEl) => {
      return <option key={opEl.value} value={opEl.value}>{opEl.displayValue}</option>;
      });
      inputElement = <select className={myStyle.Select} onChange={props.changed}>{option}</select>;
      break;

    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value} onChange={props.changed}
        />
      );
  }
  return (
    <div className={myStyle.Input}>
      <label className={myStyle.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};
export default input;
