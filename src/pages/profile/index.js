import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { Grid, Card, CardMedia, CardContent, Typography, Button, Avatar } from '@material-ui/core'
import CoverImage from '../../images/coverImage_default.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow:1,
    },
    grow: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing(10),

        color: theme.palette.text,
        boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : theme.palette.elevationLight
    },
    smallPaper: {
        padding: theme.spacing(10),

        color: theme.palette.text,
        boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : theme.palette.elevationLight
    },
    media: {
        height: 140,
        background: `url(${CoverImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    cardConent: {
        padding: theme.spacing(8, 4),
        position: 'relative'
    },
    small: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        border: '2px solid',
        borderColor: theme.palette.primary.main,
        position: 'absolute',
        top: -40
    },
    buttons: {
        padding: theme.spacing(0.7, 6),
        textTransform:'Capitalize',
        fontSize:17,
        [theme.breakpoints.down('xs')]:{
            padding: theme.spacing(0.4, 4),
        }
    },

    buttonsfill: {
        boxShadow: theme.palette.type==="light"? theme.palette.button.elevation.light: 'none',
    },
}))
const Profile = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={9} lg={9}>
                    {/* <Paper className={classes.paper} elevation={false}></Paper> */}
                    <Card className={classes.paper} elevation={0}>
                        <CardMedia className={classes.media} image="/assets/images/coverImage_default.jpg" />
                        <CardContent className={classes.cardConent}>
                            <Avatar alt="Profile Picture" src="/assets/images/nzaki.jpg" className={classes.small}></Avatar>
                            <Grid container spacing={2}>
                                <Grid item md={6} sm={7} xs={12} >
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </Grid>
                                <Grid item md={6} sm={5} xs={12} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Button
                                                disableElevation
                                                variant="contained"
                                                color="primary"
                                                className={[classes.buttonsfill, classes.buttons]}
                                            >
                                                Connect
                                            </Button>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                className={classes.buttons}
                                            >
                                                Message
                                                </Button>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <Paper elevation={0} className={classes.smallPaper}></Paper>
                </Grid>
            </Grid>

        </div>
    );
};

Profile.propTypes = {

};

export default Profile;
