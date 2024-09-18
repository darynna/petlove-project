import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsSignedIn } from '../../redux/Auth/authSelector';

const RestrictedRoute = ({ children}) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? <Navigate to="/profile" replace /> : children;
};

export default RestrictedRoute;