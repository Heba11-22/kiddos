import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-div">
            <div className="my-name">
                <h3>
                    <span class="material-icons">&#xe1b0;</span>
                    By Heba Elkasaby
                </h3>
            </div>
            <div className="languages">
                <span class="material-icons">&#xe894;</span>
                <span><h3>Used Languages:</h3> </span>
                Python, Flask, JavaScript, React, JSX, CSS 
            </div>
            <div className="github">
            <button className="github-icon"></button>

            </div>
        </div>
    )
}

export default Footer;