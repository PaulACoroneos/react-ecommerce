import { Item } from '../../pages/shop/shop.constants';

export const addItemToCartUtil = (cartItems: Item[], cartItemToAdd: Item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity ? (cartItem.quantity += 1) : 1 }
                : cartItem,
        );
    }
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
