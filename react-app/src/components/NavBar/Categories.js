import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink} from "react-router-dom";
import { allMainCategories } from '../../store/mainCategories'
import { getCategoryThunk } from '../../store/categories'
import SearchForm from "./SearchForm"

function Categories () {
    const dispatch = useDispatch();
    const mainCat_states = Object.values(useSelector(state => state.mainCategories)) || {}
    // console.log("SSSSSSS", mainCat_states.Categories)

    const [showMenu, setShowMenu] = useState(false);  // setting the menu showing to false "closed"
    const [targetCat, setTargetCat] = useState()
    const [targetbutton, setTargetbutton] = useState()


    useEffect( (e) => {
        dispatch(allMainCategories())
        // console.log(e.target)
        // dispatch(getCategoryThunk(targetCat))
        }, [dispatch])

        let buttonValue
        let catObject
        // let catObjectArr
        // let catObjectArr2
        let catObjectArr3
    // function to open the menu
    
    const openMenu = async (e) => {
        if (showMenu || e.target.innerHTML == targetCat ) return;
        setShowMenu(true);
        buttonValue = e.target.value
        // setTargetButton(buttonValue)
        setTargetCat(buttonValue)
        catObject = (mainCat_states[buttonValue])
        // catObjectArr = (Object.values(catObject))[0] 
        // catObjectArr2 = (Object.values(catObject))[0]
        catObjectArr3 = (Object.values(catObject))[0] || {}
        setTargetbutton(catObjectArr3)
        // catObjectArr3 = (((Object.values(catObject))[0])[0]).CategoryName
        // console.log("fdfdfdfd",targetbutton)
        // console.log("fdfdfdfd",(Object.values(catObjectArr)).CategoryName)
    }


 // close the menu
 useEffect(() => {
    //  console.log("????")
    if (!showMenu) return;
    const closeMenu = (e) => {
        // if (["0", "1", "2", "3"].includes(e.target.value) && e.target.innerHTML !== targetCat) return;
        setShowMenu(false);
        // console.log("????")
    };

    document.addEventListener('click', closeMenu);
    return (() => document.removeEventListener('click', closeMenu))
}, [showMenu]);


return (
    <>
    <div className="third-nav-div">
        <div className="main-cat-ul">
            <ul className="main-cat-ul">
                {mainCat_states.map( (mainCat_state, i) => (
                    <li key={i} className="mCat_li">
                        <button value={i} onClick={openMenu}>{mainCat_state.Main_CategoryName}</button>
                        {/* {console.log("SSSSSSS", mainCat_state)} */}
                        {/* {console.log("SSSSSSS", Object.values(mainCat_state))} */}
                    </li>
                ))}
            </ul>
        </div>
        <div className="search-saved-div">
            <SearchForm/>
        </div>
    </div>
        {showMenu && (
            <div>
                <ul className="drop-down-ul">
                    {targetbutton && ( targetbutton.map((cat, i) => (
                       
                        <li key={i} className="drop-down-li"> 
                            <NavLink to={`/maincategories/categories/${cat.id}/items`}>
                                {(Object.values(cat))[0]}
                                    {/* {console.log("SSSSSSS", cat.id)} */}
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