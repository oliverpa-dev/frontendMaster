import React from "react";
import { Field } from "./fields";
import "./main.scss";

/**
- Update the details on the card as the user fills in the fields
- Validate the form fields when the form is submitted
- If there are no errors, display the completed state
- Reset the form when the user clicks "Continue" on the completed state
 */

/**
 * Function that checks the type of the passed in value
 * @param value - string or number
 * @param cb - callback functions that sets the boolean value to true of false
 */
const checkType = (value: string, booleanCheck: () => void) => {
  if (typeof value === "string") {
    booleanCheck();
  } else {
    booleanCheck();
  }
};

export const Form = () => {
  return (
    <div className="card-form">
      <img src={require("./images/bg-main-desktop.png")} alt="" />
      <Field handleCheckType={checkType} />
    </div>
  );
};
