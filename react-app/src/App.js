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
        <Route path="/maincategories/:mc">
          <MainCat/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
