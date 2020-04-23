import * as React from 'react';
import './checkout-item.styles.scss';
import { useDispatch } from 'react-redux';
import { removeSingleItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart-slice';
import { Item } from '../../store/shop/shop-slice';

interface CheckoutItemProps {
    item: Item;
}

export const CheckoutItem: React.FC<CheckoutItemProps> = ({ item }) => {
    const { name, quantity, price, imageUrl } = item;
    const dispatch = useDispatch();
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={() => dispatch(removeSingleItemFromCart(item))} className="arrow">
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div onClick={() => dispatch(addItemToCart(item))} className="arrow">
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div onClick={() => dispatch(removeItemFromCart(item))} className="remove-button">
                &#10005;
            </div>
        </div>
    );
};
