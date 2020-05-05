import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './shared/styles/reset.css';
import './shared/styles/main.scss';
import Header from './shared/components/Header';
import Home from './home/Home';
import Tips from './tips/pages/TipsList';
import TipSingle from './tips/pages/TipSingle';
import CreateTip from './tips/components/CreateTip';
import About from './about/About';

//Material UI
import {
    createMuiTheme,
    ThemeProvider,
    //useTheme,
} from '@material-ui/core/styles';

const App = () => {
    //Set Material Theme
    //const themes = useTheme();
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
