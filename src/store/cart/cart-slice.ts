import { addItemToCartUtil } from './cart.utils';
import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../../pages/shop/shop.constants';

interface Slicestate {
    hidden: boolean;
    cartItems: Item[];
}

const initialState: Slicestate = {
    hidden: true,
    cartItems: [],
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleCartVisibility(state) {
            state.hidden = !state.hidden;
        },
        addItemToCart(state, action) {
            state.cartItems = addItemToCartUtil(state.cartItems, action.payload);
        },
    },
});

export const { toggleCartVisibility, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
