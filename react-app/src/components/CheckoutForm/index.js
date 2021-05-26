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
    // const [cardNum, setCardNum] = useState();
    // const [zipCode, setZipCode] = useState('');
    // const [zipCode, setZipCode] = useState('');
    // const [zipCode, setZipCode] = useState('');
    // const [validationErrors, setValidationErrors] = useState([]);
    const options = [
        {value: "AL", label:"AL"},
        {value: "AK", label:"AK"},
        {value: "AZ", label:"AZ"},
        {value: "AR", label:"AR"},
        {value: "CA", label:"CA"}
        // , , , , , "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", 'IN'
        // ,"IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
        // "NJ", "NM", "NY", "NC"
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

    console.log("outside submit")
    // if (errors.length > 0) return errors;
    // else{
        console.log("inside submit")
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
    errors =[];
    alert("HHHHIIII");
    }
    // const onSubmit=(e) => {
    //     alert("HHHHIIII");
    // }

    return(
        <div className="pay-div">
            {validationErrors.length > 0 && (
                <div>
                    The following errors were found:
                    <ul>
                        {validationErrors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                </div>
            )}
        <div className="shipping-address">
            <form onSubmit={onSubmit}>
                <div> 
                    <label> First Name
                        <input 
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={(e) => { setFirstName(e.target.value)}} 
                        required/>
                    </label>
                </div>

                <div> 
                    <label> Last Name
                        <input 
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => { setLastName(e.target.value)}} 
                        required/>
                    </label>
                </div>

                <div> 
                    <label htmlFor="email"> E-mail
                        <input 
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value)}}
                        required/>
                    </label>
                </div>

                <div> 
                    <label> Phone Number
                        <input 
                        type="integer"
                        name="phone"
                        value={phone}
                        onChange={(e) => { setPhone(e.target.value)}}    
                        />
                    </label>
                </div>

                <div> 
                    <label> Address
                        <input 
                        type="text" 
                        name="address"
                        value={address}
                        onChange={(e) => { setAddress(e.target.value)}}
                        required/>
                    </label>
                </div>

                <div> 
                    <label> City
                        <input 
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => { setCity(e.target.value)}} 
                        required/>
                    </label>
                </div>

                <div> 
                    <label> State
                    <Select
                        options={options} 
                        className="select"
                        placeholder={"Choose a State"}
                        required 
                    />
                    
                        {/* <input 
                        type="text" 
                        name="state"
                        value={state}
                        onChange={(e) => { setState(e.target.value)}}
                        required/> */}
                    </label>
                </div>

                <div> 
                    <label> ZIP Code
                        <input 
                        type="integer"
                        name="zipCode"
                        value={zipCode}
                        onChange={(e) => { setZipCode(e.target.value)}} 
                        required/>
                    </label>
                </div>

                <div className="buttons">
                <button type="submit" >
                    Submit
                </button>

                <button
                    type="button"
                    // onClick={reset}
                    // disabled={submitting || pristine}
                >
                    Reset
                </button>
                </div>
            </form>
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