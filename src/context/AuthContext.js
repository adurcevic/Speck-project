import { createContext, useState, useLayoutEffect } from "react";
import { getAllUsers } from "../api/users";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formValues, setFormValues] = useState(null);

  useLayoutEffect(() => {
    const isAccessTokenSaved = localStorage.getItem("accessToken") !== null;
    setIsLoggedIn(isAccessTokenSaved);
  });

  useLayoutEffect(() => {
    const token = localStorage.getItem("accessToken");
    isLoggedIn &&
      getAllUsers(token)
        .then((users) => {
          const decodeToken = jwt_decode(token);
          return users.find((user) => user.email === decodeToken.email);
        })
        .then((user) => {
          setFormValues({
            id: user.id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            githubUsername: user.github_username,
            zeplinUsername: user.zeplin_username,
            activeFacultyYear:
              +user.active_faculty_year === 0 ? "0" : +user.active_faculty_year,
          });
        })
        .catch((err) => console.error(`${err.message} 🙄`));
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, formValues, setFormValues }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };
