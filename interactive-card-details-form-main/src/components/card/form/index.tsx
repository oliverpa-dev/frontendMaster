import React from "react";
import { Field } from "./fields";
import "./main.scss";

export const Form = () => {
  return (
    <div className="card-form">
      <img src={require("./images/bg-main-desktop.png")} alt="" />
      <Field />
    </div>
  );
};
