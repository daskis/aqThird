import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import infosSlice from "../features/infosSlice.js";
import usersSlice from "../features/usersSlice.js";
import sectorsSlice from "../features/sectorsSlice.js";
import tasksSlice from "../features/tasksSlice.js";

export const store = configureStore({
    reducer: {
        infos: infosSlice,
        users: usersSlice,
        sectors: sectorsSlice,
        tasks: tasksSlice
    },
    middleware: [...getDefaultMiddleware(), thunk]
});
