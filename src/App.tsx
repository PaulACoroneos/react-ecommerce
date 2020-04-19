import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/homepage/homepage';
import { ShopPage } from './pages/shop/shop';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { Header } from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
    const [currentUser, setCurrentUser] = React.useState<any>(null); //TODO: Type the user data we use in app

    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef?.onSnapshot((snapShot) => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        },
                    });
                });
            }
            setCurrentUser(null);
        });
        return () => unsubscribe();
    }, []);

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
