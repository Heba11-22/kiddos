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
  const allItems = useSelector(state => state.savedItems.items) || {}
  const user = useSelector(state => state.session.user) || {}
  const userId = user.id
  const [loaded, setLoaded] = useState(false);
  const allItemsValues = Object.values(allItems)
  console.log("////////////", allItemsValues)

  // useEffect cant't have async func. Only if we invoke it immeditaly.
  useEffect(() => {
    dispatch(getItemsThunk(userId))
  }, [dispatch]);

  // if (!loaded) {
  //   return null;
  // }

  

  return (
    <div className="saved-items-div">
      <div>HHHHHHIIIIIII</div>
      {/* <ul className="saved-items-ul">
        {allItemsValues.map((item,i) => (
          <li key={i}>
            <h5>{item}</h5>
            {console.log("?????????", item)}
          </li>
        ))}

      </ul> */}
   </div>
  )
}

export default SavedItems;