import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import {useDispatch, useSelector } from 'react-redux'
import { useParams, Redirect } from "react-router-dom";
import { useHistory, NavLink} from "react-router-dom";
import { getCategoryItems } from "../../store/items";

function CategoryItems() {
    return (
        <div>CategoryItems</div>
    )
}

export default CategoryItems;