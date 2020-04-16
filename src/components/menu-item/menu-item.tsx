import * as React from 'react';
import './menu-item.styles.scss';

interface MenuItemProps {
    title: string;
    imageUrl: string;
    size: string | undefined;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size }) => (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className={`menu-item ${size}`}>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);
