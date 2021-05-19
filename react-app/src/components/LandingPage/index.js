import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink} from "react-router-dom";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {getLatestItemsThunk} from "../../store/items"
import Shop from "./Shop";
// import {getLatestItemsThunk} from "../../store/items"
import "./LandingPage.css";


const LandingPage = () => {
    const dispatch = useDispatch()
    const latestItemsStore = useSelector(state => state.item.latestItems) || {}
    const latestItems = (latestItemsStore.items) || {}
    // console.log(">>>>>>", latestItems[0])
    useEffect( () => {
        dispatch(getLatestItemsThunk())
    }, [dispatch])

    return (
        <div className="landing">
            <div className="first-imgs-div">
                <img className="first-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/paul-hanaoka-a104tlUezug-unsplash.jpg"/>
                <img className="second-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/tamanna-rumee-lpGm415q9JA-unsplash.jpg"/>
            </div>
            <div className="latest-sen">
                <h1>NEW ARRIVALS</h1>
            </div>
            
            <div className="latest-sen2">
                <h3>Shop The Latest Trends & Styles</h3>
            </div>
            {/* <div className="latest-items-div">
                <ul className="latest-items-ul"> */}
                <div >
                    <ScrollMenu
                        className="main-latest-div"
                        // scrollToSelected={false}
                        arrowLeft={<div style={{ fontSize: "50px", color: "rgb(214, 208, 208)" }}>{" < "}</div>}
                        arrowRight={<div style={{ fontSize: "70px", color: "rgb(214, 208, 208)" }}>{" > "}</div>}
                        data={(Object.values(latestItems)).map((item, i) => (
                            <div 
                                key={i} 
                                className="latest-items-div"
                                >
                                    <NavLink to={`/items/${item.id}`} className="item-name-nav">
                                        <img className="latest-items-img" src={item.photos.photo_url}/>
                                        <h3 className="item-name">{item.itemName}</h3>
                                    </NavLink>
                            </div>
                        ))}
                        />
                </div>
                <div className="shop-imgs">
                    <Shop/>
                </div>
        </div>
    )
}

export default LandingPage;