import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from "react-router-dom";
import { useHistory, NavLink} from "react-router-dom";
import { getCategoryItems } from "../../store/items";

function CategoryItems() {
    const dispatch = useDispatch();
    const categoryId = useParams().id
    const categoryItems = useSelector(state => state.categoryItems) || {} 
    const items = categoryItems.items || {}
    const items2 = ((Object.values(items))[0]) || {}
    // console.log((items2))

    useEffect(() =>{
        // console.log(e.target)
        dispatch(getCategoryItems(categoryId))
    }, [dispatch, categoryId])
    
    return (
        <div className="category-items-div">
           <ul>
                {items2 && ((Object.values(items2)).map((categoryItem, i) => (
                    <div className="one-item-div">
                        <NavLink to={`/items/${categoryItem.id}`}>
                            <li key={i} className="category-items-name">{categoryItem.itemName}</li>
                            <img className="category-items-img" src={categoryItem.photos.photo_url}/>
                        </NavLink>
                    </div>
                )))} 
            </ul> 
        </div>
    )
}

export default CategoryItems;