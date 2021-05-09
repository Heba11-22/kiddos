import React from 'react';
import FirstSecond from "./FirstSecond"
import Categories from "./Categories"

import "./NavBar.css";

function NavBar () {

    return (
        <div className="navBar">
            <FirstSecond/>
            <Categories/>
       
        </div>
    )
}

export default NavBar;