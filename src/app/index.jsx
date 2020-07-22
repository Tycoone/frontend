import React, { useState } from 'react';
import Authpage from '../pages/authpage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { AuthProvider } from './Auth/AuthContext'
import { ModeProvider } from './Auth/ModeContext'
import Nav from './ui/components/Nav/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Profile from '../pages/profile';
import Notifications from '../pages/notifications'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Connect from '../pages/Connect/Connect';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.type === 'light' ? '#fcfcfc' : theme.palette.background,
        minHeight: '100vh',
        transition: 'all 0.1s'
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
            button: {
                elevation: {
                    light: `5px 5px 15px #e7e8f3, 
                    -5px -5px 15px #ebecf7`
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
const userDetails = {
    name: {
        first: "Joseph ",
        last: "Mark",
    },
    currentPosition: "Chief Executive Officer",
    currentCompany: "Milk Labs",
    currentLocation: "Lagos, Nigeria",
    connections: 500,
    images: {
        profileImage: "/assets/images/nzaki.jpg",
        coverImage: "/assets/images/coverImage_default.jpg",
    },
    about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt repellendus quas earum amet tenetur omnis fugit consequuntur pariatur? Eum atque consequatur ducimus architecto dicta nisi officiis sunt incidunt delectus odio.Autem itaque repellat fuga suscipit laboriosam eos tempora consequatur distinctio dicta temporibus, dolore inventore consectetur a voluptates, eligendi molestiae nulla? Ad ullam sint ipsum officia aut numquam natus magnam.",
    experience: [
        {
            id:178,
            position: "Program Manager for Youth",
            company: {
                name: "Virgin Atlantic",
                logo: "/assets/images/pages/virgin.png",
                pageLink: "/VirginAtlantic"
            },
            duration: {
                from: "June 2019",
                to: "May 2020",
                count: "(1year)"
            },
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt repellendus quas earum amet tenetur omnis fugit consequuntur pariatur? Eum atque consequatur ducimus architecto dicta nisi officiis sunt incidunt delectus odio.Autem itaque repellat fuga suscipit laboriosam eos tempora consequatur distinctio dicta temporibus, dolore inventore consectetur a voluptates, eligendi molestiae nulla? Ad ullam sint ipsum officia aut numquam natus magnam."
        },
        {
            id:247,
            position: "Chief Executive Officer",
            company: {
               
                name: "Milk Labs",
                logo: "/assets/images/pages/virgin.png",
                pageLink: "/VirginAtlantic"
            },
            duration: {
                from: "June 2019",
                to: "Present",
                count: ""
            },
            details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt repellendus quas earum amet tenetur omnis fugit consequuntur pariatur."
        }
    ],

    education: [
        {
            id:112,
            degree: "Bsc Computer Science",
            school: {
                name: "University of Texas",
                logo: "/assets/images/pages/virgin.png",
                resultLink: ""
            },
            duration: {
                from: "January 2012",
                to: "May 2015",
                count: ""
            },
            details: ""
        },
        {
            id:221,
            degree: "WASSCE",
            school: {
                name: "Premier College",
                logo: "/assets/images/pages/virgin.png",
                resultLink: ""
            },
            duration: {
                from: "June 2007",
                to: "2012",
                count: ""
            },
            details: ""
        }
    ],
    skillAndEndorsement: [
        {
            id:232,
            title: "Public Speaking",
            endorsedBy: "Richard Branson and 20 others"
        },
        {
            id:2332,
            title: "Content Creator",
            endorsedBy: "John Mark"
        }
    ],
    connectionRequest:[
        {
            id:1221,
            name:"Nzaki Michael",
            details:"CTO at Tech Skills Hack",
            profileImage:"/assets/images/nzaki.jpg"
        },
        {
            id:1232,
            name:"Iniobong Udoh",
            details:"CEO at Tech Skills Hack",
            profileImage:"/assets/images/ini.jpg"
        },
        {
            id:3222,
            name:"Esther James",
            details:"UI/UX deigner at She Codes",
            profileImage:"/assets/images/esther.jpg"
        },
        {
            id:4222,
            name:"Faith Itodo",
            details:"Fashion Designer",
            profileImage:"/assets/images/faith.jpg"
        },
        {
            id:5222,
            name:"Ogo Chukwu",
            details:"Video Maker/Editor",
            profileImage:"/assets/images/ogo__3.jpg"
        },
    ]
};
const notifications  = [
    {
        id:5222,
        details:"Ogo Chukwu just invited you to connect",
        image:"/assets/images/ogo__3.jpg",
        time:"Just Now",
        type:"connect"
    },
    {
        id:30981,
        details:"Esther James and 20 others viewed your profile",
        image:"/assets/images/esther.jpg",
        time:"43 minutes ago",
        type:"view"
    },
    {
        id:52432,
        details:"Iniobong Udoh shared a post you may be interested in.",
        image:"/assets/images/ini.jpg",
        time:"1 hour ago",
        type:"post"
    },
    {
        id:309881,
        details:"Faith Itodo invited you to connect",
        image:"/assets/images/faith.jpg",
        time:"1 hour ago",
        type:"connect"
    },
    {
        id:50902,
        details:"Ogo Chukwu just invited you to connect",
        image:"/assets/images/ogo__3.jpg",
        time:"Just Now",
        type:"connect"
    },
    {
        id:3001,
        details:"Esther James and 20 others viewed your profile",
        image:"/assets/images/esther.jpg",
        time:"43 minutes ago",
        type:"view"
    },
    {
        id:50002,
        details:"Iniobong Udoh shared a post you may be interested in.",
        image:"/assets/images/ini.jpg",
        time:"1 hour ago",
        type:"post"
    },
];

const AppRoute = ({ mode }) => {
    return (
        <Router>
            <Switch>
                <Route path="/home">
                    <AppHome mode={mode} />
                </Route>
                <Route path="/" exact>
                    <AppHome mode={mode} />
                </Route>
                <Route path="/profile">
                    <AppHome mode={mode} >
                        <Profile user={userDetails} />
                    </AppHome>
                </Route>
                <Route path="/notifications">
                    <AppHome mode={mode} >
                        <Notifications notifications={notifications} />
                    </AppHome>
                </Route>
                <Route path="/connections">
                    <AppHome mode={mode} >
                        <Connect connectionRequest={userDetails.connectionRequest} />
                    </AppHome>
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
const AppHome = ({ children, mode }) => {
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
