import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создание асинхронной функции для запроса данных
export const fetchPostTasks = createAsyncThunk('tasks/fetchPostTasks', async (postData) => {
    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
});
export const fetchGetData = createAsyncThunk('tasks/fetchGetData', async (id) => {
    try {
        const response = await fetch(`http://nova-hub.ru:9999/tasktasks/users/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
});

// Создание слайса
const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        data: null,
        loading: false,
        error: null,
        success: null,
        tasks: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.success = null
            })
            .addCase(fetchPostTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.success = true
            })
            .addCase(fetchPostTasks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
                state.success = false
            })
            .addCase(fetchGetData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGetData.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchGetData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Экспорт экшенов и редюсеров
export default tasksSlice.reducer;
export const { actions } = tasksSlice;
