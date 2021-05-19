// import reduce from "./items";

// Constant:
const GET_ALL_MAINCATEGORIES = "maincategories/GET_ALL_MAINCATEGORIES";


// Action Creators: 
const all_maincategories = (maincategories) => ({
    type: GET_ALL_MAINCATEGORIES,
    payload: maincategories
})

// Thunk:
export const allMainCategories = () => async (dispatch) => {
    const res = await fetch ('/api/maincategories/', {
        method: "GET"
    });
    console.log(res)
    if (res.ok) {
        const {maincategories} = await res.json()
        // debugger
        // console.log(">>>>>>>>>>>", maincategories)
        dispatch(all_maincategories(maincategories))
        return maincategories
    }
}

// Reducer:

let initialState = { }
export default function reducer( state=initialState, action ) {
    switch (action.type) {
        case GET_ALL_MAINCATEGORIES:
            // const mCategories = action.payload.maincategories;
            // const mCatObj = {};
            // for (const mCategory of mCategories) {
            //     mCatObj[mCategory.id] = mCategory
            // }
            return {...state, ...action.payload}

        default:
            return state;
    }
}