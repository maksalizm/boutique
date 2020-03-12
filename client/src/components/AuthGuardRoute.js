import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function AuthGuardRoute({children, ...rest}) {
  const { isLogin } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render = {({location}) => isLogin ?
        (children) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default AuthGuardRoute;