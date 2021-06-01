import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory, NavLink } from "react-router-dom";
import LogoutButton from '../LoginSignUpForm/LogoutButton'
import { searchThunk } from '../../store/search';
import { getCartItemsThunk } from "../../store/cart"
import { logout } from "../../store/session";
import { Modal } from '../../context/Modal';
// import { saveAnItemThunk } from "../../store/savedItems";
import LoginSignUpModal from '../LoginSignUpForm'
// import LogSign from '../LogSign'


const SearchForm = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    // const search_icon = <i className="fas fa-search"></i>
    const user = useSelector(state => state.session.user)
    const cart = useSelector(state => state.cartItems.items) || {}
    const [search, setSearch] = useState("")
    const [showModal, setShowModal] = useState(false);

    let cartCount = Object.keys(cart).length
    let allCartItems;

    useEffect( async () => {
        allCartItems = await dispatch(getCartItemsThunk());         
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/maincategories/${search}`);
        setSearch("");
    }

    const onChange = (e) => {
        setSearch(e.target.value)
        e.preventDefault()
        dispatch(searchThunk(e.target.value));
    }
    
    const handleSavedItems = (e) => {
        if (!user ) {
            setShowModal(true)
         } else if (user) {
            // dispatch(saveAnItemThunk(itemId))
             history.push(`/savedItems`)
            }
    }

    return (
        <>
        {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginSignUpModal setShowModal={setShowModal}/>
                </Modal> 
        )}

        <div className="search-saved-div">
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    {/* {search_icon} */}
                    <input style={{outline:"none"}} type="text"
                        placeholder="Search"
                        value={search}
                        onChange={onChange}
                        className="search-button-input"
                    />
                </div>
            </form>
            <div className="search-button-div">
                <button className="search-button" type="submit">
                    <span className="material-icons">&#xe8b6;</span>
                </button>
            </div>
            <div className="my-fav-div">
                {/* <h5 style={{marginBottom: ".2px", color: "red"}}>{savedCount}</h5> */}
                <NavLink to="/savedItems" className="my-fav" onClick={handleSavedItems}>
                    <span className="material-icons">&#xe87d;</span>
                </NavLink>
            </div>
            <div className="my-cart">
                {/* <div style={{color:"red"}}>{allCartItemsArr}</div> */}
                <h5 style={{marginBottom: ".2px", color: "red"}}>{cartCount}</h5>
                <NavLink to="/cart" className="my-cart" style={{color:"black"}}>
                    <span className="material-icons">&#xe8cc;</span>
                </NavLink>
            </div>
            <div>
            { user && (<LogoutButton />)}
            </div>
            { !user && (
                <div onClick={() => setShowModal(true)} style={{ cursor: "pointer"}}>
                <span className="material-icons">&#xea77;</span>
                </div>
            )}
        </div>        
        </>
    )
}

export default SearchForm;