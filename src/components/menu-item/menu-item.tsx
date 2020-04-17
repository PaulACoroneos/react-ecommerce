import * as React from 'react';
import './menu-item.styles.scss';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface MenuItemProps {
    title: string;
    imageUrl: string;
    size?: string | undefined;
    linkUrl: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory();
    const match = useRouteMatch();

    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};
