import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import userApi from 'api/userApi'

export const register = createAsyncThunk('user/register', async (payload) => {
    console.log('payload: ', payload)
    const response = await userApi.register(payload)
    console.log('response: ', response)
    localStorage.setItem('access_token', response.jwt)
    localStorage.setItem('user', JSON.stringify(response.user))
    return response.user
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: {},
        settings: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            console.log('state: ', state)
            console.log('action: ', action)
            state.current = action.payload
        })
    },
})

const { reducer } = userSlice

export default reducer
