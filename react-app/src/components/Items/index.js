import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useLocation } from 'react-router-dom'
// import { getSingleItem } from '../../store/items';
// import { allMainCategories } from '../../store/mainCategories'


function SingleItem() {
    // const dispatch = useDispatch();
    // const state_mainCat = useSelector(state => state.maincategories) || {}
    const [item, setItem] = useState({})
    const { itemId } = useParams();

//   useEffect( () => {
//     dispatch(allMainCategories())
//     }, [dispatch])

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
    // let sizes = (Object.values(itemValues.sizes)) || {}
    // console.log(photo_url.photo_url)
    let sizesArray = itemValues.sizes || {};
    console.log(itemValues)
    console.log(sizesArray)
    // console.log(sizes)
    return (
        <div className="single-item">
            <div className="item-img-div"><img className="item-img" src={photo_url.photo_url}/></div>
            
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