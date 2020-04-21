import * as React from 'react';
import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/reducers';
import { CheckoutItem } from '../../components/checkout-item/checkout-item';

export const CheckoutPage: React.FC = () => {
    const { quantity, cartItems, total } = useSelector((state: RootState) => ({
        quantity: state.cart.quantity,
        cartItems: state.cart.cartItems,
        total: state.cart.total,
    }));

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity {quantity}</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => (
                <CheckoutItem key={item.id} item={item} />
            ))}
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
};
