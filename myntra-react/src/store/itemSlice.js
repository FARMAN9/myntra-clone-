import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT } from "../data/items";
const itemsSlice = createSlice(
    {
        name:'items',
        initialState: [],
        reducers:{
        addInitialItems: (state,action)=>{
            console.log('rducer',state,action.payload)
            return action.payload;
        }
    }
}
);

export const itemsActions = itemsSlice.actions

export default itemsSlice;