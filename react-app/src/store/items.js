// The constants:
const Get_CATEGORY_ITEMS = "/categories/Get_CATEGORY_ITEMS";

 // The action creator:

// 1- for getting one item:
const getItems = (items) => ({
    type: Get_CATEGORY_ITEMS,
    payload: items
})


// // The Thunks: 

// // 1- for getting items:
export const getCategoryItems = (id) => async(dispatch) => {
    const res = await fetch(`/api/maincategories/categories/${id}/items`, {
        method: 'GET'
    });
    if (res.ok) {
        const items = await res.json();
        dispatch(getItems(items));
        return items;
    }
}

// // The reducers: 

const initialState = {item: null}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Get_CATEGORY_ITEMS:
            return { items: action.payload }
        
        default:
            return state;
    }
}