import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import LoginForm from "../../components/LoginSignUpForm/LoginForm";
import SignUpForm from "../../components/LoginSignUpForm/SignUpForm";
import LogSign from "../LogSign";
import ProtectedRoute from "../../components/LoginSignUpForm/ProtectedRoute";
import UsersList from "../../components/UsersList";
import User from "../../components/User";
// import { authenticate } from "./services/auth";
import { authenticate } from "../../store/session";

function SavedItems() {
// const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);


  // useEffect cant't have async func. Only if we invoke it immeditaly.
  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
      })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <div className="form">
    {/* <BrowserRouter>
    <LogSign />
    <Switch>
      <Route path="/login" exact={true}>
        <LoginForm />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUpForm />
      </Route>
      <ProtectedRoute path="/users" exact={true} >
        <UsersList/>
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId" exact={true}>
        <User />
      </ProtectedRoute>
      <ProtectedRoute path="/" exact={true}>
        <h1>My Home Page</h1>
      </ProtectedRoute>
    </Switch>
  </BrowserRouter> */}

  SavedItmes
  </div>
  )
}

export default SavedItems;