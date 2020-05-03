import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark navbar  fixed-bottom">
      <div className="container  ">
        <div className="">
          <span className="text-white">&copy;2020</span>
        </div>
        <div>
          <Link className="text-white" to="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
