import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import AuthGuardRoute from './AuthGuardRoute';
import MyPage from './MyPage';

function HeaderRouter(props) {
  return (
    <Switch>
      <Route exact path="/">
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <AuthGuardRoute path="/mypage">
        <MyPage />
      </AuthGuardRoute>
    </Switch>
  );
}

export default HeaderRouter;
