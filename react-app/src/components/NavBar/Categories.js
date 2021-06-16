import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allMainCategories } from '../../store/mainCategories';
import SearchForm from "./SearchForm";

function Categories () {
    const dispatch = useDispatch();
    const mainCat_states = Object.values(useSelector(state => state.mainCategories)) || {};
    const [showMenu, setShowMenu] = useState(false);  // setting the menu showing to false "closed"
    const [targetCat, setTargetCat] = useState();
    const [margin, setMargin] = useState(13);
    const [targetbutton, setTargetbutton] = useState();
    
    let buttonValue;
    let catObject;
    let catObjectArr3;

    useEffect( () => {
        dispatch(allMainCategories());
        }, [dispatch]);

    // function to open the menu
    const openMenu =  (e) => {
        buttonValue = e.target.value || 0;
        catObject = (mainCat_states[buttonValue]);
        catObjectArr3 = (Object.values(catObject))[0] || 0;
        setShowMenu(true);
        setTargetCat(buttonValue);
        setTargetbutton(catObjectArr3);
        setMargin(buttonValue + 7);
    };

    //  close the menu
    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = (e) => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);
        return (() => document.removeEventListener('click', closeMenu))
    }, [showMenu]);

return (
    <>
    <nav className="third-nav-div">
        <div className="main-cat-div">
        
            <ul className="main-cat-ul">
                {mainCat_states.map( (mainCat_state, i) => (
                    <li key={i} className="mCat_li">
                        <button className="mCat_button" value={i} onClick={openMenu}>{mainCat_state.Main_CategoryName}</button>
                    </li>
                ))}
            </ul>
        </div>
        <div className="search-saved-div">
            <SearchForm/>
        </div>
    </nav>
        {showMenu && ( 
            <div className="drop-down-div" style={{ marginLeft: margin + '%', marginTop: '-1%' }}>
                        {/* // onMouseOver={openMenu} */}
                        {/* // {console.log("CCCCCCCCCCc")}}} */}
                        {/* // onMouseOut={() => setShowMenu(false)}> */}
                <ul className="drop-down-ul" >
                    {targetbutton && ( targetbutton.map((cat, i) => (
                        <li key={i} className="drop-down-li"> 
                            <NavLink className="drop-down-link" to={`/maincategories/categories/${cat.id}/items`}>
                                {(Object.values(cat))[0]}
                            </NavLink>
                        </li>
                        )))} 
                </ul>
            </div>
         )}
    </>
)}























    // const [targetButton, setTargetButton] = useState()
    // const [targetCat, setTargetCat] = useState()
    // const [showMenu, setShowMenu] = useState(false);  // setting the menu showing to false "closed"

    // const state_mainCat = Object.values(useSelector(state => state.mainCategories))
    // console.log(">>>>>>>>>>>>>>>>>", state_mainCat)
    // const categories = [
    //     {"GIRL": ["DRESSES", "TOPS", "PANTS"]},
    //     {"TODDLER GIRL": ["DRESSES", "TOPS", "PANTS"]}, 
    //     {"BOY": ["SHIRTS", "JACKETS", "PANTS"]}, 
    //     {"TODDLER BOY": ["SHIRTS", "JACKETS", "PANTS"]}
    // ]

    
    // useEffect( () => {
    //     dispatch(allMainCategories())
    //     dispatch(getCategoryThunk(targetCat))
    //     }, [dispatch])

    // const values = (Object.values(categories))[targetButton] || {}
    // const values2 = (Object.values(values))
    
    // const mCatArry = []
    
    // categories.map(category => {
    //     const mCategoriesArray = Object.keys(category)
    //     mCatArry.push(mCategoriesArray)
    //     // {console.log("1111111",mCategoriesArray)}
    // })
    // categories.map(category => {
    //     const mCategoriesArray = Object.values(category)
    //     {console.log("fffffff1111111",mCategoriesArray)}
    // })

    // const catArry = []
    // categories.map((category,i) => {
    //     const categoriesArray = Object.values(category)
    //     catArry.push(categoriesArray) 
    // })
    
    // const onClick = async (e) => {       <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    //     console.log("FOR LIS",e.target.value)
    //     setTargetCat(e.target.value)
    // }

        // function to open the menu
        // const openMenu = async(e) => {
        //     if (showMenu) return;
        //     setShowMenu(true);
        //     setTargetButton(e.target.value)
        //     // console.log("fdfdfdfd",e.target.value)
        // }

    //     // close the menu
    //     useEffect(() => {
    //         if (!showMenu) return;
    //         const closeMenu = () => {
    //             setShowMenu(false);
    //         };

    //         document.addEventListener('click', closeMenu);
    //         return (() => document.removeEventListener('click', closeMenu))
    //     }, [showMenu]);

   
    // return (

//         <div className="third-nav-div">
//             <ul className="categories-ul">{mCatArry.map((cat, i) => {
//                 return (
//                     <li key={i} className="main-cat-li" value={`${cat.Main_CategoryName}`}>
//                         <button className="main-cat-button" value={i} onClick={openMenu}>{mCatArry[i]}</button>
//                     </li>
//                 )
//             })}
//                     {showMenu && (
//                         <div className="cat-dropDown-div">
//                             <ul className="cat-dropDown-ul">
//                                 {values2.map((arr1,i) => (
//                                     <div key={i}>
//                                         <button onClick={onClick}><li  className="cat-dropDown-li">{arr1[i]}</li></button>
//                                         <li className="cat-dropDown-li">{arr1[i+1]}</li>
//                                         <li  className="cat-dropDown-li">{arr1[i+2]}</li>
//                                     </div>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//             </ul>
//             <SearchForm/>
//         </div>
//     )
// }

export default Categories;