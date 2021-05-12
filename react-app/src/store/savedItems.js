// Constants:
 const  GET_SAVED_ITEMS = "savedItems/GET_SAVED_ITEMS";
 const  SAVE_AN_ITEM = "savedItems/SAVE_AN_ITEM";
 const  UN_SAVE_AN_ITEM = "savedItems/UN_SAVE_AN_ITEM";


 // Actions:

 //1- get all of the saved items:
 const getItems = (items) => ({
     type: GET_SAVED_ITEMS,
     payload: items
  })

//2- save an item:
const saveAnItem = (item) => ({
    type: SAVE_AN_ITEM,
    payload: item
})

// 3- delete an item:
const deleteAnItem = () => ({
    type: UN_SAVE_AN_ITEM
})

// Thunks:
// 1- get saved items:
export const getItemsThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/${id}/saveditems`, {
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

// 2- save an item:
// export const saveAnItemThunk = (params) => async (dispatch) => {
//     const { userId, itemId } = params;
//     const res = await fetch(`/api/saveditems/${itemId}`, {
//         method: 'POST',
//         userId,
//         itemId,
//     })
//     const data = await res.json();
//     dispatch(saveAnItem(data))
// }

// 3- delete an item:
// export const deleteAnItemThunk = (itemId) => async (dispatch) => {
//     const res = await fetch(`/api/saveditems/${itemId}`, {
//         method: 'DELETE', 
//         itemId
//     })
//     const data = await res.json();
//     dispatch(deleteAnItem(data))
// }


// Reducer:

const initialState = {items: null}
export default function reducer (state=initialState, action) {
    switch(action.type) {
        case GET_SAVED_ITEMS:
            return {...state, ...action.payload}
        // case SAVE_AN_ITEM:
        //     return {...state, items: action.payload}
        default:
            return state;
    }
}