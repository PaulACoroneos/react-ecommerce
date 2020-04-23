import * as React from 'react';
import { MenuItem } from '../menu-item/menu-item';
import './directory.styles.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers/reducers';

export const Directory: React.FC = () => {
    const sections = useSelector((state: RootState) => state.directory.sections);

    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    );
};
