import React from 'react';
import { NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';
import FreeShipping from "./FreeShipping";

let allCartItemsValue = 0;
const Checkout = ({shipping}) => {
    const allCartItems = useSelector(state => state.cartItems.items) || {}

    let total = 0
        for (let key in allCartItems) {
            total += allCartItems[key].quantity
        }
        allCartItemsValue =  total * 24 
    
    return (
        <div className="checkout-div">
            {(allCartItemsValue >= 50)&& (
                <div>
                    <FreeShipping/>
                </div>
            )}
            {/* {(!shipping)&& (
                <div>
                    <FreeShipping/>
                </div>
            )} */}
            <div className="total">
                <div className="total-word">
                    Subtotal
                </div>
                <div className="total-price">
                   {/* { allCartItemsValue &&  */}
                    <div>${allCartItemsValue}</div>
                   {/* }  */}
                </div>
            </div>
            <div className="shipping-div">
                <div className="shipping-word">
                    Shipping
                </div>
                <div className="shipping-price" style={{color: "red"}}>
                {/* {shipping ? ((allCartItemsValue >= 50 ) ? "Free" : "$5"): "Free"} */}
                {(allCartItemsValue >= 50 ) ? "Free" : "$5"}
                </div>
            </div>
            <div className="tax-div">
                <div className="tax-word">
                    Pre-Tax Order Total
                </div>
                <div className="tax-price">
                    {allCartItemsValue + (allCartItemsValue >= 50 ? 0 : 5)}
                </div>
            </div>
            <div className="tax-div">
                <div className="tax-word">
                    Estimated tax
                </div>
                <div className="tax-price">
                    {Number(((allCartItemsValue + (allCartItemsValue >= 50 ? 0 : 5)) * (5/100)).toFixed(2))}
                </div>
            </div>
            <div className="tax-div">
                <div className="tax-word">
                Order total
                </div>
                <div className="tax-price">
                    {((allCartItemsValue + (allCartItemsValue >= 50 ? 0 : 5)) * (5/100)) + (allCartItemsValue + (allCartItemsValue >= 50 ? 0 : 5))}
                </div>
            </div>
            { allCartItemsValue && 
                <div className="proceed-continue">
                    <NavLink to="/checkout" className="proceed">
                        Proceed to Checkout
                    </NavLink>
                    <NavLink to="/" className="continue">
                        Continue Shopping
                    </NavLink>
                </div>
            }
            {!allCartItemsValue &&
                <NavLink to="/" className="continue">
                    Continue Shopping
                </NavLink>
            }
        </div>
    )
}

export default Checkout;
export {allCartItemsValue};