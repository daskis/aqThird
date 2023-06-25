import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создание асинхронной функции для запроса данных
export const fetchSectors = createAsyncThunk('sectors/fetchSectors', async () => {
    try {
        const response = await fetch('http://nova-hub.ru:9999/field/sectors');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
});

// Создание слайса
const sectorsSlice = createSlice({
    name: 'sectors',
    initialState: {
        data: null,
        loading: false,
        error: null,
        success: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSectors.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = null
            })
            .addCase(fetchSectors.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.success = true
            })
            .addCase(fetchSectors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false
            });
    },
});

// Экспорт экшенов и редюсеров
export default sectorsSlice.reducer;
export const { actions } = sectorsSlice;
