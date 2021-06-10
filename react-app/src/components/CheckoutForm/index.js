import React, {useState} from 'react';
import validator from 'validator'
import Select from 'react-select';
import Continue from './Continue'
import Pay from './Pay'
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
    const options = [
        {value: "AL", label:"AL"},
        {value: "AK", label:"AK"},
        {value: "AZ", label:"AZ"},
        {value: "AR", label:"AR"},
        {value: "CA", label:"CA"},
        {value: "WI", label:"WI"},
    ]

    let validationErrors = [];
    const validate = () => {
    
        if (!firstName) validationErrors.push('Please provide a First Name');
        if (!lastName) validationErrors.push('Please provide a Last Name');
        if (!address) validationErrors.push('Please provide an Address');
        if (!zipCode) validationErrors.push('Please provide a zip');
        if (!state) validationErrors.push('Please choose a State');
        if (!city) validationErrors.push('Please provide a City');    
        if (!email || !validator.isEmail(email)) validationErrors.push('Please provide a valid Email');
    
        return validationErrors;
      }

const reset = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setCity('');
    setState('');
    setZipCode('');
}

    const onSubmit=(e) => {
        e.preventDefault();
    let errors = validate(); 
    errors =[];
    setPay(0)
    }
   
let props = {firstName, lastName, address, city, state, zipCode, setPay}
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
                            onChange={(e) => { setFirstName(e.target.value) }} 
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
                                placeholder={state}
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

                        <div className="button">
                            <button type="submit" className="button1">
                                <h4 className="button1-h4 h4">Continue</h4>
                            </button>

                            <button
                                className="button2"
                                type="button"
                                onClick={reset}
                            >
                                <h4 className="button2-h4 h4">Reset</h4>
                            </button>
                        </div>
                    </form>
                </div>
            }

            {!pay && 
            <Continue props={props}/>   
            }

        </div>
        <div className="discount">
            <Pay />
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