import * as React from 'react';
import './collections-overview.styles.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/reducers';
import { CollectionPreview } from '../collection-preview/collection-preview';

export const CollectionsOverview: React.FC = () => {
    const shopData = useSelector((state: RootState) => state.shop.shopData);
    return (
        <div className="collections-overview">
            {shopData.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </div>
    );
};
