import { createContext, useState, useLayoutEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useLayoutEffect(() => {
    const isAccessTokenSaved = localStorage.getItem("accessToken") !== null;
    setIsLoggedIn(isAccessTokenSaved);
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };
