import React from "react";

const Input = ({ name, type, placeholder, changehandler, inputValue }) => {
  return (
    <input
      name={name}
      required
      type={type}
      placeholder={placeholder}
      className="form-control"
      onChange={changehandler}
      value={inputValue}
    />
  );
};

export default Input;
