import React from 'react';
import FirstSecond from "./FirstSecond"
import Categories from "./Categories"
// import Footer from "../Footer"

import "./NavBar.css";
// import { NavLink } from 'react-router-dom';

function NavBar () {

    return (
        <div>
            <nav className="navBar">
                <FirstSecond/>
                <Categories/>
            </nav>
            {/* <Footer/> */}   .
        </div>
    )
}

export default NavBar;