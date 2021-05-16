import React, { useState, useEffect, Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, NavLink} from "react-router-dom";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {getLatestItemsThunk} from "../../store/items"
import "./LandingPage.css"


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
                <div className="main-latest-div">
                    <ScrollMenu
                        arrowLeft={<div style={{ fontSize: "50px" }}>{" < "}</div>}
                        arrowRight={<div style={{ fontSize: "70px" }}>{" > "}</div>}
                        data={(Object.values(latestItems)).map((item, i) => (
                            <div key={i} className="latest-items-div">
                                {/* <li  className="latest-items-li"> */}
                                    <NavLink to={`/items/${item.id}`}>
                                        <img className="latest-items-img" src={item.photos.photo_url}/>
                                        <h3 className="item-name">{item.itemName}</h3>
                                    </NavLink>
                                
                            </div>
                        ))}
                        />
                </div>
        </div>
    )
}

export default LandingPage;