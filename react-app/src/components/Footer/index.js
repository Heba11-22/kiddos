import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer-div">
            <div className="may name">
                <h3>By Heba Elkasaby</h3>
            </div>
        </div>
    )
}

export default Footer;