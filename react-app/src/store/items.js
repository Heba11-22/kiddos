// The constants:
const Get_ONE_ITEM = "/items/Get_ONE_ITEM";

// The action creator:

// 1- for getting one item:
const getItem = (item) => ({
    type: Get_ONE_ITEM,
    payload: item
})


// The Thunks: 

// 1- for getting one item:
export const getSingleItem = (id) => async(dispatch) => {
    const res = await fetch(`/api/items/${id}`, {
        method: 'GET'
    });
    if (res.ok) {
        const item = await res.json();
        dispatch(getItem(item));
        return item;
    }
}

// The reducers: 

const initialState = {item: null}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Get_ONE_ITEM:
            return { user: action.payload }
        
        default:
            return state;
    }
}