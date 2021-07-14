// Constants:
const  GET_CARTS_ITEMS = "cart/GET_CARTS_ITEMS";
const  ADD_ITEM_TO_CART = "cart/ADD_ITEM_TO_CART";
const  DELETE_AN_ITEM = "cart/DELETE_AN_ITEM";
const  ADD_COUNT = "cart/ADD_COUNT";
const  DELETE_COUNT = "cart/DELETE_COUNT";

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
const deleteAnItem = (itemId) => ({
    type: DELETE_AN_ITEM,
    itemId
})

export const addCount = (item) => ({
    type: ADD_COUNT,
    payload: item
})

export const deleteCount = (item) => ({
    type: DELETE_COUNT,
    payload: item
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
    await fetch(`/api/cart/${itemId}/`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            itemId
        }),
    });
    // const data = await res.json();
    // dispatch(deleteAnItem(itemId))
    return dispatch(deleteAnItem(itemId))
}


// Reducer:

const initialState = {items: null, total: 0}
export default function reducer (state=initialState, action) {
    let total
    let count
    switch(action.type) {
        case GET_CARTS_ITEMS:
            return {...state, ...action.payload}

        case ADD_ITEM_TO_CART:
            total = state.total
            count = state.count
            state.items[action.payload.id] = action.payload
            return {...state, total: total + 24}

        case ADD_COUNT:
            state.items[action.payload.cartItemId].quantity = action.payload.count
            return { ...state }

        case DELETE_AN_ITEM:
            // let newState = {...state}
            // delete newState[action.payload.itemId]
            // return newState;
            // return {...state, ...action.payload};
            let newState = {...state}
            delete newState[action.itemId]
            newState.total -= 24
            return newState;

        case DELETE_COUNT:
            state.items[action.payload.cartItemId].quantity = action.payload.count
            return { ...state }

        default:
            return state;
    }
}