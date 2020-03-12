import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  
  const [isLogin, setIsLogin] = useState(false);
  
  const Login = (user, cb) => {
    setUser(user);
    console.log(user, "login!");
    cb && cb();
    setIsLogin(!isLogin);
  };
  
  const Logout = (cb) => {
    setUser({username: '', password: ''});
    console.log(user, 'Log out');
    cb && cb();
    setIsLogin(!isLogin);
  };
  
  return (
    <AuthContext.Provider value={{Login, user, isLogin, Logout}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;