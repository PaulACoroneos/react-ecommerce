import * as React from 'react';
import { MenuItem } from '../menu-item';
import { render, screen } from '@testing-library/react';

describe('<MenuItem />', () => {
    it('renders a menu item with no size value', () => {
        render(<MenuItem title="title" imageUrl="imageUrl" size="" />);
        expect(screen.queryByText('TITLE')).toBeInTheDocument();
        expect(screen.queryByText('SHOP NOW')).toBeInTheDocument();
    });
});
