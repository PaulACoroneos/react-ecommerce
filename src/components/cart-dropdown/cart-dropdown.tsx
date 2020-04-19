import * as React from 'react';
import './cart-dropdown.styles.scss';
import { CustomButton } from '../custom-button/custom-button';

export const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-tems"></div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};
