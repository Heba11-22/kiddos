import React from 'react';
import { useHistory} from "react-router-dom";
import { useAlert } from 'react-alert'
import FreeShipping from "../Cart/FreeShipping";
import { allCartItemsValue } from "../Cart/CheckOut";
import { shippingValue } from "../Cart/index";

const Pay = () => {
    const history = useHistory();
    const alert = useAlert();
    return (
        <div className="checkout-div">
            {(allCartItemsValue >= 50)&& (
                <div>
                    <FreeShipping/>
                </div>
            )}
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
                {`$${shippingValue}`}
                {/* {allCartItemsValue >= 50 ? "Free" : "$5"} */}
                </div>
            </div>
     
            <div className="tax-div">
                <div className="tax-word">
                    Estimated tax
                </div>
                <div className="tax-price">
                {Number(((allCartItemsValue + shippingValue) * (5/100)).toFixed(2))}                    {/* {or "Math.round(6.688689, 2)"} */}
                </div>
            </div>
            <div className="tax-div">
                <div className="tax-word">
                Order total
                </div>
                <div className="tax-price">
                {(allCartItemsValue + shippingValue) + ((allCartItemsValue + shippingValue) * (5/100))}
                </div>
            </div>
                <button className="continue fake button3" id="order" title="Thanks" 
                    onClick={() => {alert.show('Your order has been placed!!!')}}>
                    Place Order
                </button>
            <button
                className="button3"
                    onClick={() => history.push(`/cart`)}
                >
                    <h4 className="button3-h4 h4">Cancel</h4>
            </button>
        </div>
    )
}

export default Pay;