import * as React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
    type: 'button' | 'submit' | 'reset' | undefined;
    value: any;
    onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ children, ...otherProps }) => (
    <button className="custom-button" {...otherProps}>
        {children}
    </button>
);
