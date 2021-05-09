import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allMainCategories } from '../../store/mainCategories'
import SearchForm from "./SearchForm"

function Categories () {
    // debugger
    // const dispatch = useDispatch();
    // const cat = dispatch(allMainCategories())
    // console.log("+++++",cat)

    // useEffect( () => {
    // }, [dispatch])
    const state_mainCat = Object.values(useSelector(state => state.mainCategories))
    console.log(">>>>>>>>>>>>>>>>>", state_mainCat)
    const mCategoriesArray = ["GIRL", "TODDLER GIRL", "BOY", "TODDLER BOY"]

    return (
        <div className="third-nav-div">
            <ul className="categories-ul">{mCategoriesArray.map((cat, i) => {
                return (
                    <li key={i} className="main-cat-li" value={`${cat.Main_CategoryName}`}>
                        <button className="main-cat-button">{mCategoriesArray[i]}</button>
                    </li>
                )
            })}
            </ul>
            <SearchForm/>
        </div>
    )
}

export default Categories;