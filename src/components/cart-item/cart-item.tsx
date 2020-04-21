import * as React from 'react';
import './cart-item.styles.scss';
import { Item } from '../../pages/shop/shop.constants';

interface CartItemProps {
    item: Item;
}

export const CartItem: React.FC<CartItemProps> = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    );
};
