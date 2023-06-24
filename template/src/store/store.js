import { configureStore } from '@reduxjs/toolkit'
import infosSlice from "../features/infosSlice.js";

export const store = configureStore({
    reducer: {
        infos: infosSlice
    },
})