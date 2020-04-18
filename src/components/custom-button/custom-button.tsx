import * as React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined;
    value?: any;
    onSubmit?: (e: React.FormEvent<HTMLButtonElement>) => void;
    onClick?: (e: any) => void;
    isGoogleSignIn?: boolean | undefined;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);
