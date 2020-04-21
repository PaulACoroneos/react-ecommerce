import { addItemToCartUtil } from './cart.utils';
import { createSlice } from '@reduxjs/toolkit';
import { Item } from '../../pages/shop/shop.constants';

interface Slicestate {
    hidden: boolean;
    cartItems: Item[];
    quantity: number;
    total: number;
}

const initialState: Slicestate = {
    hidden: true,
    cartItems: [],
    quantity: 0,
    total: 0,
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
            state.quantity = state.cartItems.reduce((qty, item) => qty + (item?.quantity || 0), 0);
            state.total = state.cartItems.reduce(
                (total, item) => total + (item?.price || 0) * (item?.quantity || 0),
                0,
            );
        },
    },
});

export const { toggleCartVisibility, addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
