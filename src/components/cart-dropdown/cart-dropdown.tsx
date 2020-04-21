import * as React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../custom-button/custom-button';
import { CartItem } from '../cart-item/cart-item';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/reducers';

export const CartDropdown = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);

    return (
        <div className="cart-dropdown">
            <div className="cart-tems">
                {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};
