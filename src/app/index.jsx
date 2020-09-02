import React, { useState } from 'react';
import Error404 from '../views/pages/Error/Error-404';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './auth/AuthContext'
import { ModeProvider } from './auth/ModeContext'
import Nav from '../components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from '../views/pages/signin';
import Signup from '../views/pages/signup';
import Profile from '../views/pages/profile';
import Notifications from '../views/pages/notifications'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Connect from '../views/pages/Connect';
import Feed from '../views/pages/Feed/Feed';
import { userDetails, notifications } from '../helpers/db'
import { ProtectedRoute } from '../auth/protected-routes'

const useStyles = makeStyles((theme) => ({
    root: {
        // Work on Dark Mode Here
        backgroundColor: theme.palette.type === 'light' ? '#fcfcfc' : 'theme.palette.background',
        minHeight: '100vh',
        transition: 'all 0.1s',
    },
    appRoot: {
        padding: theme.spacing(14, 14.7),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(1),
        },
        [theme.breakpoints.down('md')]: {
            padding: theme.spacing(3),
        },

    }
}));

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createMuiTheme({
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#7d89f0',
            },
            elevationDark: `  12px 12px 24px #393939, 
            -12px -12px 24px #393939`,
            elevationLight: `  7px 7px 14px #efefef, 
            -7px -7px 14px #f9f9f9`,
            button: {
                elevation: {
                    light: `7px 7px 17px rgba(229, 232, 255,0.5), 
                    -7px -7px 17px rgba(229, 232, 255,0.5)`
                },
                hoverElevation: {
                    light: `9px 9px 19px rgba(229, 232, 255,0.8), 
                    -9px -9px 19px rgba(229, 232, 255,0.8)`
                }
            },
            card: {
                elevation: {
                    light: `  3px 3px 9px rgba(229, 232, 255,0.274), 
        -3px -3px 9px rgba(229, 232, 255,0.274)`
                },
                hoverElevation: {
                    light: `9px 9px 20px rgba(229, 232, 255,0.7), 
                    -9px -9px 20px rgba(229, 232, 255,0.7)`
                }
            }
        },
        typography: {
            fontFamily: 'Source Sans Pro'
        },
    });
    return (
        <AuthProvider>
            <ModeProvider>

                <ThemeProvider theme={theme}>
                    <AppRoute mode={[darkMode, setDarkMode]} />
                </ThemeProvider>
            </ModeProvider>
        </AuthProvider>

    )
}
const AppRoute = ({ mode }) => {
    return (
        <Router>
            <Switch>
                <ProtectedRoute exact path="/home" component={() =>
                    <AppHome mode={mode} />}>
                </ProtectedRoute>

                <ProtectedRoute exact path="/" component={() =>
                    <AppHome activeMode="home" mode={mode}>
                        <Feed connectionRequest={userDetails.connectionRequest} />
                    </AppHome>}>
                </ProtectedRoute>

                <ProtectedRoute exact path="/connections" component={() =>
                    <AppHome mode={mode} activeMode="connections" >
                        <Connect connectionRequest={userDetails.connectionRequest} />
                    </AppHome>}>
                </ProtectedRoute>

                <ProtectedRoute exact path="/messages" component={() =>
                    <AppHome mode={mode} activeMode="messages">
                    </AppHome>}>
                </ProtectedRoute>

                <ProtectedRoute exact path="/notifications" component={() =>
                    <AppHome mode={mode} activeMode="notifications">
                        <Notifications notifications={notifications} />
                    </AppHome>}>
                </ProtectedRoute>

                <ProtectedRoute exact path="/profile" component={() =>
                    <AppHome mode={mode} >
                        <Profile user={userDetails} />
                    </AppHome>}>
                </ProtectedRoute>

                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>

                <ProtectedRoute path="*">
                    <AppHome mode={mode} >
                        {/* {window.document.title = "404 Page Not Found"} */}
                        <Error404 />
                    </AppHome>
                </ProtectedRoute>
            </Switch>
        </Router>
    )
};
const AppHome = (props) => {
    const { children, mode, activeMode } = props;
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={0}>
            <div> <Nav activeMode={activeMode} mode={mode} />
                <div className={classes.appRoot}>
                    {children}
                </div>
            </div>
        </Paper>
    )
}

export default App
