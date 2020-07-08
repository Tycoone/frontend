import React from 'react';
import Authpage from '../pages/authpage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './Auth/AuthContext'
import Nav from './ui/components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from '../pages/signin';
import Signup from '../pages/signup';

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
                <AppRoute />
            </ThemeProvider>
        </AuthProvider>

    )
}
const AppRoute = () => {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <AppHome />
                </Route>
                <Route path="/" exact>
                    <AppHome />
                </Route>
                <Route path="/signin">
                    <Authpage>
                        <Signin />
                    </Authpage>
                </Route>
                <Route path="/signup">
                    <Authpage>
                        <Signup />
                    </Authpage>
                </Route>
            </Switch>
        </Router>
    )
};
const AppHome = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}

export default App
