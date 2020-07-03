import React from 'react';
import SignIn from './pages/SignIn';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';



function App() {
    const theme = createMuiTheme({
        palette:{
            type:'light'
        },
        typography:{
            fontFamily: 'Source Sans Pro , sans-serif'
        }
    })
    return (
        <div>
            <ThemeProvider theme={theme}>
                <SignIn/>
            </ThemeProvider>
        </div>
    );
}

export default App
