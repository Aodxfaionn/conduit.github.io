import React from "react";
import { Link } from "react-router-dom";

const SignIn: React.FunctionComponent = () => {
  return (
    <div className="user">
      <form>
        <h2>Sign in</h2>
        <p>
          <Link to="/register">Need an account?</Link>
        </p>
        <input type="email" placeholder="Email" required />
        <p>
          <input type="text" placeholder="Password" required />
        </p>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignIn;
