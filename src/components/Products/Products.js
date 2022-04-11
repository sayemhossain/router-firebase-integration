import React from "react";
import useFirebase from "../../hooks/useFirebase";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h4>this is products</h4>
      <p>{user ? user.displayName : "no body"}</p>
    </div>
  );
};

export default Products;
