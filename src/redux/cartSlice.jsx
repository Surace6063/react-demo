import { createSlice } from "@reduxjs/toolkit"

// create slice for cart quantity state
const cartSlice = createSlice({
    name: 'cart',  // slice name
    initialState: {
        quantity: 0,  // initial value of quantitty state
    },
    reducers: {
        // action to increase the quantity state
        increment: (state) => {
            state.quantity += 1
        },
        // action to decrease the quantity state
        decrement: (state) => {
            state.quantity -= 1
        }
    }
})

// export actions to use in components
export const {increment,decrement} = cartSlice.actions

// export slice to include in store
export default cartSlice.reducer