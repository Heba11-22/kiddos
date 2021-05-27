import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, Redirect} from "react-router-dom";
import FreeShipping from "../Cart/FreeShipping";
import {allCartItemsValue} from "../Cart/CheckOut";

const Pay = () => {
    console.log("kfdjdoiufoidsjlds",allCartItemsValue)
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
            {/* <div className="tax-div">
                <div className="tax-word">
                    Pre-Tax Order Total
                </div>
                <div className="tax-price">
                    {allCartItemsValue + (allCartItemsValue >= 50 ? 0 : 5)}
                </div>
            </div> */}
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
            {/* <NavLink to="/checkout" className="proceed">
                Proceed to Checkout
            </NavLink> */}
            <NavLink to="/" className="continue">
                Place Order
            </NavLink>
        </div>
    )
}

export default Pay;