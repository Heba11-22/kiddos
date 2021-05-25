import React, { useEffect, useState } from 'react';

function FreeShipping() {
    return (
        <div className="free-shipping-div" style={{fontSize: "20px"}}>
            <span style={{color: "red"}}>Congrats! </span> 
            You get 
            <span style={{fontWeight: "bold"}}> Free Shipping!</span>
        </div>
    )
}

export default FreeShipping;