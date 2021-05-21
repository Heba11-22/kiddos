import React, { useEffect } from 'react';
import { getCartItemsThunk } from "../../store/cart"
import { getAllItemsThunk } from "../../store/allItems"
import { useSelector, useDispatch } from "react-redux";
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
                            <img className="cart-item-img" src={((oneItemArray[(item.itemId)-1]).photos).photo_url}/>
                            }

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;