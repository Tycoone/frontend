import { fade } from '@material-ui/core';

export const signinStyle = (theme) => {
    return {
        paper: {
            margin: theme.spacing(10, 4),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        welcome: {
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '49px',
            color: '#000000',
            textAlign: 'center'
        },
        signinText: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '20px',
            lineHeight: '45px',
            color: '#000000',
            textAlign: 'center'
        },
        formContainer: {
            padding: theme.spacing(2, 0)
        },
        form: {
            width: '100%'
        },
        input: {
            background: '#FCFCFC',
            borderColor: ' rgba(52, 52, 52, 0.24)',
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
            padding: "15px",
            backgroundColor: theme.palette.primary.main,
            '&:hover': {
                backgroundColor: fade(theme.palette.primary.main, 0.7)
            }
        },
        forgotPasword: {
            float: 'right',
            margin: '9px 2px'
        }
    }
}