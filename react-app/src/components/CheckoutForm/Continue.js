import React, {useState} from 'react';
// import { render } from 'react-dom';
import { useHistory} from "react-router-dom";
// import { Form, Field } from 'react-final-form';
import { Form, Field } from 'react-final-form';
// import validator from 'validator'
import Select from 'react-select';
// import Pay from './Pay'
import Cards from 'react-credit-cards'
import CardDisplay from 'react-credit-card-display';
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
  } from './CardUtils'

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

    // const onSubmit=(e) => {
    //     e.preventDefault();
    //     setCardNum('');
    //     setNameOnCard('');
    //     props.setPay(0)
    //     }

    const handleSubmit=(e) => {
        // e.preventDefault();
        // setCardNum('');
        // setNameOnCard('');
        // // errors =[];
        // props.setPay(0)
        alert("HHHHIIII");
        }
    return (
        <div className="final-pay-form">
                    <div className="confirm">
                        <h1>Shipping Address</h1>
                        <button className="edit-button" onClick={() => {props.setPay(1)}}>Edit</button>
                    </div>
                    <div className="shipping-info">
                        <div className="div-info" style={{marginTop: "20px"}}>{props.firstName} {props.lastName}</div>
                        <div className="div-info">{props.address}</div>
                        <div className="div-info">{props.city}, {props.state} {props.zipCode}</div>
                    </div>
                    {/* <div className="payment"><h1 className="payment-h2">Payment</h1></div> */}
                    {/* <CardDisplay number="4321 0987 6543 2109" square={true} expand={true}  active="amex|discover|mc|visa" style={{width: "50vw"}}/> */}
                    {/* <CardDisplay number="4321 0987 6543 2109"/> */}
                    {/* <form onSubmit={onSubmit} className="card-form"> */}
                    {/* <div className="form-card"> */}
                    {/* <Form
                        onSubmit={handleSubmit}
                        render={({
                            handleSubmit, */}
                            {/* // form, */}
                            {/* // submitting, */}
                            {/* // pristine, */}
                            {/* // values, */}
                            {/* // active */}
                        {/* }) => {
                            return (
                            <form onSubmit={handleSubmit}>  */}
                                {/* <Cards
                                number={values.number || ''}
                                name={values.name || ''}
                                expiry={values.expiry || ''}
                                cvc={values.cvc || ''}
                                focused={active}
                                />  */}
                                {/* <div>
                                <div className="name-on-card c"> 
                                    <label> Name on the Card </label>
                                
                                    <Field
                                    className="card-num input-card "  
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="Name"
                                    />
                                    
                                </div> */}

                                {/* <div className="card-num c"> 
                                    <label> Card Number </label>
                                    <Field
                                        className="card-num input-card " 
                                        name="number"
                                        component="input"
                                        type="text"
                                        pattern="[\d| ]{16,22}"
                                        placeholder="Card Number"
                                        format={formatCreditCardNumber}
                                    />
                                </div> */}

                                {/* <div className="name-on-card c"> 
                                    <label> Card Number </label>
                                    <input
                                    className="card-num input-card"  
                                    type="integer"
                                    name="cardNum"
                                    format={formatCreditCardNumber}
                                    value={cardNum}
                                    onChange={(e) => { setCardNum(e.target.value)}} 
                                    required/>
                                </div> */}

                                {/* <div className="date c"> 
                                    <label> Expiration Date </label>
                                    <div className="date-select"> 
                                        <Field
                                        className="select"
                                            name="expiry"
                                            component="input"
                                            type="text"
                                            pattern="\d\d/\d\d"
                                            placeholder="Valid Thru"
                                            format={formatExpirationDate}
                                        />
                                        <Field
                                        className="select"
                                            name="cvc"
                                            component="input"
                                            type="text"
                                            pattern="\d{3,4}"
                                            placeholder="CVC"
                                            format={formatCVC}
                                        />
                                    </div> */}
                                        {/* <Select
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
                                        /> */}
                                    {/* </div> */}
                                {/* </div>
                                <button
                                    className="button3 bb"
                                        onClick={() => history.push(`/cart`)}
                                    >
                                        <h4 className="button3-h4 h4">Cancel</h4>
                                </button>
                                </div> 
                            </form> */}
                            {/* )
                        }}
                />  */}
                {/* </div> */}
                </div>
    )
}

export default Continue;












                            {/* <Form
                                onSubmit={handleSubmit}
                                render={({
                                    handleSubmit,
                                    form,
                                    submitting,
                                    pristine,
                                    values,
                                    active
                                }) => {
                                    return (
                                    <form onSubmit={handleSubmit}> 
                                        {/* <Cards
                                        number={values.number || ''}
                                        name={values.name || ''}
                                        expiry={values.expiry || ''}
                                        cvc={values.cvc || ''}
                                        focused={active}
                                        />  */}
                                        {/* <div>
                                        <Field
                                        className="card-num input-card " 
                                            name="number"
                                            component="input"
                                            type="text"
                                            pattern="[\d| ]{16,22}"
                                            placeholder="Card Number"
                                            format={formatCreditCardNumber}
                                        />
                                        </div> */}
                                        {/* <div>
                                        <Field
                                        className="card-num input-card "  
                                            name="name"
                                            component="input"
                                            type="text"
                                            placeholder="Name"
                                        />
                                        </div> */}
                                        {/* <div className="date-select">
                                        <Field
                                        className="select"
                                            name="expiry"
                                            component="input"
                                            type="text"
                                            pattern="\d\d/\d\d"
                                            placeholder="Valid Thru"
                                            format={formatExpirationDate}
                                            
                                        />
                                        <Field
                                        className="select"
                                            name="cvc"
                                            component="input"
                                            type="text"
                                            pattern="\d{3,4}"
                                            placeholder="CVC"
                                            format={formatCVC}
                                        />
                                        </div> */}
                                        {/* <div className="buttons">
                                        <button type="submit" disabled={submitting}>
                                            Submit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={form.reset}
                                            disabled={submitting || pristine}
                                        >
                                            Reset
                                        </button>
                                        </div>  */}
                                        