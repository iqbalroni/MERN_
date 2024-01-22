import React from "react";
import './input.scss';

function Input({ label, ...rest }) {
  return (
    <div className="input-wrapper">
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
}

export default Input;
