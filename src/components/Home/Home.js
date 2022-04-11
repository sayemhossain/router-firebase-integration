import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h4>this is home</h4>
      <p>Current user is: {user ? user.displayName : "No body"}</p>
    </div>
  );
};

export default Home;
