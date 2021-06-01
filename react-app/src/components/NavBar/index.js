import React from 'react';
import FirstSecond from "./FirstSecond"
import Categories from "./Categories"
import "./NavBar.css";

function NavBar () {

    return (
        <div>
            <nav className="navBar">
                <FirstSecond/>
                <Categories/>
            </nav>
        </div>
    )
}

export default NavBar;