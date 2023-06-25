import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {fetchSectors} from "./sectorsSlice.js";

export const fetchInfos = createAsyncThunk(
    "infos/fetchInfos",
    async (id) => {
        try {
            const response = await fetch(`http://nova-hub.ru:9999/field/grape/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

const initialState = {
    activeTab: "Почва",
    isActive: false,
    data: null,
    commonInfo: null,
    error: null,
    loading: null
};

export const infosSlice = createSlice({
    name: "infos",
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.activeTab = action.payload;
        },
        setIsActive: (state, action) => {
            state.isActive = !state.isActive;
        },
        setCommonInfo: (state, actions) => {
            state.commonInfo = actions.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInfos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchInfos.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchInfos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const {setActive, setIsActive, setCommonInfo} = infosSlice.actions;
export default infosSlice.reducer;
export const {actions} = infosSlice;
