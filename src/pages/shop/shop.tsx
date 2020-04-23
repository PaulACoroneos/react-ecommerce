import * as React from 'react';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview';
import { Route, useRouteMatch } from 'react-router-dom';
import { CollectionPage } from '../collection/collection';

export const ShopPage: React.FC = () => {
    const match = useRouteMatch();
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};
