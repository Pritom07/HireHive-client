import { useContext } from "react";
import ThemeContext from "./Authcontext";

const useAuth = () => {
  const useAuth = useContext(ThemeContext);
  return useAuth;
};
export default useAuth;
