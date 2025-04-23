import PropTypes from "prop-types";
import ThemeContext from "./Authcontext";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const Authprovider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userInfo = {
    User,
    loading,
    createAccount,
  };
  return (
    <ThemeContext.Provider value={userInfo}>{children}</ThemeContext.Provider>
  );
};

Authprovider.prototypes = {
  children: PropTypes.elementType.isRequired,
};

export default Authprovider;
