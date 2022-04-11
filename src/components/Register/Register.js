import React from "react";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div>
      <h3>Registation Form</h3>
      <form>
        <input type="text" placeholder="Your name" />
        <br></br>
        <br></br>
        <input type="email" placeholder="Your email" />
        <br></br>
        <br></br>
        <input type="password" name="" id="" placeholder="Your password" />
        <br></br>
        <br></br>
        <input type="submit" value="Register Now" />
      </form>
      <p>
        Already have account? Go to <Link to="/login">Login</Link> page
      </p>
    </div>
  );
};

export default Reviews;
