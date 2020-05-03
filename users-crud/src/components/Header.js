import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark">
      <nav className="navbar navbar-dark container px-5">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <div>
          <Link className="text-white px-2" to="/posts">
            Posts
          </Link>
          <Link className="text-white px-2" to="/about">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
