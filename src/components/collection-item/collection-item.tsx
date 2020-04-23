import * as React from 'react';
import './collection-item.styles.scss';
import { CustomButton } from '../custom-button/custom-button';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart-slice';
import { Item } from '../../store/shop/shop-slice';

interface CollectionItemProps {
    item: Item;
}

export const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => dispatch(addItemToCart(item))}> Add to Cart </CustomButton>
        </div>
    );
};
