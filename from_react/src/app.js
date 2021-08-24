import React, { useState, useEffect, useMemo, useCallback } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import useContext from "./service/context/useContext";
import { stora_token } from "./service/util/constante";
import { ToastProvider } from 'react-toast-notifications';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/light-bootstrap-dashboard-pro-react.scss?v=2.0.0";
import "assets/css/demo.css";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

function App() {
  const [usuerio, setusuerio] = useState(false);
  useEffect(
    useCallback(() => {
      (async () => {
        const rest = localStorage.getItem(`${stora_token}`);
        rest ? setusuerio(rest) : setusuerio(false);
      })();
    }, [usuerio])
  );
  const login = (rest) => {
    setusuerio(rest);
  };
  const logout = () => {
    setusuerio(null);
  };
  const UserData = useMemo(
    () => ({
      usuerio,
      login,
      logout,
    }),
    []
  );
  return (
    <ToastProvider>
    <useContext.Provider value={UserData}>
      <BrowserRouter>
        <Switch>
          {!usuerio ? (
            <>
              <Route
                path="/auth"
                render={(props) => <AuthLayout {...props} />}
              />
              <Redirect from="/" to="/auth/login-page" />
            </>
          ) : (
            <>
              <Route
                path="/admin"
                render={(props) => <AdminLayout {...props} />}
              />
              <Redirect from="/" to="/admin/dashboard" />
            </>
          )}
        </Switch>
      </BrowserRouter>
    </useContext.Provider>
    </ToastProvider>
  );
}

export default App;
