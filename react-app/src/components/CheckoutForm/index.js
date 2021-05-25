import React from 'react';
import { render } from 'react-dom';
import { Form, Field } from 'react-final-form';
import Cards from 'react-credit-cards'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
  } from './CardUtils'

import "./CheckoutForm.css"

function CheckoutForm () { 

    const handleSubmit=(e) => {
        alert("HHHHIIII");
    }
    const onSubmit=(e) => {
        alert("HHHHIIII");
    }

    return(
        <div className="pay-div">
        <div className="shipping-address">
            <form>
                <div> <label> First Name<input type="text"/></label></div>
                <div> <label> Last Name<input type="text"/></label></div>
                <div> <label> Address<input type="text"/></label></div>
                <div> <label> ZIP Code<input type="integer"/></label></div>
                <div> <label> State<input type="text"/></label></div>
                <div> <label> City<input type="text"/></label></div>
                <div> <label> E-mail<input type="email"/></label></div>
                <div> <label> Phone Number<input type="integer"/></label></div>
            </form>
        </div>
            <Form
                onSubmit={onSubmit}
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
                        /> */}
                        <div>
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
                        </div>
                        {/* <h2>Values</h2>
                        <pre>{JSON.stringify(values, 0, 2)}</pre> */}
                    </form>
                    )
                }}
        />
    </div>
    )
}

export default CheckoutForm;