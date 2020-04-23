import * as React from 'react';
import './collection.styles.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/reducers';
import { Item } from '../../store/shop/shop-slice';
import { CollectionItem } from '../../components/collection-item/collection-item';

interface CollectionPageProps {
    match: any;
}
export const CollectionPage: React.FC<CollectionPageProps> = ({ match }) => {
    const collection = useSelector((state: RootState) => state.shop.shopData[match.params.collectionId]);
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {items.map((item: Item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};
