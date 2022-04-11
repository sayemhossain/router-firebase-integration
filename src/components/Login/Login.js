import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h4>Please login</h4>
      <form>
        <input type="email" placeholder="Your email" />
        <br></br>
        <br></br>
        <input type="password" name="" id="" placeholder="Your password" />
        <br></br>
        <br></br>
        <input type="submit" value="Login" />
      </form>
      <br></br>
      <button onClick={handleGoogleSignIn} style={{ marginRight: "20px" }}>
        Google SignIn
      </button>
      <button>Github SignIn</button>
      <p>
        Don't have account? <Link to="/register">Register Now</Link>
      </p>
    </div>
  );
};

export default Login;
