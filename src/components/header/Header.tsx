import React from "react";
import { Link } from "react-router-dom";

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        conduit
      </Link>
      <nav>
        <ul className="menu">
          <li>
            <Link to="/" className="home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
