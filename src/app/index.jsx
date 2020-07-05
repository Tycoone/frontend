import React from 'react';
import Authpage from '../pages/authpage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './Auth/AuthContext'
import Nav from './ui/components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#3984dd'
        },
        // secondary: {
        //     main: '#7D89F0'
        // }
    },
    typography: {
        // fontFamily: 'Source Sans Pro'
    }
});

function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <div>
                            <Route path="/home">
                                <Nav />
                            </Route>
                            <Route path="/" exact>
                                <Nav />
                            </Route>
                            <Route path="/signin">
                                <Authpage />
                            </Route>
                            <Route path="/signup">
                                <Authpage />
                            </Route>
                        </div>
                    </Switch>
                </Router>
            </ThemeProvider>
        </AuthProvider>

    )
}

export default App
