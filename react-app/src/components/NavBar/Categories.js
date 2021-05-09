import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { allMainCategories } from '../../store/mainCategories'
import SearchForm from "./SearchForm"

function Categories () {
  
    const state_mainCat = Object.values(useSelector(state => state.mainCategories))
    // console.log(">>>>>>>>>>>>>>>>>", state_mainCat)
    const categories = [
        {"GIRL": ["DRESSES", "TOPS", "PANTS"]},
        {"TODDLER GIRL": ["DRESSES", "TOPS", "PANTS"]}, 
        {"BOY": ["SHIRTS", "JACKETS", "PANTS"]}, 
        {"TODDLER BOY": ["SHIRTS", "JACKETS", "PANTS"]}
    ]
    const mCatArry = []
    categories.map(category => {
        const mCategoriesArray = Object.keys(category)
        mCatArry.push(mCategoriesArray)
    })
    const catArry = []
    categories.map(category => {
        const categoriesArray = Object.values(category)
        catArry.push(categoriesArray)
        // console.log("cccccccccccccc",categoriesArray)
    })

    // const mCategoriesArray = Object.keys(categories)
    console.log("MMMMMMMMMM",mCatArry)
    console.log("ccccccc",catArry)
    
    const [showMenu, setShowMenu] = useState(false);  // setting the menu showing to false "closed"

        // function to open the menu
        const openMenu = () => {
            if (showMenu) return;
            setShowMenu(true);
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
                        <button className="main-cat-button" onClick={openMenu}>{mCatArry[i]}</button>
                    </li>
                )
            })}
            </ul>
            <SearchForm/>
                        {showMenu && (
                            <div className="cat-dropdown-div">
                            <ul className="categories-ul">{mCatArry.map((cat, i) => {
                                {console.log(cat)}
                            return (
                                <li key={i} className="main-cat-li">
                                    {/* <button className="main-cat-button"> */}
                                        <ul className="sub-menu-ul">
                                            {catArry[i].map((submenu,j)=> (
                                                <li key={j} className="sub-menu-li">
                                                {console.log(submenu)}
                                                    <button className="sub-menu-button">
                                                        <ul>
                                                            {submenu.map(sub1 => (
                                                                <li>{sub1}
                                                                {console.log(sub1)}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    {/* </button> */}
                                </li>
                            )
            })}
            </ul>
                            
                            </div>
                        )}
            
        </div>
    )
}

export default Categories;