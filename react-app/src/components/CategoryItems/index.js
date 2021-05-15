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
    console.log(categoryItems.items)

    useEffect(() =>{
        // console.log(e.target)
        dispatch(getCategoryItems(categoryId))
    }, [dispatch])
    return (
        <>
            {/* <ul>
                {categoryItems.map((categoryItem, i) => (
                    <li key={i}>{categoryItem}</li>
                ))}
            </ul> */}
        <div>{categoryId}</div>
        {/* <div>{categoryItems}</div> */}
        </>
    )
}

export default CategoryItems;