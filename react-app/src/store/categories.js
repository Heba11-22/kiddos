// Coanstants:
const GET_A_CATEGORY = "category/GET_A_CATEGORY";


// Action: 
const getCategory = (category) => ({
    type: GET_A_CATEGORY,
    payload: category
});

// Thunck: 
export const getCategoryThunk = (id) => async(dispatch) => {
    const res = await fetch (`/api/maincategories/categories/${id}/`, {
        method: "GET"
    });
    if (res.ok) {
        const category = await res.json();
        console.log(">>>MMM>>MMM",category);
        dispatch(getCategory(category))
        return category;
    }
}

// Reducer: 
const initial = {category: null}
export default function reducer (state=initial, action) {
    switch (action.type) {
        case GET_A_CATEGORY:
            return { category: action.payload};
        default:
            return state;
    }
}