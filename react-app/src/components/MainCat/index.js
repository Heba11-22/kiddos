import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function MainCat(){
    const cats = useSelector(state => state.search.Categories) || {}
    let catsValue = (Object.values(cats))
    // let test = catsValue.Categories
    console.log("1111>>>>>>>>>>>>>",cats)
    console.log("2222>>>>>>>>>>>>>",catsValue)
    // console.log("33333>>>>>>>>>>>>>",test)
    /* {if (cat = null) {<h2>Sorry No Results for {`${cat.Main_CategoryName}`}</h2>}} */
    // let item;
    let showPhoto = 
        <ul>
            <li>
                {catsValue.map((cat,i) => (
                    (Object.values(cat.Categories))
                        .map((c,i) => (
                            ((Object.values(c))[1])
                            .map( (c1,i) => (
                                <div key={i} className="item-info">
                                <NavLink to={`/items/${c1.id}`}>
                                    <div><img alt="p" src={c1.photos.photo_url}/></div>
                                    <div className="item-name">{c1.itemName}</div>
                                </NavLink>
                                </div>
                            ))
                        ))
                    
                    
                ))}
            </li>
    </ul>
    
    return (
        <div className="maincat-div">
            
            {showPhoto}
            
        </div>
    )
}

export default MainCat;