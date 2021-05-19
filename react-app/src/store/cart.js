// Constants:
const  GET_CARTS_ITEMS = "cart/GET_CARTS_ITEMS";

// Actions:

 //1- get all of the cart items:
 const getItems = (items) => ({
    type: GET_CARTS_ITEMS,
    payload: items
 })

 // Thunks:
// 1- get saved items:
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

// Reducer:

const initialState = {items: null}
export default function reducer (state=initialState, action) {
    switch(action.type) {
        case GET_CARTS_ITEMS:
            return {...state, cart: action.payload}
        default:
            return state;
    }
}