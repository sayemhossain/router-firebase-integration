import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInWithGoogle } = useFirebase();
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
      <button onClick={signInWithGoogle} style={{ marginRight: "20px" }}>
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
