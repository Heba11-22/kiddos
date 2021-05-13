import React from 'react';
import FirstSecond from "./FirstSecond"
import Categories from "./Categories"

import "./NavBar.css";
import { NavLink } from 'react-router-dom';

function NavBar () {

    return (
        <nav className="navBar">
            <FirstSecond/>
            <Categories/>
        </nav>
    )
}

export default NavBar;