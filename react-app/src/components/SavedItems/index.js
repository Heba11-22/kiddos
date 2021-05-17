import { BrowserRouter, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, Redirect} from "react-router-dom";
import LoginForm from "../../components/LoginSignUpForm/LoginForm";
import SignUpForm from "../../components/LoginSignUpForm/SignUpForm";
import LogSign from "../LogSign";
import ProtectedRoute from "../../components/LoginSignUpForm/ProtectedRoute";
import UsersList from "../../components/UsersList";
import User from "../../components/User";
import LoginSignUpForm from "../LoginSignUpForm";
// import { authenticate } from "./services/auth";
import { authenticate } from "../../store/session";
import { getItemsThunk, deleteAnItemThunk } from "../../store/savedItems";
import "./SavedItems.css"

function SavedItems() {
// const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory()
  const allItemsState = useSelector(state => state.savedItems.savedItems) || {}
  const allItems = allItemsState.items || {}
  const user = useSelector(state => state.session.user) || {}
  const userId = user.id
  const [trigger, setTrigger] = useState(false);
  const allItemsValues = Object.values(allItems) || {}
  console.log("////////////", allItemsValues)

  // useEffect cant't have async func. Only if we invoke it immeditaly.
  useEffect(() => {
    dispatch(getItemsThunk(userId))
  // },[trigger, dispatch, userId, allItemsValues]);
  },[dispatch]);
  // }, [allItemsValues]);

  // const handleUnsave = async() => {
  //   dispatch(deleteAnItemThunk(item.id))
  // }

  // if (!loaded) {
  //   return null;
  // }

  

  return (
    <div className="saved-items-div">
    
      {/* <div className="saved-items"> */}
        
          <ul className="saved-items-ul">
            {allItemsValues.map((item,i) => (
              <li key={i} className="saved-items-li">
                <NavLink to={`/items/${item.id}`} className="saved-items-nav">
                  {item.photos && (
                    <img className="saved-items-img" src={item.photos.photo_url}></img>
                    )}
                    <h3 className="saved-items-name">{item.itemName}</h3>
                    <div className="price4">
                        <div className="item-price4">$50</div>
                        <div className="item-price-sale4-div">Sale <span className="item-price-sale4"> $24</span></div>
                    </div>
                </NavLink>
                {/* {item.photos && (
                  <NavLink to={`/items/${item.id}`}>
                    <img className="saved-items-img" src={item.photos.photo_url}></img>
                  </NavLink>
                )} */}
                {!item.photos && (<h3>Already in the favorite list</h3>)}
                  {/* {console.log("?????????", item)} */}
                  <div className="buttons">
                    <button className="unsave-item" onClick={() => {
                      dispatch(deleteAnItemThunk(item.id))
                      window.location.assign("/savedItems")
                      // history.push("/savedItems")
                      setTrigger(!trigger)
                      // window.location.reload(false)
                      {/* <Redirect to="/savedItems"/> */}
                      }}>
                      DELETE
                    </button>
                    <button className="add-cart">
                      Add to Cart
                    </button>
                  </div>
              </li>
              
            ))}

          </ul>
      {/* </div> */}
    </div>
  )
}

export default SavedItems;