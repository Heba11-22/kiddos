import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleItem from "./components/Items";
import SavedItems from "./components/SavedItems";
// import Categories from "./components/NavBar/Categories";
import NavBar from "./components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { allMainCategories } from './store/mainCategories'
 

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
        <Route path="/savedItems">
          <SavedItems/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
