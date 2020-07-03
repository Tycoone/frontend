import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './styles.css';
import { Container, makeStyles, Button, Checkbox, FormControlLabel, Typography} from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Link as RLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => {
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
            backgroundColor: '#3984dd'
        },
        forgotPasword: {
            float: 'right',
            margin: '9px 2px'
        }
    }
});
const Signin = () => {
    const styles = useStyles();
    return (
        <Grid container>
            <Grid item xs={0} sm={0} md={2} lg={2}></Grid>
            <Grid item xs={12} sm={12} md={8} lg={8}>
                <Box>
                    <Container maxWidth="sm">
                        <div className={styles.paper}>
                            <Typography component="h4" variant="h4" className={styles.welcome}>
                                Welcome
                            </Typography>
                            <Typography component="h5" variant="h6" className={styles.signinText}>
                                Please sign in to continue
                            </Typography>
                            <div className={styles.formContainer} >
                                <form className={styles.form} noValidate method="post">
                                    <TextField
                                        className={styles.input}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                    // autoFocus
                                    />
                                    <TextField
                                        className={styles.input}
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        id="password"
                                        label="Pasword"
                                        name="pasword"
                                        autoComplete="current-pasword"
                                    />
                                    <Grid container>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <FormControlLabel
                                                control={<Checkbox value="remember" color="primary" />}
                                                label="Remember me"
                                            />
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <Typography>
                                                <Link href="#forgot-pasword" color="error" className={styles.forgotPasword}>
                                                    Forgot password?
                                                </Link>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        size="large"
                                        variant="contained"
                                        color="primary"
                                        className={styles.submit}
                                    >
                                        Sign In
                                    </Button>
                                    <Typography style={{ textAlign: 'center' }}>
                                        Dont’t have an account? {' '}
                                        <RLink to="/signup">
                                            <Link color="primary" className={styles.signup}>
                                                SignUp
                                            </Link>
                                        </RLink>
                                    </Typography>
                                </form>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Grid>
            <Grid item xs={0} sm={0} md={2} lg={2}></Grid>
        </Grid>
    );
};

Signin.propTypes = {

};

export default Signin;
