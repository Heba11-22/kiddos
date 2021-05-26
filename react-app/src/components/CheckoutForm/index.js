import React, {useState} from 'react';
import { render } from 'react-dom';
import { Form, Field } from 'react-final-form';
import validator from 'validator'
import Select from 'react-select';
import Cards from 'react-credit-cards'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
  } from './CardUtils'

import "./CheckoutForm.css"

function CheckoutForm () { 
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [pay, setPay] = useState(1);
    const [cardNum, setCardNum] = useState('');
    const [nameOnCard, setNameOnCard] = useState('');
    // const [zipCode, setZipCode] = useState('');
    // const [zipCode, setZipCode] = useState('');
    // const [zipCode, setZipCode] = useState('');
    // const [validationErrors, setValidationErrors] = useState([]);
    const options = [
        {value: "AL", label:"AL"},
        {value: "AK", label:"AK"},
        {value: "AZ", label:"AZ"},
        {value: "AR", label:"AR"},
        {value: "CA", label:"CA"},
        {value: "IL", label:"IL"},
        // , , , , , "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", 'IN'
        // ,"IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
        // "NJ", "NM", "NY", "NC"
    ]

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

    let validationErrors = [];
    const validate = () => {
    
        if (!firstName) validationErrors.push('Please provide a First Name');
        if (!lastName) validationErrors.push('Please provide a Last Name');
        if (!address) validationErrors.push('Please provide an Address');
        if (!zipCode) validationErrors.push('Please provide a zip');
        if (!state) validationErrors.push('Please choose a State');
        if (!city) validationErrors.push('Please provide a City');    
        // if (!cardNum) validationErrors.push('Please provide a City');    
        if (!email || !validator.isEmail(email)) validationErrors.push('Please provide a valid Email');
    
        return validationErrors;
      }

    const onSubmit=(e) => {
        e.preventDefault();
    let errors = validate();

    // console.log("outside submit")
    // if (errors.length > 0) return errors;
    // else{
        // console.log("inside submit")
    // setFirstName('');
    // setLastName('');
    // setEmail('');
    // setPhone('');
    // setAddress('');
    // setCity('');
    // setState('');
    // setZipCode('');
    setCardNum('');
    setNameOnCard('');
    errors =[];
    setPay(0)
    // alert("HHHHIIII");
    }
    // const onSubmit=(e) => {
    //     alert("HHHHIIII");
    // }
const finalSubmit = () => {
    alert("HHHHIIII");
}
    return(
        <div className="whole">
            <div className="pay-div">
                {validationErrors.length > 0 && (
                <div className="errors-div">
                    The following errors were found:
                    <ul>
                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
                )}
                {pay && 
                <div className="shipping-address">
                    <form onSubmit={onSubmit} className="shipping-address">
                        <div className="fname f"> 
                            <label> First Name </label>
                            <input
                            className="input-form fi" 
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value)}} 
                            required/>
                        </div>

                        <div className="lname f"> 
                            <label> Last Name </label>
                            <input
                            className="input-form fi"  
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => { setLastName(e.target.value)}} 
                            required/>
                        </div>

                        <div className="email-checkout f"> 
                            <label > E-mail </label>
                            <input
                            className="input-form fi"  
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value)}}
                            required/>
                        </div>

                        <div className="phone f"> 
                            <label> Phone Number </label>
                            <input
                            className="input-form fi"  
                            type="integer"
                            name="phone"
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value)}}    
                            />
                        </div>

                        <div className="address f"> 
                            <label> Address </label>
                            <input
                            className="input-form fi"  
                            type="text" 
                            name="address"
                            value={address}
                            onChange={(e) => { setAddress(e.target.value)}}
                            required/>
                        </div>

                        <div className="city f"> 
                            <label className="city-state"> City </label>
                            <input
                            className="input-form fi"  
                            type="text"
                            name="city"
                            value={city}
                            onChange={(e) => { setCity(e.target.value)}} 
                            required/>
                        </div>

                        <div className="state f"> 
                            <label> State </label>
                            <Select
                                options={options} 
                                className="select-state fi"
                                placeholder={"Choose a State"}
                                value={state}
                                onChange={(e) => { setState(e.value)}}
                                required 
                            />
                        </div>

                        <div className="zcode f"> 
                            <label> ZIP Code </label>
                            <input
                            className="input-form fi"  
                            type="integer"
                            name="zipCode"
                            value={zipCode}
                            onChange={(e) => { setZipCode(e.target.value)}} 
                            required/>
                        </div>

                        <div className="button ">
                            <button type="submit" className="button1">
                                <h4 className="button1-h4 h4">Continue</h4>
                            </button>

                            <button
                                className="button2"
                                type="button"
                                // onClick={reset}
                                // disabled={submitting || pristine}
                            >
                                <h4 className="button2-h4 h4">Reset</h4>
                            </button>
                        </div>
                    </form>
                </div>
            }
            {!pay && 
                <div className="final-pay-form">
                        <div className="confirm">
                            <h2>Shipping Address</h2>
                            <button className="edit-button" onClick={() => {setPay(1)}}>Edit</button>
                        </div>
                        <div className="shipping-info">
                            <div className="div-info">{firstName} {lastName}</div>
                            <div className="div-info">{address}</div>
                            <div className="div-info">{city}, {state} {zipCode}</div>
                        </div>
                    <div className="payment"><h2 className="payment-h2">Payment</h2></div>
                    <form onSubmit={onSubmit} className="card-form">

                        <div className="card-num c"> 
                            <label> Name on the Card </label>
                            <input
                            className="card-num input-card c"  
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
                                type="submit"
                                // onClick={reset}
                                // disabled={submitting || pristine}
                            >
                                <h4 className="button3-h4 h4">Place the order</h4>
                            </button>
                    </form>
                </div>
            }
        </div>
        <div className="discount">
            discount
        </div>
    </div>
    )}
                

