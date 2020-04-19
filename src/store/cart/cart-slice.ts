import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hidden: true,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartVisibility(state) {
            state.hidden = !state.hidden;
        },
    },
});

export const { toggleCartVisibility } = cartSlice.actions;

export default cartSlice.reducer;
