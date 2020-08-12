import React from "react";
import "./style.scss";

const FormInput = ({ label, ...others }) => (
  <div className="form-group">
    <input className="form-input" {...others} />
    {label ? <label>{label}</label> : null}
  </div>
);

export default FormInput;
