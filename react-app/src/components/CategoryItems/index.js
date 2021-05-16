import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from "react-router-dom";
import { useHistory, NavLink} from "react-router-dom";
import { allMainCategories } from '../../store/mainCategories'
import { getCategoryItems } from "../../store/items";
import "./CategoryItems.css";

function CategoryItems() {
    const dispatch = useDispatch();
    const categoryId = useParams().id
    const categoryItems = useSelector(state => state.categoryItems) || {} 
    const items = categoryItems.items || {}
    const items2 = ((Object.values(items))[0]) || {}
    const mainCat_states = Object.values(useSelector(state => state.mainCategories)) || {}
    const [targetbutton, setTargetbutton] = useState()
    // console.log((items2))

    useEffect(() =>{
        // console.log(e.target)
        dispatch(getCategoryItems(categoryId))
        dispatch(allMainCategories())
    }, [dispatch, categoryId])
    
    return (
        <div className="category-page-div">
            <div className="side-menu-div">
                    <ul className="cats-ul">
                        {mainCat_states.map( (mainCat_state, i) => (
                            <li key={i} className="cat-li">
                            {/* {console.log(mainCat_state.Categories)} */}
                                <h4 className="cat-button" value={i}>{mainCat_state.Main_CategoryName}</h4>
                                <ul className="sub-cat-ul" >
                                    {(mainCat_state.Categories).map((cat, i) => (
                                        <li key={i} className="sub-cat-li">
                                            <NavLink className="sub-cat-link" to={`/maincategories/categories/${cat.id}/items`}>
                                                {(Object.values(cat))[0]}
                                    {/* {console.log("SSSSSSS", cat.id)} */}
                                            </NavLink>
                                        </li>
                                        
                                        ))} 
                                </ul>
                            </li>
                        ))}
                    </ul>
            </div>
            <div className="category-items-div">
                <ul>
                    {items2 && ((Object.values(items2)).map((categoryItem, i) => (
                        <div className="one-item-div">
                            <NavLink to={`/items/${categoryItem.id}/`}>
                                <li key={i} className="category-items-name">{categoryItem.itemName}</li>
                                <img className="category-items-img" src={categoryItem.photos.photo_url}/>
                            </NavLink>
                        </div>
                    )))} 
                </ul> 
            </div>
        </div>
    )
}

export default CategoryItems;