import React from "react";
import "./style.scss";

const Form = (props) => (
  <div>
    <form onSubmit={props.onSubmit} className="form">
      {props.children}
    </form>
  </div>
);

export default Form;
