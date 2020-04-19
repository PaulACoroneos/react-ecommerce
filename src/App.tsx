import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/homepage/homepage';
import { ShopPage } from './pages/shop/shop';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser, clearCurrentUser } from './store/user/userSlice';
import { useDispatch } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef?.onSnapshot((snapshot) => {
                    dispatch(setCurrentUser(snapshot));
                });
            }
            dispatch(clearCurrentUser());
        });
        return () => unsubscribe();
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={SignInAndSignUpPage} />
            </Switch>
        </div>
    );
};

export default App;
