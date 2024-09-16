import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRootContext } from '../contextProvider/RootContext';

const withAuth = (WrappedComponent) => {
  const AuthRequired = (props) => {
    const navigate = useNavigate();
    const { authorized, loading } = useRootContext()
    const { pathname } = useLocation()



    useEffect(() => {
      console.log(loading, authorized, pathname)
      if (typeof window !== 'undefined') {
        // if (!loading && !authorized && pathname !== '/login') {
        //   navigate("/login")
        // }
      }
    }, [loading, authorized, pathname]);

    return React.createElement(WrappedComponent, props);
  };

  return AuthRequired;
};

export default withAuth;
