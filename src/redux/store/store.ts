import { configureStore } from "@reduxjs/toolkit";
import todoreducer from "../slice/todoSlice";


export const store = configureStore({
    reducer:{
        todos:todoreducer,
    },
})

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;