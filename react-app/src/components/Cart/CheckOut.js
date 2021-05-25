import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, Redirect} from "react-router-dom";
import FreeShipping from "./FreeShipping";

const Checkout = ({allCartItemsValue, shipping}) => {
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
                    ${allCartItemsValue}
                </div>
            </div>
            <div className="shipping-div">
                <div className="shipping-word">
                    Shipping
                </div>
                <div className="shipping-price" style={{color: "red"}}>
                {allCartItemsValue >= 50 ? "Free" : "$5"}
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
            <NavLink to="/checkout" className="proceed">
                Proceed to Checkout
            </NavLink>
            <NavLink to="/" className="continue">
                Continue Shopping
            </NavLink>
        </div>
    )
}

export default Checkout;