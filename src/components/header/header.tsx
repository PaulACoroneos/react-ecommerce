import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../store/reducers/reducers';
import { CartIcon } from '../cart-icon/cart-icon';
import { CartDropdown } from '../cart-dropdown/cart-dropdown';

const Header: React.FC = () => {
    const { isLoggedIn, isCartHidden } = useSelector(
        (state: RootState) => ({
            isLoggedIn: state.user.id,
            isCartHidden: state.cart.hidden,
        }),
        shallowEqual,
    );

    return (
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
                {isLoggedIn ? (
                    <div className="option" onClick={() => auth.signOut()}>
                        Sign Out
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )}
                <CartIcon />
            </div>
            {!isCartHidden && <CartDropdown />}
        </div>
    );
};

export default Header;
