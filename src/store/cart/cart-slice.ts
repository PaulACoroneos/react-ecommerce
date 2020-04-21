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
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.quantity = state.cartItems.reduce((qty, item) => qty + (item?.quantity || 0), 0);
            state.total = state.cartItems.reduce(
                (total, item) => total + (item?.price || 0) * (item?.quantity || 0),
                0,
            );
        },
        removeSingleItemFromCart(state, action) {
            state.cartItems.forEach((cartItem) =>
                cartItem.id === action.payload.id && cartItem.quantity
                    ? (cartItem.quantity -= 1)
                    : cartItem.quantity || 0,
            );
            state.cartItems = state.cartItems.filter((item) => item.quantity && item.quantity > 0);
            state.quantity = state.quantity - 1;
            state.total = state.total - action.payload.price;
        },
    },
});

export const { toggleCartVisibility, addItemToCart, removeItemFromCart, removeSingleItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
