// import 'semantic-ui-css/semantic.min.css'
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SingleItem from "./components/Items";
import NavBar from "./components/NavBar";
import MainCat from "./components/MainCat";
import LoginSignUpForm from "./components/LoginSignUpForm";
import { allMainCategories } from './store/mainCategories'
import SavedItems from "./components/SavedItems";
import ProtectedRoute from "./components/LoginSignUpForm/ProtectedRoute";
import CategoryItems from "./components/CategoryItems";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart"
import CheckoutForm from "./components/CheckoutForm"
import { authenticate } from "./store/session";
import { getLatestItemsThunk } from "./store/items"
import { getAllItemsThunk} from "./store/allItems"

function App({ hideLoader }) {
  useEffect(hideLoader, []);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user) || {}
  // const userId = user.id || {}
  useEffect( () => {
    dispatch(allMainCategories())
    dispatch(authenticate())
    // dispatch(getItemsThunk(userId))
    dispatch(getAllItemsThunk());
    dispatch(getLatestItemsThunk());
    // dispatch(searchThunk(e.target.value));
    }, [dispatch])

  return (
    <BrowserRouter>
      <NavBar className="nav-bar"/>
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
        <Route path="/cart" exact={true}>
          <Cart/>
        </Route>
        <Route path="/checkout" exact={true}>
          <CheckoutForm/>
        </Route>
        <ProtectedRoute path="/savedItems" exact={true}>
          <SavedItems/>
        </ProtectedRoute>
        <Route path="/maincategories/:mc" exact={true}>
          <MainCat/>
        </Route>
        <Route path="/signform" exact={true}>
          <LoginSignUpForm/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
