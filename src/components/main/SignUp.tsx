import React from "react";
import { Link } from "react-router-dom";

const SignUp: React.FunctionComponent = () => {
  return (
    <div className="user">
      <form>
        <h2>Sign up</h2>
        <p>
          <Link to="/login">Have an account?</Link>
        </p>
        <input type="text" placeholder="Username" required />
        <p>
          <input type="email" placeholder="Email" required />
        </p>
        <p>
          <input type="text" placeholder="Password" required />
        </p>
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default SignUp;
