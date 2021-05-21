import React, { useEffect } from 'react';
import { NavLink, useHistory, Redirect} from "react-router-dom";
import Select from 'react-select';
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
    // console.log("BBBBBBBBBB",oneItemArray)
    // console.log("BBBBBBBBBB",targtedItem)
    const options = [
        {value: 24, label:'1'},
        {value: 48, label:'2'},
        {value: 72, label:'3'},
        {value: 96, label:'4'},
        {value: 120, label:'5'}
    ]

    let allCartItemsValue;
    useEffect( async () => {
        dispatch(getCartItemsThunk());
        // let allCartItems = await dispatch(getCartItemsThunk());
        // allCartItemsValue = allCartItems.items
    //    console.log("2222BBBBBBBBBB",allCartItems.items)
        dispatch(getAllItemsThunk());
    }, [dispatch])

    return (
        <div className="cart-div-whole">
            <div className="cart-div">
                {/* <h1 className="cart-sen" >The Page is Under Construction</h1>
                <img className="cart-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg"/> */}
                
                <ul className="cart-items-ul">
                    {allCartItems && (Object.values(allCartItems)).map((item,i) => (
                        <li key={i} className="one-item-cart-li">
                            {oneItemArray[(item.itemId)-1] && 
                                <div className="item-select-price-img">
                                    <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img">
                                            <img className="cart-item-img" src={((oneItemArray[(item.itemId)-1]).photos).photo_url}/>
                                            <div className="price4">
                                                {/* <div className="item-price4">$50</div> */}
                                                {/* <div className="item-price-sale4-div">Sale <span className="item-price-sale4"> $24</span></div> */}
                                            </div>
                                    </NavLink>
                                    <div className="item-select-price">
                                        <div className="saved-items-name">{(oneItemArray[(item.itemId)-1]).itemName}</div>
                                        <Select  options={options} className="select"></Select>
                                        <span className="item-price-sale4">$24 {options.value}</span>
                                    </div>
                                </div>
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
                <div className="checkout">
                    CHECKOUT
                </div>
            </div>
            {/* <Footer className="footer"/> */}
        </div>
    )
}

export default Cart;