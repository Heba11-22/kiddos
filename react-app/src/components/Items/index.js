import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useLocation } from 'react-router-dom'
import { getSingleItem } from '../../store/items';

function SingleItem() {
    const dispatch = useDispatch();
    // const item = useSelector(state => state.item) || {}
    const [item, setItem] = useState({})
    const { itemId } = useParams();

    useEffect ( ()=> {
        if (!itemId) return;
        (async () => {
            const res = await fetch(`/api/items/${itemId}`);
            const item = await res.json();
            setItem(item)
        })();
        // dispatch(getSingleItem(itemId))
    }, [setItem])
    const itemValues = Object.values(item)[0] || {}
    let photo_url = (Object.values(itemValues))[6] || {}
    // console.log(photo_url.photo_url)
    console.log(itemValues)
    return (
        <div className="single-item">
            <div className="item-img-div"><img className="item-img" src={photo_url.photo_url}/></div>
            <div className="item-detail">
                <h3>{itemValues.detail}</h3>
            </div>
            <h1 className="word-color">color:</h1>
            <div className="item-color">{itemValues.colors}</div>
        </div>
    )
}

export default SingleItem;