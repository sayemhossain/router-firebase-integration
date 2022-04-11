import { useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const signInWithGoogle = () => {
    console.log("hello");
  };
  return {
    user,
    signInWithGoogle,
  };
};
export default useFirebase;
