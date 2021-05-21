import React, { useEffect } from 'react';
import { NavLink, useHistory, Redirect} from "react-router-dom";
import { getCartItemsThunk, deleteAnItemThunk } from "../../store/cart"
import { getAllItemsThunk } from "../../store/allItems"
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer"
import "./Cart.css";

function Cart () {
    const dispatch = useDispatch();

    const allItems = useSelector(state => state.allItems.allItems) || {}
    const oneItem = allItems.items || {}
    const oneItemArray = Object.values(oneItem) || {}
    // const targtedItem = oneItem[123-1] || {}
    const allCartItems = useSelector(state => state.cartItems.items) || {}
    console.log("BBBBBBBBBB",oneItemArray)
    // console.log("BBBBBBBBBB",targtedItem)

    let allCartItemsValue;
    useEffect( async () => {
        dispatch(getCartItemsThunk());
        // let allCartItems = await dispatch(getCartItemsThunk());
        // allCartItemsValue = allCartItems.items
    //    console.log("2222BBBBBBBBBB",allCartItems.items)
        dispatch(getAllItemsThunk());
    }, [dispatch])

    return (
        <div className="cart-div">
            <h1 className="cart-sen" >The Page is Under Construction</h1>
            <img className="cart-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg"/>
            <ul className="cart-items">
                {allCartItems && (Object.values(allCartItems)).map((item,i) => (
                    <li key={i}>
                        {oneItemArray[(item.itemId)-1] && 
                            <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="saved-items-nav">
                                    <img className="cart-item-img" src={((oneItemArray[(item.itemId)-1]).photos).photo_url}/>
                                    <h3 className="saved-items-name">{(oneItemArray[(item.itemId)-1]).itemName}</h3>
                                    <div className="price4">
                                        <div className="item-price4">$50</div>
                                        <div className="item-price-sale4-div">Sale <span className="item-price-sale4"> $24</span></div>
                                    </div>
                            </NavLink>
                        }
                        <button className="delete-item" onClick={() => {
                            dispatch(deleteAnItemThunk((oneItemArray[(item.itemId)-1]).id))
                            // window.location.assign("/savedItems")
                            // history.push("/savedItems")
                            // setTrigger(!trigger)
                            window.location.reload()
                            {/* <Redirect to="/savedItems"/> */}
                            }}>
                            Delete From Cart
                        </button>
                        {/* <button className="add-checkout">
                            <NavLink className="add-cart-nav" to="/cart">Add to Cart</NavLink>
                        </button> */}
                    </li>
                ))}
            </ul>
            <Footer/>
        </div>
    )
}

export default Cart;