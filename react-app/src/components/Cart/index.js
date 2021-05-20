import React, { useEffect } from 'react';
import { getCartItemsThunk } from "../../store/cart"
import { getAllItemsThunk } from "../../store/allItems"
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";

function Cart () {
    const dispatch = useDispatch();

    const allItems = useSelector(state => state.item.allItems) || {}
    const oneItem = allItems.items || {}
    // const targtedItem = oneItem[0] || {}
    // const allCartItems = useSelector(state => state.cartItems.cart) || {}
    // console.log("BBBBBBBBBB",allItems)
    // console.log("BBBBBBBBBB",targtedItem)

    let allCartItems;
    useEffect( async () => {
       allCartItems = await dispatch(getCartItemsThunk());
    //    console.log("2222BBBBBBBBBB",allCartItems)
        dispatch(getAllItemsThunk());
    }, [dispatch])

    return (
        <div className="cart-div">
            <h1 className="cart-sen" >The Page is Under Construction</h1>
            <img className="cart-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg"/>
        </div>
    )
}

export default Cart;