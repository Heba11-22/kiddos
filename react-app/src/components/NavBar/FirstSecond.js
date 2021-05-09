import React from 'react';
// import "./NavBar.css";
import { NavLink } from "react-router-dom";

function FirstSecond () {

    return (
        <div className="navBar1">
            <div className="sen1-div">
                <div className="sen1"><h2> FREE SHIPPING ON ORDERS OVER $50</h2></div>
            </div>
            <NavLink to="/" className="kiddos-link">
                <div className="kiddos">
                    <div className="k">
                        <h1>k </h1>
                    </div>
                    <div className="i">
                        <h1>i</h1>
                    </div>
                    <div className="dd">
                        <h1>dd</h1>
                    </div>
                    <div className="o">
                        <h1> o</h1>
                    </div>
                    <div className="s">
                        <h1>s</h1>
                    </div>
                </div>  
            </NavLink>
        
        </div>
    )
}

export default FirstSecond;