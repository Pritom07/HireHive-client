import PropTypes from "prop-types";
import useAuth from "../Context/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { User, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loader />;
  }

  if (User) {
    return children;
  }

  return <Navigate to="/register" state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
