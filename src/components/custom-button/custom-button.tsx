import * as React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    value?: any;
    onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
    onClick?: (e: any) => void;
    isGoogleSignIn?: boolean | undefined;
    inverted?: boolean | undefined;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);
