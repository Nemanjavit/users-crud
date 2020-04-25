import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className="btn btn-primary col-12"
      onClick={props.clickHandler}
    >
      {props.name}
    </button>
  );
};

export default Button;
