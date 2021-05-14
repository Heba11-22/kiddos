import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from "react-router-dom";
import { useHistory, NavLink} from "react-router-dom";
// import { useLocation } from 'react-router-dom'
// import { getSingleItem } from '../../store/items';
import { allMainCategories } from '../../store/mainCategories'
import LoginSignUpModal from '../LoginSignUpForm'
import { Modal } from '../../context/Modal';
import { saveAnItemThunk } from "../../store/savedItems";


function SingleItem() {
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    // console.log("USEEEEER",user)
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
// console.log(itemValues)
// console.log(sizesArray)

const handleSavedItems = (e) => {
    console.log("test")
    if (!user ) {
        setShowModal(true)
        console.log("HIIIII", itemId)
        // if(user) console.log("UUUUU", user.id)
    //    console.log("NOT A USER")
    //    history.push(`/signform`)
     } else if (user) {
         dispatch(saveAnItemThunk(itemId))
         // console.log("!!!!!!!!", userId, itemId)
         console.log("HIIIII", e.target.value, "UUUUU", user.id)
         history.push(`/savedItems`)
        }
}

    return (
        <div className="single-item">
        {showModal && (
            <div>
                <Modal onClose={() => setShowModal(false)}>
                    <LoginSignUpModal/>
                </Modal> 
            </div>
        )}
            {/* <LoginSignUpModal/> */}
            <div className="item-img-div"><img className="item-img" src={photo_url.photo_url}/></div>
            <div className="save-items-button-div"><button className="save-items-button" value={itemId} onClick={handleSavedItems}>Add To Saved</button></div>
            {/* <div className="bag-button-div"><button className="bag-button" onClick={handleBag}>Add To Bag</button></div> */}
            <h1 className="word-color">color:</h1>
            <div className="item-color">{itemValues.colors}</div>
            <div className="item-sizes">{Object.values(sizesArray).map((size, i) => (
                <li key={i} className="one-size-list">
                    <div className="one-size-div">{size.size}</div>
                </li>
                ))}
            </div>
            <div className="item-detail">
                <h3>{itemValues.detail}</h3>
            </div>
        </div>
    )
}

export default SingleItem;