export default CheckoutForm;


/*{/* // onSubmit={handleSubmit} */
                {/* // render={({ */}
                //     handleSubmit,
                //     form,
                //     submitting,
                //     pristine,
                //     values,
                //     active
                {/* // }) => { */}
        {/* // return ()} */}
                    
                {/* // <div> <label htmlFor='name'> First Name: */}
                     {/* <input  */}
                //         id='firstName'
                //         type='text'
                {/* //         onChange={(e) => setFirstName(e.target.value)} */}
                {/* //         value={firstName} */}
                {/* //     /> */}
                    {/* /* {console.log("KKKKKK", firstName)}  */ 
                    {/* // </label>/ */}
                {/* // </div> */}
                {/* /* <div> <label> Last Name<input type="text"/></label></div> */}
                // <div> <label htmlFor="email"> E-mail<input type="email"/></label></div>
                // <div> <label> Phone Number<input type="integer"/></label></div>
                // <div> <label> Address<input type="text"/></label></div>
                // <div> <label> City<input type="text"/></label></div>
                // <div> <label> State<input type="text"/></label></div>
                // <div> <label> ZIP Code<input type="integer"/></label></div> */
                // <div name="number"
                //             component="input"
                //             type="text"
                //             pattern="[\d| ]{16,22}"
                //             placeholder="Card Number"
                //             format={formatCreditCardNumber}> <label> card<input pattern={"[\d| ]{16,22}"} type="text"/></label></div>
                /* <Form onSubmit={handleSubmit}>
                <Field
                            name="number"
                            component="input"
                            type="text"
                            pattern="[\d| ]{16,22}"
                            placeholder="Card Number"
                            format={formatCreditCardNumber}
                        />
                        /* </div> */
                        /* </Form> */
                /* <div> <label> ZIP Code<input type="integer"/></label></div> */
                /* <div> <label> ZIP Code<input type="integer"/></label></div> */
                /* <div> <label> ZIP Code<input type="integer"/></label></div> */
                /* <div>
                    <label htmlFor='email'>Email:</label>
                    <input id='email' type='text' />
                </div> */
                // <button type="submit" >
                //             Submit
                //         </button>
                //         <button
                //             type="button"
                //             onClick={form.reset}
                //             // disabled={submitting || pristine}
                //         >
                //             Reset
                //         </button>
                        

        // )}}/>
            /* <Form
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
                    <form onSubmit={handleSubmit}> */
                        /* <Cards
                        number={values.number || ''}
                        name={values.name || ''}
                        expiry={values.expiry || ''}
                        cvc={values.cvc || ''}
                        focused={active}
                        /> */
                        /* <div>
                        <Field
                            name="number"
                            component="input"
                            type="text"
                            pattern="[\d| ]{16,22}"
                            placeholder="Card Number"
                            format={formatCreditCardNumber}
                        />
                        </div>
                        <div>
                        <Field
                            name="name"
                            component="input"
                            type="text"
                            placeholder="Name"
                        />
                        </div>
                        <div>
                        <Field
                            name="expiry"
                            component="input"
                            type="text"
                            pattern="\d\d/\d\d"
                            placeholder="Valid Thru"
                            format={formatExpirationDate}
                        />
                        <Field
                            name="cvc"
                            component="input"
                            type="text"
                            pattern="\d{3,4}"
                            placeholder="CVC"
                            format={formatCVC}
                        />
                        </div>
                        <div className="buttons">
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
                        </div> */
                        /* <h2>Values</h2>
                        <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                    /* </form>
                    )
                }}
        /> */
        // </div>
        // </div>
    // </div>
    // )
// } */