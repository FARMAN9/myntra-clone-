import { createSlice, current } from "@reduxjs/toolkit";
import { DEFAULT } from "../data/items";
const FetchstatusSlice = createSlice(
    {
        name:'fetchStatus',
        initialState:{
            fetchDone: false,
            currentlyFetching:false

        },
        reducers:{
            markFetchDone: (state)=>{
             state.fetchDone=true;
        },
        markFetchingStarted: (state)=>{
             state.currentlyFetching=true;
        },
        markFetchingFinished: (state)=>{
             state.currentlyFetching=false;
        }
    }
}
);

export const fetchStatusActions = FetchstatusSlice.actions

export default FetchstatusSlice;