import * as React from 'react';
import { CollectionsOverview } from '../../components/collections-overview/collections-overview';
import { Route, useRouteMatch } from 'react-router-dom';
import { CollectionPage } from '../collection/collection';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { useDispatch } from 'react-redux';
import { updateShopDataFromFirebase } from '../../store/shop/shop-slice';

export const ShopPage: React.FC = () => {
    const match = useRouteMatch();
    const dispatch = useDispatch();

    React.useEffect(() => {
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async (snapshot) => {
            const collection = convertCollectionsSnapshotToMap(snapshot);
            dispatch(updateShopDataFromFirebase(collection));
        });
    });

    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    );
};
