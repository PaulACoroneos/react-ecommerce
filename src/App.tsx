import React from 'react';
import './App.scss';
import { HomePage } from './pages/homepage/homepage';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
    <div>
        <h1>HATS PAGE</h1>
    </div>
);

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/hats" component={HatsPage} />
            </Switch>
        </div>
    );
};

export default App;
