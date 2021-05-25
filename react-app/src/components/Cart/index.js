import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, Redirect} from "react-router-dom";
import Select from 'react-select';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { getCartItemsThunk, deleteAnItemThunk } from "../../store/cart"
import { getAllItemsThunk } from "../../store/allItems"
import { useSelector, useDispatch } from "react-redux";
import { saveAnItemThunk } from "../../store/savedItems";
import Footer from "../Footer"
import Checkout from "./CheckOut"
import FreeShipping from "./FreeShipping";
import "./Cart.css";

function Cart () {
    const dispatch = useDispatch();

    const allItems = useSelector(state => state.allItems.allItems) || {}
    const oneItem = allItems.items || {}
    const oneItemArray = Object.values(oneItem) || {}
    // const targtedItem = oneItem[123-1] || {}
    const allCartItems = useSelector(state => state.cartItems.items) || {}
    const [selectedValue, setSelectedValue] = useState(24)
    const [selectedCount, setSelectedcount] = useState(1)
    // console.log("BBBBBBBBBB",oneItemArray)
    // console.log("BBBBBBBBBB",targtedItem)
    const options = [
        {value: 24, label:'1'},
        {value: 48, label:'2'},
        {value: 72, label:'3'},
        {value: 96, label:'4'},
        {value: 120, label:'5'}
    ]

    const selectedOption = (e) => {
        setSelectedValue(e.value)
        setSelectedcount(e.label)
        // console.log("111111111111",e, "dddd", selectedValue)
    }
    
    let allCartItemsValue =0;
    useEffect( async (e) => {
        dispatch(getCartItemsThunk());
        // let allCartItems = await dispatch(getCartItemsThunk());
        // allCartItemsValue = allCartItems.items
    //    console.log("2222BBBBBBBBBB",allCartItems.items)
        dispatch(getAllItemsThunk());
    }, [dispatch])

    // const freeShipping = {

    // }

    return (
        <div className="cart-div-whole">
            <div className="cart-div">
                {/* <h1 className="cart-sen" >The Page is Under Construction</h1>
                <img className="cart-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg"/> */}
                
                <ul className="cart-items-ul">
                    {allCartItems && (Object.values(allCartItems)).map((item,i) => (
                        <li key={i} className="one-item-cart-li">
                            {oneItemArray[(item.itemId)-1] && 
                            <>
                                <div className="item-select-price-img">
                                    <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img">
                                            <img className="cart-item-img" src={((oneItemArray[(item.itemId)-1]).photos).photo_url}/>
                                            {/* <div className="price4"> */}
                                                {/* <div className="item-price4">$50</div> */}
                                                {/* <div className="item-price-sale4-div">Sale <span className="item-price-sale4"> $24</span></div> */}
                                            {/* </div> */}
                                    </NavLink>
                                    <div className="item-select-price">
                                        <div className="items-name">
                                            <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img2">
                                                {(oneItemArray[(item.itemId)-1]).itemName}
                                            </NavLink>
                                        </div>
                                        <Select  
                                            id={(oneItemArray[(item.itemId)-1]).id}
                                            placeholder={selectedCount} 
                                            // style={{width: "100px"}}
                                            options={options} className="select" 
                                            value={selectedValue} 
                                            onChange={selectedOption}
                                            menuColor="red"
                                            />
                                            {console.log("22222222111111111111",allCartItemsValue += selectedValue)}
                                        <div className="price-divs">
                                            <div className="item-price-cart1" style={{paddingBottom: "5px", paddingTop: "25px"}}>Reg. $50</div>
                                            <div className="item-price-cart2" style={{color: "red", paddingBottom: "5px"}}>Sale $24</div>
                                            <div className="item-price-cart3">Total: ${selectedValue}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="radio-options"  >
                                    <RadioGroup  vertical>
                                        <RadioButton value="">
                                            <div style={{color: "black", outline: "none"}}>
                                                <span style={{fontWeight: "bold"}}>
                                                    Ship it <br/>
                                                </span>
                                                <span style={{fontWeight: "lighter", color: "green"}}>
                                                    In Stock:
                                                </span> Usually ships within 2 business days.
                                            </div>
                                        </RadioButton>
                                        <RadioButton value="">
                                            <div style={{color: "black"}}>
                                            <span style={{fontWeight: "bold"}}>
                                                Pick Up In 5-8 business days 
                                            </span>
                                            <span style={{fontWeight: "lighter"}}>
                                                at our store 
                                            </span> <br/>
                                            <span style={{fontWeight: "lighter"}}> For </span>
                                            <span style={{fontWeight: "bold"}}> Curbside</span> 
                                            <span style={{fontWeight: "lighter"}}> or </span> 
                                            <span style={{fontWeight: "bold"}}> In Store Pickup. </span>
                                            </div>
                                        </RadioButton>
                                    </RadioGroup>

                                </div>
                                <div className="cart-buttons">
                                    <button className="save-for-later" 
                                        // onClick={() => dispatch(saveAnItemThunk(oneItemArray[(item.itemId)-1]).id)}
                                    >
                                        Save For Later
                                    </button>
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
                                    
                                </div>
                                </>
                            }
                            {/* <button className="add-checkout">
                                <NavLink className="add-cart-nav" to="/cart">Add to Cart</NavLink>
                            </button> */}
                        </li>
                    ))}
                </ul>
                <div className="checkout">
                    <Checkout allCartItemsValue={allCartItemsValue}/>
                </div>
            </div>
            {/* <Footer className="footer"/> */}
        </div>
    )
}

export default Cart;