import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PermIdentitySharpIcon from '@material-ui/icons/PermIdentitySharp';
// import './styles.css';
import { Container, makeStyles, Button, Checkbox, FormControlLabel,InputAdornment,IconButton, Typography, Paper, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core';
import { Link } from '@material-ui/core';

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

const Signup = () => {
    const styles = useStyles();
    return (
        <Grid container>
            <Grid item xs="0" sm="0" md="2" lg="2"></Grid>
            <Grid item xs="12" sm="12" md="8" lg="8">
                <Box>
                    <Container maxWidth="sm">
                        <div className={styles.paper}>
                            <Typography component="h4" variant="h4" className={styles.welcome}>
                                Create Account
                            </Typography>
                            <Typography component="h5" variant="h6" className={styles.signinText}>
                                Please create an account to continue
                            </Typography>
                            <div className={styles.formContainer} >
                                <form className={styles.form} noValidate>
                                    <Grid container spacing={2}>
                                        <Grid item xs="6" sm="6" md="6">
                                            <TextField
                                                className={styles.input}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                id="first_name"
                                                label="First Name"
                                                name="first_name"
                                                autoComplete="first_name"
                                            // autoFocus
                                            />
                                        </Grid>
                                        <Grid item xs="6" sm="6" md="6">
                                            <TextField
                                                className={styles.input}
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                id="last_name"
                                                label="Last Name"
                                                name="last_name"
                                                autoComplete="last_name"
                                            // autoFocus
                                            />
                                        </Grid>
                                    </Grid>
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
                                        type="password"
                                        autoComplete="current-pasword"
                                    />
                                    <FormControl className={styles.input} variant="outlined"  fullWidth>
                                        <Select
                                            // labelId="demo-simple-select-outlined-label"
                                            placeholder="Gender"
                                            id="demo-simple-select-outlined"
                                            // value={age}
                                            // onChange={handleChange}
                                            label="Age"
                                            required
                                            startAdornment={
                                                <InputAdornment position="start">
                                                  <IconButton  edge="start" >
                                                    <PermIdentitySharpIcon/>
                                                  </IconButton>
                                                </InputAdornment>
                                              }
                                        >
                                            
                                            <MenuItem value={'m'}>Male</MenuItem>
                                            <MenuItem value={'f'}>Female</MenuItem>
                                        </Select>
                                        {/* <InputLabel id="demo-simple-select-outlined-label"  >Gender</InputLabel> */}

                                    </FormControl>
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="By signing up you’ve agreed to the terms and 
                                                conditions"
                                    />
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
                                        Dont’t have an account?
                                            <Link href="/signup" color="primary" className={styles.signup}>
                                            Sign Up
                                            </Link>
                                    </Typography>
                                </form>
                            </div>
                        </div>
                    </Container>
                </Box>
            </Grid>
            <Grid item xs="0" sm="0" md="2" lg="2"></Grid>
        </Grid>
    );
};

Signup.propTypes = {

};

export default Signup;
