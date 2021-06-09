import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-div">
            <div className="left">
                <div className="my-name">
                    <h3>
                        <span className="material-icons">&#xe1b0;</span>
                        By: Heba Elkasaby
                    </h3>
                </div>
                <div className="languages">
                    <span className="material-icons">&#xe894;</span>
                    <h3>Used Languages: </h3>
                    <h5> Python, Flask, JavaScript, React, JSX, CSS </h5>
                </div>
                <div className="my-name">
                    <h4 className="cpyright">
                        <span className="material-icons">&#xe90c;</span>
                        2021 Kiddos
                    </h4>
                    {/* <div className="material-icons">&#xe90c;</div>
                    <h5>2021 Kiddos </h5> */}
                </div>
            </div>
            <div className="icons">
                <div className="github">
                <a href="https://github.com/Heba11-22" className="github-icon-link">
                    
                    <img 
                        className="github-icon" 
                        src="https://hebacapstone.s3.us-east-2.amazonaws.com/GitHub-logo-500x281.png"
                        style={{height: "40px", width: "40px"}}
                        />
                </a>
                </div>
                <div className="linkedin">
                <a href="https://www.linkedin.com/in/heba-e-3091261b5/" className="linkedin-icon-link">
                    <img 
                        className="linkedin-icon" 
                        src="https://hebacapstone.s3.us-east-2.amazonaws.com/174857.png"
                        style={{height: "40px", width: "40px"}}
                        />
                </a>
                </div>
                <div className="angellist">
                <a href="https://angel.co/u/heba-elkasaby" className="angellist-icon-link">
                    <img 
                        className="angellist-icon" 
                        src="https://hebacapstone.s3.us-east-2.amazonaws.com/20_Angellist_logo_logos-512.webp"
                        style={{height: "40px", width: "40px"}}
                        />
                </a>
                </div>

            </div>
        </div>
    )
}

export default Footer;