import { configureStore } from "@reduxjs/toolkit";
import { servicesSliceActions } from "./slices/services";

export const reduxStore = configureStore({
    reducer : { 
        services : servicesSliceActions , 
    },
});
