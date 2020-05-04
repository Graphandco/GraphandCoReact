import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/reset.css';
import './styles/main.scss';
import Header from './components/Header';
import Home from './components/Home';
import Tips from './components/Tips';
import TipSingle from './components/TipSingle';
import CreateTip from './components/CreateTip';
import About from './components/About';

//Material UI
import {
    createMuiTheme,
    ThemeProvider,
    useTheme,
} from '@material-ui/core/styles';

const App = () => {
    //Set Material Theme
    const themes = useTheme();
    const monTheme = createMuiTheme({
        palette: {
            type: 'dark',
            secondary: {
                main: '#FFFFFF',
            },
        },
    });

    return (
        <ThemeProvider theme={monTheme}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact>
                        <Home />
                    </Route>
                    <Route path='/tips' exact>
                        <Tips />
                    </Route>
                    <Route path='/tips/:id'>
                        <TipSingle />
                    </Route>
                    <Route path='/create-tip'>
                        <CreateTip />
                    </Route>
                    <Route path='/about'>
                        <About />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
