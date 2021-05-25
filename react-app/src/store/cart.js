// Constants:
const  GET_CARTS_ITEMS = "cart/GET_CARTS_ITEMS";
const  ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART";
const  DELETE_AN_ITEM = "cart/DELETE_AN_ITEM";

// Actions:

 //1- get all of the cart items:
 const getItems = (items) => ({
    type: GET_CARTS_ITEMS,
    payload: items
 })

 // 2- post an item to the cart: 
const addAnItem = (item) => ({
    type: ADD_ITEM_TO_CART,
    payload: item
})

 // 3- delete an item from the cart:
const deleteAnItem = () => ({
    type: DELETE_AN_ITEM
})

 // Thunks:
// 1- get the items in the cart:
export const getCartItemsThunk = () => async (dispatch) => {
    const res = await fetch(`/api/cart/`, {
        method: "GET",
        // headers: {
        //     'Content-Type': 'application/json'
        // }
    })
    if (res.ok) {
        const items = await res.json();
        dispatch(getItems(items))
        return items
    }
}

// 2- Add an item to the cart:
export const addAnItemThunk = (itemId) => async (dispatch) => {
    // const {  itemId } = params;
    const res = await fetch(`/api/cart/${itemId}/`
    , {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            itemId
        }),
    });
    const data = await res.json();
    // debugger
    // console.log(">>>>>>>>>>>.",data)
    dispatch(addAnItem(data))
    return data;
}

// 3- delete an item from the cart:
export const deleteAnItemThunk = (itemId) => async (dispatch) => {
    const res = await fetch(`/api/cart/${itemId}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            itemId
        }),
    });
    const data = await res.json();
    dispatch(deleteAnItem(data))
    return data
}


// Reducer:

const initialState = {items: null}
export default function reducer (state=initialState, action) {
    switch(action.type) {
        case GET_CARTS_ITEMS:
            return {...state, ...action.payload}

        case ADD_ITEM_TO_CART:
            return {...state, ...action.payload}

        case DELETE_AN_ITEM:
            // let newState = {...state}
            // delete newState[action.payload.itemId]
            // return newState;
            // return {...state, ...action.payload};
            let newState = {...state}
            delete newState[action.itemId]
            return newState;

        default:
            return state;
    }
}