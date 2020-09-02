import React from 'react';
import { Card, CardContent, Typography, Button, Avatar, makeStyles, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow:1,
    },
    grow: {
        flexGrow: 1,
    },
    paper: {
        // border: theme.palette.type === 'light' ? '1.7px solid #ededed' : '1px solid #a5acac',
        borderRadius: theme.spacing(0.2),
        color: theme.palette.text,
        boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : theme.palette.elevationLight,
        padding: theme.spacing(2, 2, 0, 2)
    },
    hr: {
        borderTop: theme.palette.type === 'light' ? '1.7px solid #ededed' : '1px solid white',
    },
    buttons: {
        padding: theme.spacing(0.7, 2),
        textTransform: 'initial',
        fontSize: 17,
        width: 158,
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.4, 2),
        }
    },
    buttonsfill: {
        boxShadow: theme.palette.type === 'light' ? theme.palette.button.elevation.light : 'none',
    },
    connectAvatar: {
        width: theme.spacing(11),
        height: theme.spacing(11),
        margin: 'auto'
    },
    card: {
        // border: theme.palette.type === 'light' ? '0.09em solid #e3e6fc' : '1px solid white',
        borderRadius: theme.spacing(0.2),
        backgroundColor: theme.palette.type === 'light' ? 'white' : theme.palette.background,
        height: 290,
        boxShadow: theme.palette.type === 'light' ? theme.palette.card.elevation.light : '',
        '&:hover': {
            boxShadow: theme.palette.type === 'light' ? theme.palette.card.hoverElevation.light : '',
        }
    },
    cardContent: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing(3)
    },
    name: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "20px",
        color: theme.palette.type === 'light' ? '#333333' : '#ffffff',
        textAlign: "center",
        lineHeight: '170.3%'
    },
    companyAndPosition: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "16px",
        color: theme.palette.type === 'light' ? '#4F4F4F' : '#ffffff',
        marginBottom: theme.spacing(2)
    },
    connections: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "16px",
        color: theme.palette.type === 'light' ? '#4F4F4F' : '#ffffff',
        lineHeight: '143.3%',
        display: "flex",
        alignItems: "flex-start",
        textAlign: "center"

    },
    centerText: {
        textAlign: "center"
    },
}));

const ConnectCard = ({ user }) => {
    const classes = useStyles();
    return (
            <Grid item sm={4} md={3} xs={12}>
                <Card className={classes.card} elevation={0}>
                    <CardContent className={classes.cardContent}>
                        <div className={classes.centerText}>
                            <Avatar className={classes.connectAvatar} src={user.profileImage} />
                            <Typography className={classes.name}>
                                {user.name}
                            </Typography>
                            <Typography className={classes.companyAndPosition}>
                                {user.details} <br /> 300 Connections
                </Typography>
                            <Typography >
                                <Button
                                    disableElevation
                                    variant="contained"
                                    color="primary"
                                    className={classes.buttonsfill + " " + classes.buttons}
                                >Connect</Button>
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
    )
}

ConnectCard.propTypes = {
    connectionRequest: PropTypes.object.isRequired
};

ConnectCard.defaultProps = {
    connectionRequest: {
        id: 1,
        name: "User Name",
        details: "position",
        profileImage: "/assets/images/nzaki.jpg"
    }
};
export default ConnectCard
