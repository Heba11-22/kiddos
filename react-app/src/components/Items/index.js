import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ImageZoom from 'react-medium-image-zoom'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { useAlert } from 'react-alert'
import { allMainCategories } from '../../store/mainCategories'
import LoginSignUpModal from '../LoginSignUpForm'
import { Modal } from '../../context/Modal';
import { saveAnItemThunk } from "../../store/savedItems";
import {getLatestItemsThunk} from "../../store/items"
import {addAnItemThunk } from "../../store/cart"
import Footer from "../Footer"
import "./Items.css"

function SingleItem() {
    const dispatch = useDispatch();
    // const history = useHistory();
    const alert = useAlert();
    const user = useSelector(state => state.session.user)
    const items = useSelector(state => state.mainCategories) 
    const saved = useSelector(state => state.cartItems.items) || {}
    const saved2 = (Object.values(saved))
    const [item, setItem] = useState({})
    const [showModal, setShowModal] = useState(false);
    const { itemId } = useParams();

  useEffect( () => {
    dispatch(allMainCategories())
    dispatch(getLatestItemsThunk())
    if (!itemId) return;
    (async () => {
        const res = await fetch(`/api/items/${itemId}/`);
        const item = await res.json();
        setItem(item)
    })();
    }, [dispatch, setItem, itemId])

    // useEffect ( ()=> {
    //     if (!itemId) return;
    //     (async () => {
    //         const res = await fetch(`/api/items/${itemId}/`);
    //         const item = await res.json();
    //         setItem(item)
    //     })();
    // }, [setItem, itemId])

    const latestItemsStore = useSelector(state => state.item.latestItems) || {}
    const latestItems = (latestItemsStore.items) || {}
    // useEffect( () => {
    //     dispatch(getLatestItemsThunk())
    // }, [dispatch])


const itemValues = Object.values(item)[0] || {}
let photo_url = (Object.values(itemValues))[6] || {}
let sizesArray = itemValues.sizes || {};
let currentItemId = itemValues.categoryId
let suggestedItems = items[currentItemId] || {}
// let suggestedItemsValues = (Object.values(suggestedItems))[0] || {}
const handleSavedItems = (e) => {
    if (!user ) {
        setShowModal(true)
    } else if (user) {
        dispatch(saveAnItemThunk(itemId))
                alert.show('Added to your Favorite List');
        }
    }
    let itemCart = [];
    for (let i = 0; i < saved2.length; i++){
        itemCart.push(saved2[i].itemId)
    }

    const handleSavedCart = async(e) => {
        await dispatch(addAnItemThunk(itemId));
        alert.show('Added to the Cart');
    }

    return (
        <>
            <div className="single-item">
                <div className="item-img-div">
                <ImageZoom
                    image={{ 
                        className: "item-img", 
                        src: `${photo_url.photo_url}`,
                        style: {height: "65%", width: "48%"}
                        }}
                        zoomImage={{
                            src: `${photo_url.photo_url}-big`,
                            alt: 'Golden Gate Bridge'
                        }}

                    />
                </div>
                <div className="item-info-div">
                    <h1 className="item-name">{itemValues.itemName}</h1>
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
                        
                        <h2>Product Details: </h2>
                        <h3 style={{width: "50%", fontWeight: "lighter"}}>{itemValues.detail}</h3>
                    </div>
                </div>
                {showModal && (
                    <div>
                        <Modal onClose={() => setShowModal(false)}>
                            <LoginSignUpModal setShowModal={setShowModal}/>
                        </Modal> 
                    </div>
                )}
            </div>
            <div style={{ fontSize: "25px", fontWeight: "bold", padding: "7% 8%"}}>Customers also loved</div>
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
                <footer>
                    <Footer />
                </footer>
        </>
    )
}

export default SingleItem;