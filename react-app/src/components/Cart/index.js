import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, Redirect} from "react-router-dom";
import Select from 'react-select';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { getCartItemsThunk, deleteAnItemThunk } from "../../store/cart"
import { getAllItemsThunk } from "../../store/allItems"
import { useSelector, useDispatch } from "react-redux";
import { saveAnItemThunk } from "../../store/savedItems";
import Footer from "../Footer"
import Checkout from "./CheckOut"
import FreeShipping from "./FreeShipping";
import "./Cart.css";

// function SelectWrapper ({itemId, id, placeholder, options, className, value, onChange}) {
//     return (
//         <Select  
//             id={id}
//             placeholder={placeholder} 
//             // style={{width: "100px"}}
//             options={options} 
//             className={className} 
//             value={value} 
//             onChange={onChange}
//         />
//     )
// }

export let allCartItemsValue = 0;
function Cart () {
    const dispatch = useDispatch();

    const allItems = useSelector(state => state.allItems.allItems) || {}
    const oneItem = allItems.items || {}
    const oneItemArray = Object.values(oneItem) || {}
    // const targtedItem = oneItem[123-1] || {}
    const allCartItems = useSelector(state => state.cartItems.items) || {}
    let defaultState = {}
    Object.values(allCartItems).forEach((item, i) => {
        // debugger
        defaultState[i] = 24
    })

    let defaultState2 = {}
    Object.values(allCartItems).forEach((item, i) => {
        defaultState2[i] = 1
    })
    const [selectedValue, setSelectedValue] = useState(defaultState)
    const [selectedCount, setSelectedcount] = useState(defaultState2)
    // [allCartItemsValue, setTotalPrice] = useState(0)
    const [shipping, setShipping] = useState(0)
    // console.log("BBBBBBBBBB",oneItemArray)
    // console.log("BBBBBBBBBB",targtedItem)
    const options = [
        {value: 24, label:'1'},
        {value: 48, label:'2'},
        {value: 72, label:'3'},
        {value: 96, label:'4'},
        {value: 120, label:'5'}
    ]
    console.log("111111111111",selectedValue)
    const selectedOption = (e) => {
        // console.log("ggggggggg111111111111", e.id)
        // console.log("ggggggggg111111111111", e.target)
        // debugger
        setSelectedValue({...selectedValue, [e.target.parentNode.id]: e.target.value})
        // setSelectedcount({...selectedCount, [e.target.parentNode.id]: e.label})
        // setTotalPrice(allCartItemsValue += selectedValue)
        
        // console.log("ggggggggg111111111111", Number(e.target.value) * Number(e.target.label))

        
        // setSelectedValue(e.target.value)
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
        // setSelectedValue(24)
        // setSelectedcount(1)
    // }
    
    useEffect( async (e) => {
        dispatch(getCartItemsThunk());
        // let allCartItems = await dispatch(getCartItemsThunk());
        // allCartItemsValue = allCartItems.items
    //    console.log("2222BBBBBBBBBB",allCartItems.items)
        dispatch(getAllItemsThunk());
    }, [dispatch])

    // const freeShipping = {

    // }

    return (
        <div className="cart-div-whole">
            <div className="cart-div">
                {/* <h1 className="cart-sen" >The Page is Under Construction</h1>
                <img className="cart-img" src="https://hebacapstone.s3.us-east-2.amazonaws.com/webfactory-ltd-NoOrDKxUfzo-unsplash.jpg"/> */}
                
                <ul className="cart-items-ul">
                    {allCartItems && (Object.values(allCartItems)).map((item,i) => (
                        <li key={i} className="one-item-cart-li">
                        {console.log("iiiiiitttteeemmm",item)}
                            {oneItemArray[(item.itemId)-1] && 
                            <>
                                <div className="item-select-price-img">
                                    <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img">
                                            <img className="cart-item-img" src={((oneItemArray[(item.itemId)-1]).photos).photo_url}/>
                                            {/* <div className="price4"> */}
                                                {/* <div className="item-price4">$50</div> */}
                                                {/* <div className="item-price-sale4-div">Sale <span className="item-price-sale4"> $24</span></div> */}
                                            {/* </div> */}
                                    </NavLink>
                                    <div className="item-select-price" id={(oneItemArray[(item.itemId)-1]).id}>
                                        <div className="items-name">
                                            <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img2">
                                                {(oneItemArray[(item.itemId)-1]).itemName}
                                            </NavLink>
                                        </div>
                                        {/* <SelectWrapper
                                            itemId={item.itemId}
                                            id={(oneItemArray[(item.itemId)-1]).id}
                                            placeholder={selectedCount[item.itemId]} 
                                            // style={{width: "100px"}}
                                            options={options} 
                                            className="select" 
                                            value={selectedValue[item.itemId]} 
                                            onChange={selectedOption}

                                        /> */}
                                        {/* <Select  
                                            id={(oneItemArray[(item.itemId)-1]).id}
                                            placeholder={selectedCount[item.itemId]} 
                                            // style={{width: "100px"}}
                                            options={options} 
                                            className="select" 
                                            value={selectedValue[item.itemId]} 
                                            onChange={selectedOption}
                                            /> */}
                                            {/* {setTotalPrice(allCartItemsValue += selectedValue)} */}
                                            {/* <form onSubmit={handleSubmit}> */}
                                                <select name={selectedValue[item.itemId]} value={selectedValue[item.itemId]} onChange={selectedOption} type="submit" >
                                                    <option value="24"  label='1'>1</option>
                                                    <option value="48"  label='2'>2</option>
                                                    <option value="72" label='3'>3</option>
                                                    <option value="96"  label='4'>4</option>
                                                </select>
                                                {/* <input type="submit" value="Submit" hidden/> */}
                                            {/* </form> */}
                                            {/* {allCartItemsValue += selectedValue} */}
                                            {/* {console.log("22222222111111111111",allCartItemsValue += selectedValue)} */}
                                        <div className="price-divs">
                                            <div className="item-price-cart1" style={{paddingBottom: "5px", paddingTop: "25px"}}>Reg. $50</div>
                                            <div className="item-price-cart2" style={{color: "red", paddingBottom: "5px"}}>Sale $24</div>
                                            <div className="item-price-cart3">Total: ${selectedValue[item.itemId] || 24}</div>
                                            {JSON.stringify(item)}
                                        </div>
                                    </div>
                                </div>
                                <div className="radio-options"  >
                                    <RadioGroup  vertical="true">
                                        <RadioButton 
                                            // value="1"
                                            onClick={() => {setShipping(1)
                                                // {console.log("!!!!!", RadioButton)}
                                                }}
                                        >
                                        {/* {console.log("!!!!!", RadioGroup)} */}
                                            <div style={{color: "black", outline: "none"}}>
                                                <span style={{fontWeight: "bold"}}>
                                                    Ship it <br/>
                                                </span>
                                                <span style={{fontWeight: "lighter", color: "green"}}>
                                                    In Stock:
                                                </span> Usually ships within 2 business days.
                                            </div>
                                        </RadioButton>
                                        <RadioButton 
                                            // value="0"
                                            onClick={() => {setShipping(0)
                                            // {console.log("!!!!!", shipping)}
                                            }} 
                                        >
                                        
                                            <div style={{color: "black"}}>
                                            <span style={{fontWeight: "bold"}}>
                                                Pick Up In 5-8 business days 
                                            </span>
                                            <span style={{fontWeight: "lighter"}}>
                                                at our store 
                                            </span> <br/>
                                            <span style={{fontWeight: "lighter"}}> For </span>
                                            <span style={{fontWeight: "bold"}}> Curbside</span> 
                                            <span style={{fontWeight: "lighter"}}> or </span> 
                                            <span style={{fontWeight: "bold"}}> In Store Pickup. </span>
                                            </div>
                                        </RadioButton>
                                    </RadioGroup>

                                </div>
                                <div className="cart-buttons">
                                    <button className="save-for-later" 
                                        // onClick={() => dispatch(saveAnItemThunk(oneItemArray[(item.itemId)-1]).id)}
                                    >
                                        Save For Later
                                    </button>
                                    <button className="delete-item" onClick={() => {
                                        dispatch(deleteAnItemThunk((oneItemArray[(item.itemId)-1]).id))
                                        // window.location.assign("/savedItems")
                                        // history.push("/savedItems")
                                        // setTrigger(!trigger)
                                        window.location.reload()
                                        {/* <Redirect to="/savedItems"/> */}
                                        }}>
                                        Delete From Cart
                                    </button>
                                    
                                </div>
                                </>
                            }
                            {/* <button className="add-checkout">
                                <NavLink className="add-cart-nav" to="/cart">Add to Cart</NavLink>
                            </button> */}
                        </li>
                    ))}
                </ul>
                {/* {allCartItemsValue += selectedValue} */}
                <div className="checkout">
                    <Checkout allCartItemsValue={allCartItemsValue} shipping={shipping}/>
                </div>
            </div>
            {/* <Footer className="footer"/> */}
        </div>
    )
}

// export  {hi};
export default Cart;