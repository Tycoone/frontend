import React,{useState} from 'react';
import Authpage from '../pages/authpage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './Auth/AuthContext'
import { ModeProvider } from './Auth/ModeContext'
import Nav from './ui/components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Profile from '../pages/profile';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.type === 'light' ? '#fcfcfc' : theme.palette.background,
        minHeight: '100vh',
        transition: 'all 0.1s'
    },
    appRoot: {
        padding: theme.spacing(14, 14.9),
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
            type: darkMode? 'dark':'light',
            // primary: {
            //     main: '#7d89f0'
            // },
            primary: {
                // light: '#757ce8',
                main: '#7d89f0',
                // dark: '#002884',
                // contrastText: '#fff',
            },
            //   secondary: {
            //     light: '#ff7961',
            //     main: '#f44336',
            //     dark: '#ba000d',
            //     contrastText: '#000',
            //   },
            elevationDark: `  12px 12px 24px #393939, 
            -12px -12px 24px #393939`,
            elevationLight: `  7px 7px 14px #efefef, 
            -7px -7px 14px #f9f9f9`,
            // secondary: {
            //     main: '#7D89F0'
            // },
            button:{
                elevation:{
                    light:`  8px 8px 16px #e5e7f8, 
                    -8px -8px 16px #eff1ff  `
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
const AppRoute = ({mode}) => {
    return (
        <Router>
            <Switch>
                <Route  path="/home">
                    <AppHome  mode={mode}  />
                </Route>
                <Route path="/profile">
                    <AppHome mode={mode} >
                        <Profile />
                    </AppHome>
                </Route>
                <Route path="/" exact>
                    <AppHome  mode={mode}  />
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
const AppHome = ({ children,mode }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={0}>
            <div> <Nav mode={mode} />
                <div className={classes.appRoot}>
                    {children}
                </div>
            </div>
        </Paper>
    )
}

export default App
