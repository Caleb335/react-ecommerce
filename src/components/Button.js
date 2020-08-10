import React from 'react';

const Button = ({ type, placeholder }) => (
  <div>
    <button className="btn" type={type}>
      {placeholder}
    </button>
  </div>
);

export default Button;
