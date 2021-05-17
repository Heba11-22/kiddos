import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink} from "react-router-dom";
import { searchThunk } from '../../store/search';

const Shop = () => {
    const [search, setSearch] = useState("girl");
    const [searchh, setSearchh] = useState("boy");
    const dispatch = useDispatch();
    
    const girl = () => {
        dispatch(searchThunk(search))
    }

    const boy = () => {
        dispatch(searchThunk(searchh))
    }
  
    return (
        <div className="shop-div">
            <div className="girl">
                <img className="girl-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/caroline-hernandez-tJHU4mGSLz4-unsplash.jpg"/>
                <div onClick={girl} className="shop-girl-div"><NavLink className="shop-girl-nav" to={`/maincategories/${search}`}><h3 className="shop-girl-h">SHOP GIRL</h3></NavLink>
                </div>
            </div>
            <div className="boy">
                <img className="boy-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/edward-cisneros-r_Tnjj6TB30-unsplash.jpg"/>
                <div  onClick={boy} className="shop-boy-div"><NavLink className="shop-boy-nav" to={`/maincategories/${searchh}`}><h3 className="shop-boy-h">SHOP BOY</h3></NavLink>
                </div>
            </div>

        </div>
    )
}

export default Shop;