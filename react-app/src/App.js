// import 'semantic-ui-css/semantic.min.css'
import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleItem from "./components/Items";
import SavedItems from "./components/SavedItems";
// import Categories from "./components/NavBar/Categories";
import NavBar from "./components/NavBar";
import MainCat from "./components/MainCat";
import LoginSignUpForm from "./components/LoginSignUpForm";
import { allMainCategories } from './store/mainCategories'
import LoginForm from "./components/LoginSignUpForm/LoginForm";
import SignUpForm from "./components/LoginSignUpForm/SignUpForm";
import LogSign from "./components/LogSign";
import ProtectedRoute from "./components/LoginSignUpForm/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";
 

function App() {
  
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch(allMainCategories())
    }, [dispatch])

  return (
   <>
      <NavBar />
      <Switch>
        <Route path="/items/:itemId" exact={true}>
          <SingleItem/>
        </Route>
        {/* <Route path="/maincategories" exact={true}>
          <Categories/>
        </Route> */}
        <Route path="/savedItems" exact={true}>
          <SavedItems/>
        </Route>
        {/* <ProtectedRoute path="/savedItems" exact={true}>
          <SavedItems/>
        </ProtectedRoute> */}
        <Route path="/maincategories/:mc">
          <MainCat/>
        </Route>
        <Route path="/signform">
          <LoginSignUpForm/>
        </Route>
      {/* </Switch> */}
      {/* <LogSign /> */}
      {/* <Route path="/login" exact={true}>
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
      </ProtectedRoute> */}
      {/* <ProtectedRoute path="/" exact={true}>
        <h1>My Home Page</h1>
      </ProtectedRoute> */}
      </Switch>
    </>
  );
}

export default App;
