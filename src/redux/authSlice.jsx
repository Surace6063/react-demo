import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null
    },
    reducers: {
        login: (state,action) => {
            state.user = action.payload  // action.payload => data send when login reducer is used
        },
        logout: (state) => {
            state.user = null
        }
    }
})


export const {login,logout} = authSlice.actions

export default authSlice.reducer