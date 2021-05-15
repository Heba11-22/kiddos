import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink} from "react-router-dom";
import "./LandingPage.css"


const LandingPage = () => {
    return (
        <div className="landing">
            <div className="first-imgs-div">
                <img className="first-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/paul-hanaoka-a104tlUezug-unsplash.jpg"/>
                <img className="second-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/tamanna-rumee-lpGm415q9JA-unsplash.jpg"/>
            </div>
        </div>
    )
}

export default LandingPage;