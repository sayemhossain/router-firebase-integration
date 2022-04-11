import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Home = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h4>this is home</h4>
      <p>Current user is: {user ? user.displayName : "No body"}</p>
    </div>
  );
};

export default Home;
