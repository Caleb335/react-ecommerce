import React from 'react';

const FormInput = ({ type, placeholder, label }) => (
  <div className="form-group">
    <input className="form-input" type={type} placeholder={placeholder} />
    {label ? <label>{label}</label> : null}
  </div>
);

export default FormInput;
