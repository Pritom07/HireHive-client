import PropTypes from "prop-types";
import ThemeContext from "./Authcontext";
import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.init";

const Authprovider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const currentSignedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      currentSignedIn();
    };
  }, []);

  const updateUserProfile = (userObj) => {
    return updateProfile(auth.currentUser, userObj);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const userInfo = {
    User,
    loading,
    createAccount,
    signInAccount,
    updateUserProfile,
    signOutUser,
  };
  return (
    <ThemeContext.Provider value={userInfo}>{children}</ThemeContext.Provider>
  );
};

Authprovider.prototypes = {
  children: PropTypes.elementType.isRequired,
};

export default Authprovider;
