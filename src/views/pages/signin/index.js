import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './styles.css';
import {
    Link,
    Container,
    makeStyles,
    Button,
    Checkbox,
    FormControlLabel,
    Typography
} from '@material-ui/core';
// import { Link as RLink } from 'react-router-dom';
import Authpage from '../authpage'
import auth from '../../../auth/auth'
import { signinStyle } from './Signin.style'
import store from '../../../hooks/useStorage';

const useStyles = makeStyles(signinStyle);
const Signin = (props) => {
    const styles = useStyles();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [loginData, setLoginData] = useState('')
    // const [resData, setResData] = useState()
    const updateEmail = (e) => {
        setEmail(e.target.value)
    };
    const updatePassword = (e) => {
        setPassword(e.target.value)
    };
    const updateLogin = (e) => {
        e.preventDefault();


        var formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api-tycoone.tk/api/users/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                if (result.code === 200 || result.code === 201) {
                    if (result.message.token) {
                        store.setToken(
                            JSON.stringify({
                                "token": result.message.token,
                                "expiresAt": result.message.expireAt
                            })
                        )
                        auth.login(()=>{window.location = "/"})
                    }
                }
            })
            .catch(error => console.error('error', error));
    }
    return (
        <Authpage>
            <Grid container>
                <Grid item xs={false} sm={false} md={2} lg={2}></Grid>
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
                                    <form className={styles.form} method="post"
                                        onSubmit={updateLogin}>
                                        <TextField
                                            className={styles.input}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={email}
                                            onChange={updateEmail}
                                            required
                                        // autoFocus
                                        />
                                        <TextField
                                            className={styles.input}
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            id="password"
                                            type="password"
                                            label="Pasword"
                                            name="pasword"
                                            value={password}
                                            autoComplete="current-pasword"
                                            onChange={updatePassword}
                                            required
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
                                            disableElevation

                                        >
                                            Sign In
                                    </Button>
                                        <Typography style={{ textAlign: 'center' }}>
                                            Dont’t have an account? {' '}
                                            <Link href="/signup" color="primary" className={styles.signup}>
                                                SignUp
                                            </Link>
                                        </Typography>
                                    </form>
                                </div>
                            </div>
                        </Container>
                    </Box>
                </Grid>
                <Grid item xs={false} sm={false} md={2} lg={2}></Grid>
            </Grid>

        </Authpage>
    );
};

Signin.propTypes = {

};

export default Signin;
