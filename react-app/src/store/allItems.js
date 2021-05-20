// The constants:
const Get_ALL_ITEMS = "/categories/Get_ALL_ITEMS";

// The action creator:

// 1- for getting all the items:
const getAllItems = (items) => ({
    type: Get_ALL_ITEMS,
    payload: items
})

// // The Thunks: 

// // 1- for getting all the items:
export const getAllItemsThunk = () => async(dispatch) => {
    const res = await fetch(`/api/items/all/`, {
        method: 'GET'
    });
    if (res.ok) {
        const items = await res.json();
        dispatch(getAllItems(items));
        return items;
    }
}

// // The reducers: 

const initialState = {item: null}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        
        case Get_ALL_ITEMS:
            return { allItems: action.payload }

            default:
            return state;
    }
}