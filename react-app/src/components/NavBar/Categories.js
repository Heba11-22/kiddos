import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allMainCategories } from '../../store/mainCategories'

function Categories () {
    // debugger
    // const dispatch = useDispatch();
    // const cat = dispatch(allMainCategories())
    // console.log("+++++",cat)

    // useEffect( () => {
    // }, [dispatch])
    const state_mainCat = Object.values(useSelector(state => state.mainCategories))
    // debugger
    return (
        
        <div className="categories">{state_mainCat.length > 0 && state_mainCat.map(cat => {
            return (
                <div>
                    <div>{`${cat.Main_CategoryName}`}</div>
                    {/* <div>{cat.Categories.map(cat => {
                        return <div>{cat}</div>
                    })}</div> */}
                </div>
            )
        })}</div>
    )
}

export default Categories;