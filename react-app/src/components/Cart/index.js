import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
// import Select from 'react-select';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { getCartItemsThunk, deleteAnItemThunk, addCount, deleteCount } from "../../store/cart"
import { getAllItemsThunk } from "../../store/allItems"
import { useSelector, useDispatch } from "react-redux";
import { saveAnItemThunk } from "../../store/savedItems";
// import Footer from "../Footer"
import Checkout from "./CheckOut"
import Footer from "../Footer"
// import FreeShipping from "./FreeShipping";
import "./Cart.css";


export let allCartItemsValue = 0;
function Cart () {
    const dispatch = useDispatch();

    const allItems = useSelector(state => state.allItems.allItems) || {}
    const oneItem = allItems.items || {}
    const oneItemArray = Object.values(oneItem) || {}
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
    // const [allValue, setAllValue] = useState(defaultState)
    // const [selectedCount, setSelectedcount] = useState(defaultState2)
    const [all, setAll] = useState(0)
    const [cartItemsValue, setCartItemsValue] = useState(24 * (Object.values(allCartItems)).length)
    const [shipping, setShipping] = useState(0)
    // const [quantity, setQuantity] = useState({})

    const options = [
        {value: 24, label:'1'},
        {value: 48, label:'2'},
        {value: 72, label:'3'},
        {value: 96, label:'4'},
        {value: 120, label:'5'}
    ]

    const parseCount = (value) => {
        switch (value){
            case "24":
                return 1
            case "48":
                return 2
            case "72":
                return 3
            case "96":
                return 4
            default:
                return 0
        }
    }
    
    const selectedOption = (e, itemId) => {
        
        if ( allCartItems[itemId].quantity > Number(e.target.value) ) {
            dispatch(deleteCount({cartItemId: itemId, count: parseCount(e.target.value)}))
        } else {
            // increment count
            dispatch(addCount({cartItemId: itemId, count: parseCount(e.target.value)}))
        }
        setSelectedValue({...selectedValue, [e.target.parentNode.id]: e.target.value})
    }
   
    
    useEffect( async (e) => {
        dispatch(getCartItemsThunk());
        dispatch(getAllItemsThunk());
    }, [dispatch])


    const saveLater = (e) => {
    }

    return (
        <div className="cart-div-whole">
            <div className="cart-div">                
                <ul className="cart-items-ul">
                    {allCartItems && (Object.values(allCartItems)).map((item,i) => (
                        <li key={i} className="one-item-cart-li">
                        
                            {oneItemArray[(item.itemId)-1] && 
                            <>
                                <div className="item-select-price-img">
                                    <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img">
                                            <img className="cart-item-img" src={((oneItemArray[(item.itemId)-1]).photos).photo_url}/>
                                           
                                    </NavLink>
                                    <div className="item-select-price" id={(oneItemArray[(item.itemId)-1]).id}>
                                        <div className="items-name">
                                            <NavLink to={`/items/${(oneItemArray[(item.itemId)-1]).id}`} className="item-img2">
                                                {(oneItemArray[(item.itemId)-1]).itemName}
                                            </NavLink>
                                        </div>
                                        <select name={selectedValue[item.itemId]} value={selectedValue[item.itemId]} onChange={(e) => selectedOption(e, item.id)} onClick={() => setAll(selectedValue[item.itemId] || 24)} type="submit" >
                                            <option value="24"  label='1'>1</option>
                                            <option value="48"  label='2'>2</option>
                                            <option value="72" label='3'>3</option>
                                            <option value="96"  label='4'>4</option>
                                        </select>
                                        {/* {console.log("????", cartItemsValue)} */}
                                        <div className="price-divs">
                                            <div className="item-price-cart1" style={{paddingBottom: "5px", paddingTop: "25px"}}>Reg. $50</div>
                                            <div className="item-price-cart2" style={{color: "red", paddingBottom: "5px"}}>Sale $24</div>
                                            <div className="item-price-cart3" >Total: ${selectedValue[item.itemId] || 24}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="radio-options"  >
                                    <RadioGroup className="radio"  vertical="true">
                                        <RadioButton 
                                        className="radio"
                                        value="0"
                                        onClick={(e) => {setShipping(e)}} 
                                        // onChange={test}
                                        >
                                        {/* {console.log("GGGGGGGG", shipping)} */}
                                        
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
                                        // onChange={test}
                                        className="radio"
                                        value="1"
                                        onClick={(e) => {setShipping(e)}} 
                                        >
                                        {/* {console.log("GGGGGGGG", shipping)} */}
                                            <div style={{color: "black"}}>
                                            <span style={{fontWeight: "bold", marginRight: ".3em"}}>
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
                                        onClick={ async (e) => {
                                        // dispatch(saveAnItemThunk(oneItemArray[(item.itemId)-1]).id)
                                        await dispatch(saveAnItemThunk(oneItemArray[(item.itemId)-1].id))
                                        await dispatch(deleteAnItemThunk((oneItemArray[(item.itemId)-1]).id))

                                        // console.log("GGGGGG", oneItemArray[(item.itemId)-1].id)
                                            window.location.reload()
                                        }}
                                    >
                                        Save For Later
                                    </button>
                                    <button className="delete-item" onClick={ async () => {
                                        await dispatch(deleteAnItemThunk((oneItemArray[(item.itemId)-1]).id))
                                        window.location.reload()
                                        }}>
                                        Delete From Cart
                                    </button>
                                    
                                </div>
                                </>
                            }
                            
                        </li>
                    ))}
                </ul>
                
                <div className="checkout">
                    <Checkout allCartItemsValue={allCartItemsValue} shipping={shipping}/>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}


export default Cart;






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