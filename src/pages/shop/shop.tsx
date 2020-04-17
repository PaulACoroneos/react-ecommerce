import * as React from 'react';
import { CollectionPreview } from '../../components/collection-preview/collection-preview';
import { SHOP_DATA } from './shop.constants';

export const ShopPage: React.FC = () => {
    const [collections] = React.useState(SHOP_DATA);
    return (
        <div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};
