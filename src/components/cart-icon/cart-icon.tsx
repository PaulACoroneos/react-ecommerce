import * as React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch } from 'react-redux';
import { toggleCartVisibility } from '../../store/cart/cart-slice';

export const CartIcon = () => {
    const dispatch = useDispatch();
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartVisibility())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};
