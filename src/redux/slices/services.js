import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
    name : "services-slice" , 
    initialState : {}, 
    reducers : {
        increment(state,action) {} , 
        decrement(state,action) {},
        showServices(state,action) {},
        hideServices(state,action) {},
    }
});

export const servicesSliceReducer = servicesSlice.reducer;
export const servicesSliceActions = servicesSlice.actions;