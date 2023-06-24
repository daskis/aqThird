import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    activeTab: "Почва",
    isActive: false
}

export const infosSlice = createSlice({
    name: "infos",
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.activeTab = action.payload
        },
        setIsActive: (state, action) => {
            state.isActive = !state.isActive
        }
    }
})
export const {setActive, setIsActive} = infosSlice.actions
export default infosSlice.reducer