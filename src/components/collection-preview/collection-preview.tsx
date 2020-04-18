import * as React from 'react';
import './collection-preview.styles.scss';
import { Items } from '../../pages/shop/shop.constants';
import { CollectionItem } from '../collection-item/collection-item';

interface CollectionPreviewProps {
    title: string;
    items: Items[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((_, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} {...item} />
                    ))}
            </div>
        </div>
    );
};