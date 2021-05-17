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
        <div className="category-page-div2">
            <div className="side-menu-div2">
                    <ul className="cats-ul2">
                        {mainCat_states.map( (mainCat_state, i) => (
                            <li key={i} className="cat-li2">
                            {/* {console.log(mainCat_state.Categories)} */}
                                <h4 className="cat-button2" value={i}>{mainCat_state.Main_CategoryName}</h4>
                                <ul className="sub-cat-ul2" >
                                    {(mainCat_state.Categories).map((cat, i) => (
                                        <li key={i} className="sub-cat-li2">
                                            <NavLink className="sub-cat-link2" to={`/maincategories/categories/${cat.id}/items`}>
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
            <div className="category-items-div2">
                <ul className="category-items-ul2">
                    {items2 && ((Object.values(items2)).map((categoryItem, i) => (
                        <div className="one-item-div2"  key={i}>
                            <NavLink to={`/items/${categoryItem.id}/`} className="category-items-nav2">
                                <img className="category-items-img2" src={categoryItem.photos.photo_url}/>
                                <li className="category-items-name2">{categoryItem.itemName}</li>
                                <div className="price2">
                                    <div className="item-price2">$50</div>
                                    <div>Sale  <span className="item-price-sale2">$24</span></div>
                                </div>
                            </NavLink>
                        </div>
                    )))} 
                </ul> 
            </div>
        </div>
    )
}

export default CategoryItems;