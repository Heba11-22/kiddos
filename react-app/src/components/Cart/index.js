import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useAlert } from 'react-alert'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { getCartItemsThunk, deleteAnItemThunk, addCount, deleteCount } from "../../store/cart"
import { getAllItemsThunk } from "../../store/allItems"
import { useSelector, useDispatch } from "react-redux";
import { saveAnItemThunk } from "../../store/savedItems";
import { Modal } from '../../context/Modal';
import LoginSignUpModal from '../LoginSignUpForm'
import Checkout from "./CheckOut"
import Footer from "../Footer"
import "./Cart.css";

// I need to save the user's count of the item in cookies or localStorage
export let allCartItemsValue = 0;
export let shippingValue = 0;
function Cart () {
    const dispatch = useDispatch();
    const alert = useAlert();
    const user = useSelector(state => state.session.user);
    const allItems = useSelector(state => state.allItems.allItems) || {};
    const oneItem = allItems.items || {};
    const oneItemArray = Object.values(oneItem) || {};
    const allCartItems = useSelector(state => state.cartItems.items) || {};
    let defaultState = {};
    Object.values(allCartItems).forEach((item, i) => {
        // debugger
        defaultState[i] = 24;
    })

    let defaultState2 = {}
    Object.values(allCartItems).forEach((item, i) => {
        defaultState2[i] = 1
    })
    const [selectedValue, setSelectedValue] = useState(defaultState);
    const [all, setAll] = useState(0);
    const [force, setForce] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [shipping, setShipping] = useState(5);
    const forceUpdate = () => setForce(force + 1);
    const options = [
        {value: 24, label:'1'},
        {value: 48, label:'2'},
        {value: 72, label:'3'},
        {value: 96, label:'4'},
        {value: 120, label:'5'}
    ];

    const parseCount = (value) => {
        switch (value){
            case "24":
                return 1
            case "48":
                return 2
            case "72":
                return 3
            case "96":
                return 4
            default:
                return 0
        }
    }
    
    const selectedOption = (e, itemId) => {
        
        if ( allCartItems[itemId].quantity > Number(e.target.value) ) {
            dispatch(deleteCount({cartItemId: itemId, count: parseCount(e.target.value)}))
        } else {
            // increment count
            dispatch(addCount({cartItemId: itemId, count: parseCount(e.target.value)}))
        }
        setSelectedValue({...selectedValue, [e.target.parentNode.id]: e.target.value})
    }
    
    shippingValue = shipping;

    return (
        <div className="cart-div-whole">
            <div className="cart-div">                
                <ul className="cart-items-ul">
                    {allCartItems && (Object.values(allCartItems)).map((item,i) => (
                        <li key={i} className="one-item-cart-li">
                            {oneItemArray[(item.itemId)-1] && 
                            <div className="one-item-cart-div">
                                <div className="item-select-price-img">
                                    <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img">
                                        <img className="cart-item-img" src={((oneItemArray[(item.itemId)-1]).photos).photo_url}/>
                                    </NavLink>
                                    <div className="item-select-price" id={(oneItemArray[(item.itemId)-1]).id}>
                                        <div className="items-name">
                                            <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img2">
                                                {(oneItemArray[(item.itemId)-1]).itemName}
                                            </NavLink>
                                        </div>
                                        <select 
                                            style={{marginRight: "5%"}} 
                                            name={selectedValue[item.itemId]} 
                                            value={selectedValue[item.itemId]} 
                                            onChange={(e) => selectedOption(e, item.id)} 
                                            onClick={() => setAll(selectedValue[item.itemId] || 24)} type="submit" 
                                        >
                                            <option value="24"  label='1'>1</option>
                                            <option value="48"  label='2'>2</option>
                                            <option value="72" label='3'>3</option>
                                            <option value="96"  label='4'>4</option>
                                        </select>
                                        <div className="price-divs">
                                            <div className="item-price-cart1" style={{paddingBottom: "5px", paddingTop: "25px"}}>Reg. $50</div>
                                            <div className="item-price-cart2" style={{color: "red", paddingBottom: "5px"}}>Sale $24</div>
                                            <div className="item-price-cart3" >Total: ${selectedValue[item.itemId] || 24}</div>
                                        </div>
                                    </div>
                                </div>
                                <RadioGroup className="radio"  vertical="true">
                                    <RadioButton 
                                    className="radio"
                                    default
                                    >
                                        <div 
                                            style={{color: "black", outline: "none"}} 
                                            onClick={(e) => {setShipping(5)}} 
                                        >
                                            <span style={{fontWeight: "bold"}}>
                                                Ship it <br/>
                                            </span>
                                            <span style={{fontWeight: "lighter", color: "green"}}>
                                                In Stock:
                                            </span> Usually ships within 2 business days.
                                        </div>
                                    </RadioButton>
                                    <RadioButton 
                                        className="radio"
                                    >
                                        <div 
                                        style={{color: "black"}}  
                                        onClick={(e) => {setShipping(0)}} 
                                        >
                                        <span style={{fontWeight: "bold", marginRight: ".3em"}}>
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
                                <div className="cart-buttons">
                                    <button 
                                        className="save-for-later" 
                                        onClick={  async(e) => {
                                            if (!user ) {
                                                setShowModal(true)
                                            } else if (user) {
                                                await dispatch(saveAnItemThunk(oneItemArray[(item.itemId)-1].id))
                                                await dispatch(deleteAnItemThunk((oneItemArray[(item.itemId)-1]).id))
                                                await dispatch(getCartItemsThunk())
                                                }
                                            }}
                                    >
                                        Save For Later
                                    </button>
                                    <button className="delete-item" onClick={ async () => {
                                        await dispatch(deleteAnItemThunk((oneItemArray[(item.itemId)-1]).id))
                                        await dispatch(getCartItemsThunk())
                                        }}>
                                        Delete From Cart
                                    </button>
                                </div>
                            </div>
                            }
                        </li>
                    ))}
                </ul>
                <div className="checkout">
                    <Checkout allCartItemsValue={allCartItemsValue} shipping={shipping}/>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginSignUpModal setShowModal={setShowModal}/>
                </Modal> 
        )}
        </div>
    )
}

export default Cart;