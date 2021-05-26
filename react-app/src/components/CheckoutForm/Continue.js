import React, {useState} from 'react';
import { render } from 'react-dom';
import { useHistory, NavLink} from "react-router-dom";
import { Form, Field } from 'react-final-form';
import validator from 'validator'
import Select from 'react-select';
import Pay from './Pay'

import "./CheckoutForm.css"

function Continue ({props}) {
    const history = useHistory()
    const [cardNum, setCardNum] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');

    const month = [
        {value: "01", label:"01"},
        {value: "02", label:"02"},
        {value: "03", label:"03"},
        {value: "04", label:"04"},
        {value: "05", label:"05"}
    ]
    
    const year = [
        {value: "2022", label:"2022"},
        {value: "2023", label:"2023"},
        {value: "2024", label:"2024"},
        {value: "2025", label:"2025"},
        {value: "2026", label:"2026"}
    ]

    const onSubmit=(e) => {
        e.preventDefault();
        setCardNum('');
        setNameOnCard('');
        // errors =[];
        props.setPay(0)
        // alert("HHHHIIII");
        }
    return (
        <div className="final-pay-form">
                        <div className="confirm">
                            <h2>Shipping Address</h2>
                            <button className="edit-button" onClick={() => {props.setPay(1)}}>Edit</button>
                        </div>
                        <div className="shipping-info">
                            <div className="div-info">{props.firstName} {props.lastName}</div>
                            <div className="div-info">{props.address}</div>
                            <div className="div-info">{props.city}, {props.state} {props.zipCode}</div>
                        </div>
                    <div className="payment"><h2 className="payment-h2">Payment</h2></div>
                    <form onSubmit={onSubmit} className="card-form">

                        <div className="card-num c"> 
                            <label> Name on the Card </label>
                            <input
                            className="card-num input-card "  
                            type="text"
                            name="nameOnCard"
                            value={nameOnCard}
                            onChange={(e) => { setNameOnCard(e.target.value)}} 
                            required/>
                        </div>

                        <div className="name-on-card c"> 
                            <label> Card Number </label>
                            <input
                            className="card-num input-card"  
                            type="integer"
                            name="cardNum"
                            value={cardNum}
                            onChange={(e) => { setCardNum(e.target.value)}} 
                            required/>
                        </div>

                        <div className="date c"> 
                            <label> Expiration Date </label>
                            <div className="date-select"> 
                                <Select
                                    options={month} 
                                    className="select"
                                    placeholder={"Month"}
                                    required 
                                />
                                <Select
                                    options={year} 
                                    className="select"
                                    placeholder={"Year"}
                                    required 
                                />
                            </div>
                        </div>
                        <button
                            className="button3"
                                // type="submit"
                                onClick={() => history.push(`/cart`)}
                                // disabled={submitting || pristine}
                            >
                                <h4 className="button3-h4 h4">Cancel</h4>
                            </button>
                            {/* <div className="discount" type="submit">
                                <Pay />
                            </div> */}
                    </form>
                </div>
    )
}

export default Continue;