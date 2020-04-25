import React from "react";

const Input = (props) => {
  return (
    <div>
      <input
        required
        type={props.type}
        placeholder={props.placeholder}
        className="form-control"
        onChange={props.changehandler}
        value={props.inputValue}
      />
    </div>
  );
};

export default Input;
