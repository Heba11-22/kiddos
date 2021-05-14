import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allMainCategories } from '../../store/mainCategories'
import { getCategoryThunk } from '../../store/categories'
import SearchForm from "./SearchForm"

function Categories () {
    const dispatch = useDispatch();
    const [targetButton, setTargetButton] = useState()
    const [targetCat, setTargetCat] = useState()
    const [showMenu, setShowMenu] = useState(false);  // setting the menu showing to false "closed"

    // const state_mainCat = Object.values(useSelector(state => state.mainCategories))
    // console.log(">>>>>>>>>>>>>>>>>", state_mainCat)
    const categories = [
        {"GIRL": ["DRESSES", "TOPS", "PANTS"]},
        {"TODDLER GIRL": ["DRESSES", "TOPS", "PANTS"]}, 
        {"BOY": ["SHIRTS", "JACKETS", "PANTS"]}, 
        {"TODDLER BOY": ["SHIRTS", "JACKETS", "PANTS"]}
    ]

    
    useEffect( () => {
        dispatch(allMainCategories())
        dispatch(getCategoryThunk(targetCat))
        }, [dispatch])

    const values = (Object.values(categories))[targetButton] || {}
    const values2 = (Object.values(values))
    
    const mCatArry = []
    
    categories.map(category => {
        const mCategoriesArray = Object.keys(category)
        mCatArry.push(mCategoriesArray)
        // {console.log("1111111",mCategoriesArray)}
    })
    // categories.map(category => {
    //     const mCategoriesArray = Object.values(category)
    //     {console.log("fffffff1111111",mCategoriesArray)}
    // })

    // const catArry = []
    // categories.map((category,i) => {
    //     const categoriesArray = Object.values(category)
    //     catArry.push(categoriesArray) 
    // })
    
    const onClick = async (e) => {
        console.log("FOR LIS",e.target.value)
        setTargetCat(e.target.value)
    }

        // function to open the menu
        const openMenu = async(e) => {
            if (showMenu) return;
            setShowMenu(true);
            setTargetButton(e.target.value)
            // console.log("fdfdfdfd",e.target.value)
        }

        // close the menu
        useEffect(() => {
            if (!showMenu) return;
            const closeMenu = () => {
                setShowMenu(false);
            };

            document.addEventListener('click', closeMenu);
            return (() => document.removeEventListener('click', closeMenu))
        }, [showMenu]);

   
    return (

        <div className="third-nav-div">
            <ul className="categories-ul">{mCatArry.map((cat, i) => {
                return (
                    <li key={i} className="main-cat-li" value={`${cat.Main_CategoryName}`}>
                        <button className="main-cat-button" value={i} onClick={openMenu}>{mCatArry[i]}</button>
                    </li>
                )
            })}
                    {showMenu && (
                        <div className="cat-dropDown-div">
                            <ul className="cat-dropDown-ul">
                                {values2.map((arr1,i) => (
                                    <div key={i}>
                                        <button onClick={onClick}><li  className="cat-dropDown-li">{arr1[i]}</li></button>
                                        <li className="cat-dropDown-li">{arr1[i+1]}</li>
                                        <li  className="cat-dropDown-li">{arr1[i+2]}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
            </ul>
            <SearchForm/>
        </div>
    )
}

export default Categories;