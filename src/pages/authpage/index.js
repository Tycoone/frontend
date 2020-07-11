import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Image from '../../images/photo-1563132337-f159f484226c.webp';
// import Signup from '../signup';
// import Signin from '../signin';
// import {  Route, Switch } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


const useStyles = makeStyles((theme) => {
    return {
        root: {
            height: '100vh',
            backgroundColor: '#FFFFFF'
        },
        image: {
            width: '100%',
            height: '100vh',
            background: `url(${Image})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            zIndex:'100'
        },
        overlay: {
            height: '100%',
            width: '100%',
            background: 'linear-gradient(180deg, rgba(111, 111, 172, 0) 0%, #474666 100%)'
        },
        paper: {
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column'
        },
        textCard: {
            position: 'absolute',
            left: '70px',
            bottom: '140px',
            height: '200px',
            fontFamily: 'Source Sans Pro'
        },
        h2: {
            display: 'inline-block',
            width: '270px',
            height: '100px',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '49px',
            lineHeight: '1',
            color: '#FFFFFF',
            transform: 'translateY(19px)'

        },
        h3: {
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '29px',
            // lineHeight: '0.2',
            color: '#EFEFEF',
            transform: 'translateY(-39px)'
        }
    }
});

const Authpage = ({children}) => {
    const styles = useStyles();
    return (
            <Box>
                <Grid container component="main" spacing={0}>
                    <CssBaseline />
                    <Grid item xs={false} sm={6} md={6} className={styles.image}>
                        <Box className={styles.overlay} >
                            <Fade direction="left" triggerOnce>
                                <div className={styles.textCard}>
                                    <h2 className={styles.h2}>Moments For Startups</h2>
                                    <h3 className={styles.h3}>Connect. Scale. Grow</h3>
                                </div>
                            </Fade>
                        </Box>
                    </Grid>
                    <Grid className={styles.paper} item xs={12} sm={6} md={6}>
                        {children}

                    </Grid>
                </Grid>
            </Box>
    );
};

Authpage.propTypes = {

};

export default Authpage;
