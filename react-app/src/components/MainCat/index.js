import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

function MainCat(){
    const cats = useSelector(state => state.search.Categories) || {}
    console.log(">>>>>>>>>>>>>",cats)
    // console.log("22222>>>>>>>>>>>>>",cats.Main_CategoryName)
    // let catsValues = (Object.values(cats)) || {}
    // console.log(">>>>>>>>>>>>>",catsValues)
    // cats.map((cat) => {
    //   return console.log("22222>>>>>>>>>>>>>",cat) 
    // })
    return (
        <div className="maincat-div">
        <ul className="search-result-ul">
            {/* {cats.map((cat, i) => {
                <li key={i} className="search-result-li">
                    {Object.values(cat)}
                </li>

            })} */}
        </ul>
        </div>
    )
}

export default MainCat;