import React from 'react';
import Authpage from '../pages/authpage';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palete: {
        // type:'dark',
        // primary: {
        //     main: '#7D89F0'
        // },
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
        <ThemeProvider theme={theme}>
            <div>
                <Authpage />
            </div>
        </ThemeProvider>
    )
}

export default App
