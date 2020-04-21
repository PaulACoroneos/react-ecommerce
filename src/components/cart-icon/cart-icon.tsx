import * as React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartVisibility } from '../../store/cart/cart-slice';
import { RootState } from '../../store/reducers/reducers';

export const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemQty = useSelector((state: RootState) =>
        state.cart.cartItems.reduce((qty, item) => qty + (item?.quantity || 0), 0),
    );
    return (
        <div className="cart-icon" onClick={() => dispatch(toggleCartVisibility())}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartItemQty}</span>
        </div>
    );
};
