import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from "../../components/LoginSignUpForm/LoginForm";
import SignUpForm from "../../components/LoginSignUpForm/SignUpForm";
import LogSign from "../LogSign";
import ProtectedRoute from "../../components/LoginSignUpForm/ProtectedRoute";
import UsersList from "../../components/UsersList";
import User from "../../components/User";
import LoginSignUpForm from "../LoginSignUpForm";
// import { authenticate } from "./services/auth";
import { authenticate } from "../../store/session";
import { getItemsThunk } from "../../store/savedItems";

function SavedItems() {
// const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const allItems = useSelector(state => state.savedItems.items) 
  const user = useSelector(state => state.session.user) || {}
  const userId = user.id
  const [loaded, setLoaded] = useState(false);


  // useEffect cant't have async func. Only if we invoke it immeditaly.
  useEffect(() => {
    dispatch(getItemsThunk(userId))
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <div className="form">
      {/* <div className="log-sign-form">
        <LoginSignUpForm />
      </div> */}
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