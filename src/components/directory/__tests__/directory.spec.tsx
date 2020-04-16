import * as React from 'react';
import { Directory } from '../directory';
import { render, screen } from '@testing-library/react';

describe('<Directory />', () => {
    it('renders a directory with at least 1 menu item corresponding to hats', () => {
        render(<Directory />);
        expect(screen.queryByText('hats')).toBeInTheDocument();
    });
});
