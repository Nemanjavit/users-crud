import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getToken } from "./Helpers/token";

const Header = () => {
  const [token, setToken] = useState();
  const location = useLocation();
  useEffect(() => {
    setToken(getToken());
  }, [token, location]);
  return (
    <header className="bg-dark">
      <nav className="navbar navbar-dark container px-5">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <div>
          {token ? (
            <div>
              <Link to="/myposts" className="text-white">
                My Posts
              </Link>
              <Link to="/dashboard" className="text-white">
                Dashboard
              </Link>
            </div>
          ) : (
            <div>
              <Link className="text-white px-2" to="/posts">
                Posts
              </Link>
              <Link className="text-white px-2" to="/about">
                About
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
