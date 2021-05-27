import React from 'react';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./MainCat.css"

function MainCat(){
    const cats = useSelector(state => state.search.Categories) || {}
    let catsValue = (Object.values(cats)) || {}
    // const categoryItems = useSelector(state => state.categoryItems) || {} 
    // const items = categoryItems.items || {}
    // const items2 = ((Object.values(items))[0]) || {}
    const mainCat_states = Object.values(useSelector(state => state.mainCategories)) || {}
    // let test = catsValue.Categories
    console.log("1111>>>>>>>>>>>>>",cats)
    console.log("2222>>>>>>>>>>>>>",catsValue)
    console.log("33333>>>>>>>>>>>>>",mainCat_states)
    /* {if (cat = null) {<h2>Sorry No Results for {`${cat.Main_CategoryName}`}</h2>}} */
    // let item;
   
    let showPhoto =
    
        <ul className="category-items-ul3">
            { catsValue.map((cat,i) => (
                (Object.values(cat.Items)).map((c,i) => (

                             <div key={i} className="one-item-div3">
                                <NavLink to={`/items/${c.id}`} className="category-items-nav3">
                                    <img alt="p" src={c.photos.photo_url} className="category-items-img3"/>
                                    <div className="category-items-name3">{c.itemName}</div>
                                    <div className="price3">
                                        <div className="item-price3">$50</div>
                                        <div>Sale  <span className="item-price-sale3">$24</span></div>
                                    </div>
                                </NavLink>
                            </div> 
                    ))
            ))}
        </ul>
    
    return (
        <div className="category-page-div3">
            <div className="side-menu-div3">
                    <ul className="cats-ul3">
                        {mainCat_states.map( (mainCat_state, i) => (
                            <li key={i} className="cat-li3">
                            {/* {console.log(mainCat_state.Categories)} */}
                                <h4 className="cat-button3" value={i}>{mainCat_state.Main_CategoryName}</h4>
                                <ul className="sub-cat-ul3" >
                                    {(mainCat_state.Categories).map((cat, i) => (
                                        <li key={i} className="sub-cat-li3">
                                            <NavLink className="sub-cat-link3" to={`/maincategories/categories/${cat.id}/items`}>
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
            <div className="one-item-div3">
                {showPhoto}
            </div>
        </div>
    )
}

export default MainCat;