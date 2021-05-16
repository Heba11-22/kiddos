import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink} from "react-router-dom";

const Shop = () => {
    return (
        <div className="shop-div">
            <div className="girl">
                <img className="girl-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/caroline-hernandez-tJHU4mGSLz4-unsplash.jpg"/>
                <div className="shop-girl-div"><NavLink className="shop-girl-nav" to="/"><h3 className="shop-girl-h">SHOP GIRL</h3></NavLink>
                </div>
            </div>
            <div className="boy">
                <img className="boy-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"/>
                <div className="shop-boy-div"><NavLink className="shop-boy-nav" to="/"><h3 className="shop-boy-h">SHOP BOY</h3></NavLink>
                </div>
            </div>

        </div>
    )
}

export default Shop;