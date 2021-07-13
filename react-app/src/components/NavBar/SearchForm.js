import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import LogoutButton from '../LoginSignUpForm/LogoutButton'
import { searchThunk } from '../../store/search';
import { getCartItemsThunk } from "../../store/cart"
import { Modal } from '../../context/Modal';
import LoginSignUpModal from '../LoginSignUpForm'

const SearchForm = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const cart = useSelector(state => state.cartItems.items) || {}
    // const cart = useSelector(state => state.cartItems.items) || {}
    //declares a "state variable" using array destructuring
    const [search, setSearch] = useState("")
    const [showModal, setShowModal] = useState(false);
    // const [cartCount, setCartCount] = useState(Object.keys(cart).length);

    let cartCount = Object.keys(cart).length;
    let allCartItems;

    useEffect( async () => {
        allCartItems = await dispatch(getCartItemsThunk()); 
        // setCartCount(Object.keys(cart).length);
    }, [dispatch]);
    // }, [dispatch, cart]);
    // console.log(cartCount, "ddddd", cart)
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/maincategories/${search}`);
        setSearch("");
    }

    const onInputChange = (e) => {
        setSearch(e.target.value)
        e.preventDefault()
        dispatch(searchThunk(e.target.value));
    }
    
    const handleSavedItems = (e) => {
        if (!user ) {
            setShowModal(true)
         } else if (user) {
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
                    <input style={{outline:"none"}} type="text"
                        placeholder="Search"
                        value={search}
                        //we don't invoke the func onChange, otherwise it will be called every time the component's rendered
                        onChange={onInputChange}
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
                <NavLink to="/savedItems" className="my-fav" onClick={handleSavedItems}>
                    <span className="material-icons">&#xe87d;</span>
                </NavLink>
            </div>
            <div className="my-cart">
                <h5 style={{marginBottom: ".2px", color: "red"}}>{cartCount}</h5>
                <NavLink to="/cart" className="my-cart1" style={{color:"black"}}>
                    <span className="material-icons">&#xe8cc;</span>
                </NavLink>
            </div>
            <div className="log-out-div">
                { user && (<LogoutButton />)}
            </div>
            { !user && (
                <div className="sign-in-div" onClick={() => setShowModal(true)} style={{ cursor: "pointer"}}>
                <span className="material-icons">&#xea77;</span>
                </div>
            )}
        </div>        
        </>
    )
}

export default SearchForm;