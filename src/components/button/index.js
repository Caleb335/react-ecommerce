import React from 'react';
import './style.scss';
const Button = ({ type, placeholder, className, onClick, children }) => (
  <div>
    <button className={`${className} btn`} type={type} onClick={onClick}>
      {children}
      {placeholder}
    </button>
  </div>
);

export default Button;
