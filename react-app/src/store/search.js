const SEARCH_CAT = "search/SEARCH_CAT";

// Actions
const searchCat = (searchList) => ({
    type: SEARCH_CAT,
    payload: searchList
})


//Thunk:
// We need the search from the backend to be in the body
export const searchThunk = (searchField) => async (dispatch) => {
    const response = await fetch ('/api/maincategories/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            search: searchField
        })
    })
    console.log("RESRESRES",response)
    const data = await response.json();
    console.log("datadtadatdat",data)
    dispatch(searchCat(data))
}

const initialState = { search: null };

export default function reducer (state = initialState, action){
    switch (action.type) {
        case SEARCH_CAT:
            return { ...action.payload}
        default:
            return state;
    }
}


