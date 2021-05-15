import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import LogoutButton from '../LoginSignUpForm/LogoutButton'
import { searchThunk } from '../../store/search';
import { Modal } from '../../context/Modal';
import LoginSignUpModal from '../LoginSignUpForm'
import LogSign from '../LogSign'


const SearchForm = () => {
    const search_icon = <i class="fas fa-search"></i>
    const dispatch = useDispatch();
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    const [search, setSearch] = useState("")
    const [showModal, setShowModal] = useState(false);
    // const [isSearch, setIsSearch] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/maincategories/${search}`)
        setSearch("")
    }

    const onChange = (e) => {
        setSearch(e.target.value)
        e.preventDefault()
        dispatch(searchThunk(e.target.value));
        // console.log(search)
    }
    const handleSavedItems = (e) => {
        if (!user ) {
            setShowModal(true)
         } else if (user) {
             history.push(`/savedItems`)
            }
    }
    

    return (
        <div className="search-saved-div">
        
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    {search_icon}
                    <input style={{outline:"none"}} type="text"
                        placeholder="Search"
                        value={search}
                        onChange={onChange}
                        className="search-button-input"

                    />
                    {/* {console.log(search)} */}
                </div>
            </form>
            <div className="search-button-div">
                <button className="search-button" type="submit">
                    <span class="material-icons">&#xe8b6;</span>
                </button>
            </div>
        <div className="my-fav-div">
            <NavLink to="/savedItems" className="my-fav" onClick={handleSavedItems}>
                <span class="material-icons">&#xe599;</span>
            </NavLink>
        </div>
        <div>
        { user && (<LogoutButton />)}
        </div>

        {showModal && (
            <div>
                <Modal onClose={() => setShowModal(false)}>
                    {/* <h3 className="sen-plz-login">Please Login or Sign up</h3> */}
                    <LoginSignUpModal/>
                </Modal> 
            </div>
        )}
        </div>

    )
}

export default SearchForm;