import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT } from "../data/items";
const BagSlice = createSlice(
    {
        name:'bag',
        initialState: [],
        reducers:{
        addToBag: (state,action)=>{
            console.log('rducer',state,action.payload)
            state.push(action.payload);
        },
        RemoveFromBag: (state,action)=>{
            console.log('rducer',state,action.payload)
            return state.filter((itemId) => itemId !== action.payload);
        }
    }
}
);

export const bagActions = BagSlice.actions

export default BagSlice;