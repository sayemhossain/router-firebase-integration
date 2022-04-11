import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

const Products = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <h4>this is products</h4>
      <p>{user ? user.displayName : "no body"}</p>
    </div>
  );
};

export default Products;
