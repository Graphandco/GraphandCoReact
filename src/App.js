import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Header from './components/Header';
import Home from './components/Home';
import Tips from './components/Tips';
import About from './components/About';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/tips'>
                        <Tips />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
};

export default App;
