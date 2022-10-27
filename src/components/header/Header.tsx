import React from "react";
import Home from "./Home";
import Logo from "./Logo";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Header: React.FunctionComponent = () => {
  return (
    <div className="header">
      <Logo />
      <nav className="menu">
        <Home />
        <SignIn />
        <SignUp />
      </nav>
    </div>
  );
};

export default Header;
