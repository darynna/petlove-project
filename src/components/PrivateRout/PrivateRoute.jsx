import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsSignedIn } from '../../redux/Auth/authSelector';

const PrivateRoute = ({ children }) => {
    const isAuthenticated  = useSelector(selectUserIsSignedIn);
    return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;