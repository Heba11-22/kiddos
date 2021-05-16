import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from "react-router-dom";
import { useHistory, NavLink} from "react-router-dom";
import ImageZoom from 'react-medium-image-zoom'
// import { useLocation } from 'react-router-dom'
// import { getSingleItem } from '../../store/items';
import { allMainCategories } from '../../store/mainCategories'
import LoginSignUpModal from '../LoginSignUpForm'
import { Modal } from '../../context/Modal';
import { saveAnItemThunk } from "../../store/savedItems";
import "./Items.css"


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
    }, )


    useEffect ( ()=> {
        if (!itemId) return;
        (async () => {
            const res = await fetch(`/api/items/${itemId}`);
            const item = await res.json();
            setItem(item)
        })();
        // dispatch(getSingleItem(itemId))
    }, [setItem, itemId])
let show;


const itemValues = Object.values(item)[0] || {}
let photo_url = (Object.values(itemValues))[6] || {}
// console.log(photo_url.photo_url)
let sizesArray = itemValues.sizes || {};
console.log("IIIIIIIIIIIII",item)
// console.log(sizesArray)

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

    return (
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
                <h4 className="item-price-sale">OUR PRICE: </h4>
                <h4 className="item-price-sale">$price</h4>
                <h4 className="item-price">price</h4>
                <h3 className="word-color">color: 
                    <h4>{itemValues.colors}</h4>
                    <div className="item-color" >
                        <span class="material-icons" style={{color: itemValues.colors, fontSize: "50px"}}>&#xef4a;</span>
                    </div>
                </h3>
                <div className="sizes">
                    <h3 className="item-price">Sizes: </h3>
                    <div className="item-sizes">{Object.values(sizesArray).map((size, i) => (
                        <li key={i} className="one-size-list" style={{border: "2px solid", width: "8%", height: "10%"}}>
                            <div className="one-size-div">{size.size}</div>
                        </li>
                        ))}
                    </div>
                </div>
                <div className="save-bag-buttons">
                    <div className="save-button-div"><button className="save-button" value={itemId} onClick={handleSavedItems}>Add To Favorite</button></div>
                    <div className="bag-button-div"><button className="bag-button" value={itemId} onClick={handleSavedItems}>Add To Bag</button></div>
                </div>
                <div className="item-detail">
                    
                    <h3>Product Details: </h3>
                    <h4 style={{width: "50%", fontWeight: "lighter"}}>{itemValues.detail}</h4>
                </div>
            </div>
            {showModal && (
                <div>
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginSignUpModal/>
                    </Modal> 
                </div>
            )}
        </div>
    )
}

export default SingleItem;