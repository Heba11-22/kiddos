import React, { useEffect } from 'react';
import { getCartItemsThunk } from "../../store/cart"
import { getAllItemsThunk } from "../../store/items"
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";

function Cart () {
    
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getCartItemsThunk());
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