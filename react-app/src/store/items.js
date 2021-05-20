// The constants:
// const Get_ALL_ITEMS = "/categories/Get_ALL_ITEMS";
const Get_CATEGORY_ITEMS = "/categories/Get_CATEGORY_ITEMS";
const Get_LATEST_ITEMS = "/categories/Get_LATEST_ITEMS";

 // The action creator:

// 1- for getting all the items:
// const getAllItems = (items) => ({
//     type: Get_ALL_ITEMS,
//     payload: items
// })

// 2- for getting category items:
const getItems = (items) => ({
    type: Get_CATEGORY_ITEMS,
    payload: items
})

// 3- for getting the latest items:
const getLatestItems = (items) => ({
    type: Get_LATEST_ITEMS,
    payload: items
})


// // The Thunks: 

// // 1- for getting all the items:
// export const getAllItemsThunk = () => async(dispatch) => {
//     const res = await fetch(`/api/items/all/`, {
//         method: 'GET'
//     });
//     if (res.ok) {
//         const items = await res.json();
//         dispatch(getAllItems(items));
//         return items;
//     }
// }

// // 2- for getting category items:
export const getCategoryItems = (id) => async(dispatch) => {
    const res = await fetch(`/api/maincategories/categories/${id}/items/`, {
        method: 'GET'
    });
    if (res.ok) {
        const items = await res.json();
        dispatch(getItems(items));
        return items;
    }
}

// // 3- for getting the latest items:
export const getLatestItemsThunk = () => async(dispatch) => {
    const res = await fetch(`/api/items/`, {
        method: 'GET'
    });
    if (res.ok) {
        const items = await res.json();
        dispatch(getLatestItems(items));
        return items;
    }
}

// // The reducers: 

const initialState = {item: null}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case Get_ALL_ITEMS:
        //     return { allItems: action.payload }

        case Get_CATEGORY_ITEMS:
            return { items: action.payload }

        case Get_LATEST_ITEMS:
            return { latestItems: action.payload }
        
        default:
            return state;
    }
}