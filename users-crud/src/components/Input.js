import React from "react";

const Input = (props) => {
  return (
    <input
      required
      type={props.type}
      placeholder={props.placeholder}
      className="form-control"
      onChange={props.changehandler}
      value={props.inputValue}
    />
  );
};

export default Input;
