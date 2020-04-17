import React from 'react';
import './App.scss';
import { HomePage } from './pages/homepage/homepage';
import { ShopPage } from './pages/shop/shop';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
};

export default App;
