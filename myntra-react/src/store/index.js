
import { configureStore, createSlice } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";
import FetchstatusSlice from "./fetchStatusSlice";
import BagSlice from "./bagSlice";


const myntastore =configureStore({
    reducer:
    {
        items: itemsSlice.reducer,
        fetchStatus:FetchstatusSlice.reducer,
        bag:BagSlice.reducer
    }
})



export default myntastore;