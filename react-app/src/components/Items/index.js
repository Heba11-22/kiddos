import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from "react-router-dom";
import { useHistory, NavLink} from "react-router-dom";
import ImageZoom from 'react-medium-image-zoom'
import ScrollMenu from 'react-horizontal-scrolling-menu';
// import { useLocation } from 'react-router-dom'
// import { getSingleItem } from '../../store/items';
import { allMainCategories } from '../../store/mainCategories'
import LoginSignUpModal from '../LoginSignUpForm'
import { Modal } from '../../context/Modal';
import { saveAnItemThunk } from "../../store/savedItems";
import {getLatestItemsThunk} from "../../store/items"
import {addAnItemThunk} from "../../store/cart"
import "./Items.css"
// import "../LandingPage/LandingPage.css"


function SingleItem() {
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const items = useSelector(state => state.mainCategories) 
    console.log("USEEEEER",items)
    // const userId = user.id || {}
    const [item, setItem] = useState({})
    const [targtedItem, setTargtedItem] = useState()
    const [showModal, setShowModal] = useState(false);
    const { itemId } = useParams();

  useEffect( () => {
    dispatch(allMainCategories())
    }, [dispatch])


    useEffect ( ()=> {
        if (!itemId) return;
        (async () => {
            const res = await fetch(`/api/items/${itemId}/`);
            const item = await res.json();
            setItem(item)
        })();
        // dispatch(getSingleItem(itemId))
    }, [setItem, itemId])

    const latestItemsStore = useSelector(state => state.item.latestItems) || {}
    const latestItems = (latestItemsStore.items) || {}
    // console.log(">>>>>>", latestItems[0])
    useEffect( () => {
        dispatch(getLatestItemsThunk())
    }, [dispatch])


const itemValues = Object.values(item)[0] || {}
let photo_url = (Object.values(itemValues))[6] || {}
// console.log(photo_url.photo_url)
let sizesArray = itemValues.sizes || {};
let currentItemId = itemValues.categoryId
console.log("111IIIIIIIIIIIII",itemValues.categoryId)
let suggestedItems = items[currentItemId] || {}
let suggestedItemsValues = (Object.values(suggestedItems))[0]|| {}
let suggestedItemsValues2 = Object.values(suggestedItemsValues) || {}
// let suggestedItemsValues3 = Object.values(suggestedItemsValues2) 
// let suggestedItems2 = suggestedItemsValues3[0] 
console.log("222IIIIIIIIIIIII",suggestedItemsValues)
// let savedItemsArray = []
const handleSavedItems = (e) => {
    // console.log("test")
    if (!user ) {
        setShowModal(true)
        // console.log("HIIIII", itemId)
        // if(user) console.log("UUUUU", user.id)
        //    console.log("NOT A USER")
        //    history.push(`/signform`)
    } else if (user) {
        dispatch(saveAnItemThunk(itemId))
        //  if (savedItemsArray.includes(itemId)) { 
            //      alert("Your file is being uploaded!")
            //     console.log("????????????")
            //     return}
            //  savedItemsArray.push(itemId)
            // console.log("!!!!!!!!", userId, itemId)
            //  console.log("HIIIII", e.target.value, "UUUUU", user.id)
            history.push(`/savedItems`)
            //  } else alert("Your file is being uploaded!")
        }
    }
    const handleSavedCart = (e) => {
        dispatch(addAnItemThunk(itemId))
        history.push(`/cart`)
    }

    return (
        <>
            {/* <div className="links-to-previuos">
                <NavLink to="/" className="home-nav">
                    HOME >
                </NavLink>
            </div> */}
            <div className="single-item">
                {/* <LoginSignUpModal/> */}
                <div className="item-img-div">
                <ImageZoom
                    image={{ 
                        className: "item-img", 
                        src: `${photo_url.photo_url}`
                        }}
                        zoomImage={{
                            src: `${photo_url.photo_url}-big`,
                            alt: 'Golden Gate Bridge'
                        }}

                    />
                </div>
                <div className="item-info-div">
                    {/* <div className="bag-button-div"><button className="bag-button" onClick={handleBag}>Add To Bag</button></div> */}
                    <h2 className="item-name">{itemValues.itemName}</h2>
                    <h4 className="item-price-sale-sen">OUR PRICE: </h4>
                    <div className="price">
                        <div className="item-price-sale">$24</div>
                        <div className="item-price">$50</div>
                    </div>
                    <div className="word-color">
                    <h2>color: </h2>
                        <h3>{itemValues.colors}</h3>
                        <div className="item-color" >
                            <span className="material-icons" style={{color: itemValues.colors, fontSize: "45px"}}>&#xef4a;</span>
                        </div>
                    </div>
                    <div className="sizes">
                        <h2 className="item-sizes-sen">Sizes: </h2>
                        <ul className="item-sizes">{Object.values(sizesArray).map((size, i) => (
                            <li key={i} className="one-size-list" style={{border: "2px solid rgb(214, 208, 208)", width: "100%", height: "20%"}}>
                                <div className="one-size-div">{size.size}</div>
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="save-bag-buttons">
                        <div className="save-button-div"><button className="save-button" value={itemId} onClick={handleSavedItems}>Add To Favorite</button></div>
                        <div className="bag-button-div"><button className="bag-button" value={itemId} onClick={handleSavedCart}>Add To Cart</button></div>
                    </div>
                    <div className="item-detail">
                        
                        <h3>Product Details: </h3>
                        <h4 style={{width: "50%", fontWeight: "lighter"}}>{itemValues.detail}</h4>
                    </div>
                    {/* <ScrollMenu
                            className="main-latest-div"
                            arrowLeft={<div style={{ fontSize: "50px", color: "gray" }}>{" < "}</div>}
                            arrowRight={<div style={{ fontSize: "50px", color: "gray" }}>{" > "}</div>}
                            data={(Object.values(suggestedItemsValues)).map((suggestedItem, i) => (
                                <NavLink to={`/items/${suggestedItem.id}`} className="item-name-nav">
                                {console.log("dfgetrgtgrwg",suggestedItem)}
                                            {/* <img className="latest-items-img" src={suggestedItem.photos.photo_url}/> */}
                                            {/* <h3 className="item-name">{suggestedItem.itemName}</h3> */}
                                {/* </NavLink> */}
                            {/* ))} */}
                            {/* />  */}
                </div>
                {showModal && (
                    <div>
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginSignUpModal setShowModal={setShowModal}/>
                        </Modal> 
                    </div>
                )}
            </div>
            <div style={{ fontSize: "20px", fontWeight: "bold", paddingTop: "8%", paddingBottom: "8%"}}>Customers also loved</div>
                <ScrollMenu
                className="main-latest-div2"
                arrowLeft={<div style={{ fontSize: "50px", color: "rgb(214, 208, 208)"}}>{" < "}</div>}
                arrowRight={<div style={{ fontSize: "50px", color: "rgb(214, 208, 208)" }}>{" > "}</div>}
                data={(Object.values(latestItems)).map((item, i) => (
                    <div 
                        key={i} 
                        className="latest-items-div2"
                        style={{paddingBottom: "8%"}}
                        >
                            <NavLink to={`/items/${item.id}`} className="item-name-nav2"
                                style={{textDecoration: "none", color: "black"}}>
                                <img className="latest-items-img2" src={item.photos.photo_url}/>
                                <h3 className="item-name2">{item.itemName}</h3>
                            </NavLink>
                    </div>
                ))}
                />
        </>
    )
}

export default SingleItem;