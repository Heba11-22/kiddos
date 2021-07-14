import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { useAlert } from 'react-alert'
import {addAnItemThunk} from "../../store/cart"
import Footer from "../Footer"
import { getItemsThunk, deleteAnItemThunk } from "../../store/savedItems";
import "./SavedItems.css"

function SavedItems() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const allItemsState = useSelector(state => state.savedItems.savedItems) || {}
  const allItems = allItemsState.items || {}
  const user = useSelector(state => state.session.user) || {}
  const userId = user.id || {}
  const allItemsValues = Object.values(allItems) || {}

  // useEffect cant't have async func. Only if we invoke it immeditaly.
  useEffect(() => {
    dispatch(getItemsThunk(userId))
  },[dispatch]);

  return (
    <div className="saved-items-div">        
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
              
                {!item.photos && (<h3>Already in the favorite list</h3>)}
                  <div className="buttons">
                    <button className="unsave-item" onClick={async () => {
                      await dispatch(deleteAnItemThunk(item.id))
                      await dispatch(getItemsThunk(userId))
                      // window.location.reload(false)
                      }}>
                      DELETE
                    </button>
                    <button className="add-cart" onClick={async() => {
                      await dispatch(addAnItemThunk(item.id))
                      alert.show('Added to the Cart');
                      }}>
                      Add to Cart
                    </button>
                  </div>
              </li>
              
            ))}

          </ul>
          <footer>
              <Footer />
          </footer>
    </div>
  )
}

export default SavedItems;