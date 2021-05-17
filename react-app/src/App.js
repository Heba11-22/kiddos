// import 'semantic-ui-css/semantic.min.css'
import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleItem from "./components/Items";
// import SavedItems from "./components/SavedItems";
// import Categories from "./components/NavBar/Categories";
import NavBar from "./components/NavBar";
import MainCat from "./components/MainCat";
import LoginSignUpForm from "./components/LoginSignUpForm";
import { allMainCategories } from './store/mainCategories'
import LoginForm from "./components/LoginSignUpForm/LoginForm";
import SignUpForm from "./components/LoginSignUpForm/SignUpForm";
import LogSign from "./components/LogSign";
import SavedItems from "./components/SavedItems";
import ProtectedRoute from "./components/LoginSignUpForm/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import CategoryItems from "./components/CategoryItems";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import DemoUser from "./components/LoginSignUpForm/DemoUser"
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";
import { getItemsThunk, deleteAnItemThunk } from "./store/savedItems";
import { searchThunk } from './store/search';

function App() {
  
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user) || {}
  const userId = user.id
  useEffect( () => {
    dispatch(allMainCategories())
    dispatch(authenticate())
    dispatch(getItemsThunk(userId))
    // dispatch(searchThunk(e.target.value));
    }, [dispatch])

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact={true}>
          <LandingPage/>
        </Route>
        <Route path="/items/:itemId" exact={true}>
          <SingleItem/>
        </Route>
        <Route path="/maincategories/categories/:id/items" exact={true}>
          <CategoryItems/>
        </Route>
        <Route path="/saveItems" exact={true}>
          <SavedItems/>
        </Route>
        {/* <Route path="/maincategories" exact={true}>
          <Categories/>
        </Route> */}
        {/* <Route path="/savedItems" exact={true}>
          <SavedItems/>
        </Route> */}
        <ProtectedRoute path="/savedItems" exact={true}>
          <SavedItems/>
        </ProtectedRoute>
        <Route path="/maincategories/:mc" exact={true}>
          <MainCat/>
        </Route>
        <Route path="/signform" exact={true}>
          {/* <NavBar /> */}
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
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
