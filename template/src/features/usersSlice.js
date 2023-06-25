import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Создание асинхронной функции для запроса данных
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const response = await fetch('http://nova-hub.ru:9999/user/');
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
});
export const fetchUser = createAsyncThunk('users/fetchUser', async (id) => {
    try {
        const response = await fetch(`http://nova-hub.ru:9999/user/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
});

// Создание слайса
const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: null,
        loading: false,
        error: null,
        user: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    },
});

// Экспорт экшенов и редюсеров
export default userSlice.reducer;
export const {actions} = userSlice;
