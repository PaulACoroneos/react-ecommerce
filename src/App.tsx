import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/homepage/homepage';
import { ShopPage } from './pages/shop/shop';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Header } from './components/header/header';
import { auth } from './firebase/firebase.utils';
import { User } from 'firebase';

const App = () => {
    const [currentUser, setCurrentUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
        return () => unsubscribe();
    }, []);

    console.log('hey ', currentUser);

    return (
        <div>
            <Header currentUser={currentUser} />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/signin" component={SignInAndSignUpPage} />
            </Switch>
        </div>
    );
};

export default App;
