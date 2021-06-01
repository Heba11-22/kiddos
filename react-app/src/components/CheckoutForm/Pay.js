import React from 'react';
import { useHistory} from "react-router-dom";
import { useAlert } from 'react-alert'
import FreeShipping from "../Cart/FreeShipping";
import { allCartItemsValue } from "../Cart/CheckOut";

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
                {allCartItemsValue >= 50 ? "Free" : "$5"}
                </div>
            </div>
     
            <div className="tax-div">
                <div className="tax-word">
                    Estimated tax
                </div>
                <div className="tax-price">
                    {Number(((allCartItemsValue + (allCartItemsValue >= 50 ? 0 : 5)) * (5/100)).toFixed(2))}
                    {/* {or "Math.round(6.688689, 2)"} */}
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
                <button className="continue fake" id="order" title="Thanks" onClick={() => {alert.show('Your order has been placed!!!')}}>Place Order</button>
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