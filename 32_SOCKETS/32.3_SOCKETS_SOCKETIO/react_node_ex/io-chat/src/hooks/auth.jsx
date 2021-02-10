import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

const authContext = createContext();

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(() => {
    const info = JSON.parse(localStorage.getItem('chatUser'));
    const token = JSON.parse(localStorage.getItem('chatToken'));


    if (!info || !token) {
      return {};
    }

    const user = { ...info, token };

    return user;
  });

  const signIn = useCallback(async ({ username, password }) => {
    const loginInfo = { username, password };

    const { data } = await api.post('/login', loginInfo);

    localStorage.setItem('chatUser', JSON.stringify(data.user));
    localStorage.setItem('chatToken', JSON.stringify(data.token));

    const userInfo = { ...data.user, token: data.token };

    setUserInfo(userInfo);
  }, []);

  return (
    <authContext.Provider value={{ userInfo, signIn }} >
      { children }
    </authContext.Provider>
  );
}

function useAuth() {
  const context = useContext(authContext);

  return context;
}

export {
  useAuth,
  AuthProvider,
}
