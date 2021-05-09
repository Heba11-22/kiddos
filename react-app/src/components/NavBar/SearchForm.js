import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import { searchThunk } from '../../store/search';


const SearchForm = () => {
    const search_icon = <i class="fas fa-search"></i>
    const dispatch = useDispatch();
    const history = useHistory()
    const searchResult = useSelector(state => state.search.search)
    const [search, setSearch] = useState("")
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

    return (
        <div className="search-saved-div">
            <form onSubmit={handleSubmit}>
                <div className="search-bar">
                    {search_icon}
                    <input style={{outline:"none"}} type="text"
                        placeholder="Search"
                        value={search}
                        onChange={onChange}
                        
                    />
                    {/* {console.log(search)} */}
                    <button className="search-button" type="submit">Search</button>
                </div>
            </form>
            <NavLink to="/savedItems" className="my-fav"><ul>My Fav</ul></NavLink>
        </div>

    )
}

export default SearchForm;