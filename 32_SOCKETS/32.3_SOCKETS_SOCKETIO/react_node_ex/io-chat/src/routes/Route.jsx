import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../hooks/auth';

function CustomRoute({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { userInfo } = useAuth();
  const isAuthed = !!userInfo.username;

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === isAuthed ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/chat',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default CustomRoute;
