import React from 'react';
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import img from "../../marten-newhall-uAFjFsMS3YY-unsplash.jpg"
import "./MainCat.css"
import Footer from "../Footer";

function MainCat(){
    const cats = useSelector(state => state.search.Categories) || {}
    const searchRes = useSelector(state => state.search)
    let catsValue = (Object.values(cats)) || {}
    // const categoryItems = useSelector(state => state.categoryItems) || {} 
    // const items = categoryItems.items || {}
    // const items2 = ((Object.values(items))[0]) || {}
    const mainCat_states = Object.values(useSelector(state => state.mainCategories)) || {}
    const search  = useParams().mc;
    // let test = catsValue.Categories
    console.log("1111>>>>>>>>>>>>>",searchRes)
    // console.log("2222>>>>>>>>>>>>>",catsValue)
    // console.log("33333>>>>>>>>>>>>>",mainCat_states)
    /* {if (cat = null) {<h2>Sorry No Results for {`${cat.Main_CategoryName}`}</h2>}} */
    // let item;
   
    let showPhoto =
        <div>
        {catsValue && 
            <ul className="category-items-ul3">
                { catsValue && catsValue.map((cat,i) => (
                    (Object.values(cat.Items)).map((c,i) => (

                                <div key={i} className="one-item-div3">
                                    <NavLink to={`/items/${c.id}`} className="category-items-nav3">
                                        <div className="category-items-img3"><img alt="p" src={c.photos.photo_url} className="category-items-img3"/></div>
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
        }
            {searchRes.sorry && 
                <div className="sorry-div">
                    <div style={{alignSelf: "center", marginBottom: "5%"}} className="sorry-div1"><h1 style={{fontSize: "40px"}}>Sorry</h1></div>
                    <div style={{alignSelf: "center", marginBottom: "5%"}} className="sorry-div2">Your search for 
                        <span style={{fontSize: "40px"}}> " {search} " </span>
                    </div>
                    <div style={{alignSelf: "center", marginBottom: "8%"}} className="sorry-div3">did not yield any results.</div>
                    <img style={{ borderRadius: "5px"}} src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/ben-white-qDY9ahp0Mto-unsplash.jpg"/>
                </div>
            }
            {searchRes.search === null && 
            <div className="sorry-div">
                <div style={{alignSelf: "center", fontSize: "40px", marginBottom: "5%"}} className="sorry-div1">Sorry</div>
                <div style={{alignSelf: "center", marginBottom: "5%"}} className="sorry-div2">Your search for 
                    <span style={{fontSize: "40px"}}> " {search} " </span>
                </div>           
                <div style={{alignSelf: "center", marginBottom: "8%"}} className="sorry-div3">did not yield any results.</div>
                <img style={{ borderRadius: "5px"}} src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/ben-white-qDY9ahp0Mto-unsplash.jpg"/>
            </div>
            }
            {/* {searchRes.search == null &&  */}
            
            {/* <div className="sorry-div"> */}
                {/* <div className="sorry-div1">Sorry</div> */}
                {/* <div className="sorry-div2">Your search for "{search}"</div> */}
                {/* <img src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/ben-white-qDY9ahp0Mto-unsplash.jpg"/> */}
                {/* <div className="sorry-div3">Ops Something went wrong.</div> */}
                {/* <img src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/saeed-karimi-JrrWC7Qcmhs-unsplash.jpg"/> */}
            {/* </div>
             }  */}
        </div>
    
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
            <footer className="fd">
                <Footer />
            </footer>
        </div>
    )
}

export default MainCat;