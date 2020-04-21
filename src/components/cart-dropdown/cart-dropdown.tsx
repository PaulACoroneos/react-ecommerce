import * as React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../custom-button/custom-button';
import { CartItem } from '../cart-item/cart-item';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/reducers';
import { useHistory } from 'react-router-dom';

export const CartDropdown = () => {
    const cartItems = useSelector((state: RootState) => state.cart.cartItems);
    const history = useHistory();
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} item={item} />)
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};
