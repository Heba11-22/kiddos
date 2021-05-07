import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SingleItem from "./components/Items";
import SavedItems from "./components/SavedItems";
import NavBar from "./components/NavBar";
 

function App() {
  

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/items/:itemId" exact={true}>
          <SingleItem/>
        </Route>
        <Route path="/savedItems">
          <SavedItems/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
