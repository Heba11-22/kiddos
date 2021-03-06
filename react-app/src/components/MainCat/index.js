import React from 'react';
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "./MainCat.css"
import Footer from "../Footer";

function MainCat(){
    const search  = useParams().mc;
    // console.log(">>>", search);
    const searchRes = useSelector(state => state.search)
    const mainCat_states = Object.values(useSelector(state => state.mainCategories)) || {}
    const cats = useSelector(state => state.search.Categories) || {}
    let catsValue = (Object.values(cats)) || {}
   
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
                <div className="sorry-div" style={{marginLeft: "25%"}}>
                    <div style={{alignSelf: "center"}} className="sorry-div1"><h1 style={{fontSize: "40px", marginBottom: "4%", marginTop: "100%"}}>Sorry</h1></div>
                    <div style={{alignSelf: "center", marginBottom: "5%"}} className="sorry-div2">Your search for 
                        <span style={{fontSize: "40px"}}> " {search} " </span>
                    </div>
                    <div style={{alignSelf: "center", marginBottom: "8%"}} className="sorry-div3">did not yield any results.</div>
                    <img style={{ borderRadius: "5px"}} src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/ben-white-qDY9ahp0Mto-unsplash.jpg"/>
                </div>
            }
            {searchRes.search === null && 
            <div className="sorry-div" style={{marginLeft: "25%"}}>
                <div style={{alignSelf: "center", fontSize: "40px", marginBottom: "4%", marginTop: "20%"}} className="sorry-div1">Sorry</div>
                <div style={{alignSelf: "center", marginBottom: "5%"}} className="sorry-div2">Somthing Went Wrong
                    <span style={{fontSize: "40px"}}>  </span>
                </div>           
                {/* <div style={{alignSelf: "center", marginBottom: "8%"}} className="sorry-div3">did not yield any results.</div> */}
                <img style={{ borderRadius: "5px"}} src="https://hebacapstone.s3.us-east-2.amazonaws.com/unsplash/ben-white-qDY9ahp0Mto-unsplash.jpg"/>
            </div>
 }
        </div>
    
    return (
        <div className="category-page-div3">
            <div className="side-menu-div3">
                    <ul className="cats-ul3">
                        {mainCat_states.map( (mainCat_state, i) => (
                            <li key={i} className="cat-li3">
                                <h4 className="cat-button3" value={i}>{mainCat_state.Main_CategoryName}</h4>
                                <ul className="sub-cat-ul3" >
                                    {(mainCat_state.Categories).map((cat, i) => (
                                        <li key={i} className="sub-cat-li3">
                                            <NavLink className="sub-cat-link3" to={`/maincategories/categories/${cat.id}/items`}>
                                                {(Object.values(cat))[0]}
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