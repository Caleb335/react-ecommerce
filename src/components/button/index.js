<<<<<<< HEAD
import React from 'react';
import './style.scss';
const Button = ({ type, placeholder, className, onClick, children }) => (
  <div>
    <button className={`${className} btn`} type={type} onClick={onClick}>
      {children}
=======
import React from "react";
import "./style.scss";
const Button = ({ type, placeholder, google }) => (
  <div>
    <button className={`${google ? "google" : ""} btn`} type={type}>
>>>>>>> 24187d4ab60eb022ec5fdfa1ab0cfea51d00fe85
      {placeholder}
    </button>
  </div>
);

export default Button;
