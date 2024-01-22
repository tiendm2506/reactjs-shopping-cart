import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import userApi from 'api/userApi'
import { STORAGE_KEY } from 'constants/index'

export const register = createAsyncThunk('user/register', async (payload) => {
    console.log('payload: ', payload)
    const response = await userApi.register(payload)
    console.log('response: ', response)
    localStorage.setItem(STORAGE_KEY.TOKEN, response.jwt)
    localStorage.setItem(STORAGE_KEY.USER, JSON.stringify(response.user))
    return response.user
})

export const login = createAsyncThunk('user/login', async (payload) => {
    console.log('payload: ', payload)
    const response = await userApi.login(payload)
    console.log('response: ', response)
    localStorage.setItem(STORAGE_KEY.TOKEN, response.jwt)
    localStorage.setItem(STORAGE_KEY.USER, JSON.stringify(response.user))
    return response.user
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: JSON.parse(localStorage.getItem(STORAGE_KEY.USER)) || {},
        settings: {},
    },
    reducers: {
        logOut(state){
            localStorage.removeItem(STORAGE_KEY.USER)
            localStorage.removeItem(STORAGE_KEY.TOKEN)
            state.current = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.fulfilled, (state, action) => {
            state.current = action.payload
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.current = action.payload
        })
    },
})

const { actions, reducer } = userSlice

export const {logOut} = actions

export default reducer
