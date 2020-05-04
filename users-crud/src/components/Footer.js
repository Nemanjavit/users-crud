import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { getToken } from "./Helpers/token";

const Footer = () => {
  const [token, setToken] = useState([]);
  const location = useLocation();

  useEffect(() => {
    setToken(getToken());
  }, [token, location]);

  return (
    <footer className="bg-dark navbar  fixed-bottom">
      <div className="container  ">
        <div className="">
          <span className="text-white">&copy;2020</span>
        </div>
        <div>
          {token ? (
            <Link
              className="text-white"
              onClick={() => localStorage.removeItem("token")}
              to="/"
            >
              Log Out
            </Link>
          ) : (
            <Link className="text-white" to="/signin">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
