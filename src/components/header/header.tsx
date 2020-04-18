import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { User } from 'firebase';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

interface HeaderProps {
    currentUser: User | null;
}

export const Header: React.FC<HeaderProps> = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {currentUser ? (
                <div className="option" onClick={() => auth.signOut()}>
                    Sign Out
                </div>
            ) : (
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
            )}
        </div>
    </div>
);
