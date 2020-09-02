import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardMedia, CardContent, Typography, Button, Avatar } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';
import { Link as RLink } from 'react-router-dom';
import ConnectSuggestCard from '../../../components/Cards/ConnectSuggestCard';
const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow:1,
    },
    grow: {
        flexGrow: 1,
    },
    paper: {
        border: theme.palette.type === 'light' ? '1.7px solid #ededed' : '1px solid #a5acac',
        borderRadius: theme.spacing(0.2),
        color: theme.palette.text,
        boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : theme.palette.elevationLight
    },
    media: {
        height: 140,
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
        textTransform: 'Capitalize',
        fontSize: 17,
        [theme.breakpoints.down('xs')]: {
            padding: theme.spacing(0.4, 4),
        }
    },

    buttonsfill: {
        boxShadow: theme.palette.type === 'light' ? theme.palette.button.elevation.light : 'none',
    },
    name: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "20px",
        color: theme.palette.type === 'light' ? '#333333' : '#ffffff',
        lineHeight: '143.3%'
    },
    companyAndPosition: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "16px",
        color: theme.palette.type === 'light' ? '#4F4F4F' : '#ffffff',
        lineHeight: '143.3%'
    },
    locationAndConnection: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "16px",
        color: theme.palette.type === 'light' ? '#4F4F4F' : '#ffffff',
        lineHeight: '143.3%',
        display: "flex",
        alignItems: "flex-start"
    },
    bigGap: {
        padding: theme.spacing(2)
    },
    aboutCard: {
        border: theme.palette.type === 'light' ? '1.7px solid #ededed' : '1px solid #a5acac',
        borderRadius: theme.spacing(0.2),
        color: theme.palette.text,
        boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : theme.palette.elevationLight
    }
    , aboutCardConent: {
        padding: theme.spacing(4, 4),
        position: 'relative',


    },
    aboutHeader: {
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: "22px",
        color: theme.palette.type === 'light' ? '#333333' : '#ffffff',
        lineHeight: '143.3%'
    },
    aboutDetails: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "16px",
        color: theme.palette.type === 'light' ? '#4F4F4F' : '#ffffff',
        lineHeight: '143.3%',
        display: "flex",
        alignItems: "flex-start"
    },
    hr: {
        borderTop: theme.palette.type === 'light' ? '1.7px solid #ededed' : '1px solid white',
        margin: theme.spacing(2, 0)
    },
    experiencePosition: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "20px",
        color: theme.palette.type === 'light' ? '#4f4f4f' : '#ffffff',
        lineHeight: '143.3%',
    },
    flex: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    companyLogo: {
        // alignSelf: "stretch",
        // padding: theme.spacing(0.2),
        border: '1px solid',
        borderColor: theme.palette.primary.main,
        borderRadius: "50%",


    },
    companyLogoImg: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    profileLink: {
        textDecoration: 'none',
        color: theme.palette.primary.main
    },
    endorsedby: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "18px",
        color: theme.palette.type === 'light' ? '#818181' : '#ffffff',
        lineHeight: '143.3%',
    },
    duration: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: "18px",
        color: theme.palette.type === 'light' ? '#4f4f4f' : '#ffffff',
        lineHeight: '143.3%',
    },

}))
const Profile = ({ user }) => {
    const classes = useStyles();
    const { experience, education, skillAndEndorsement, connectionRequest } = user;
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8} lg={8}>
                    <Card className={classes.paper} elevation={0}>
                        <CardMedia className={classes.media} image={user.images.coverImage} />
                        <CardContent className={classes.cardConent}>
                            <Avatar alt="Profile Picture" src={user.images.profileImage} className={classes.small}></Avatar>
                            <Grid container spacing={2}>
                                <Grid item md={6} sm={7} xs={12} >
                                    <Typography component="h3" className={classes.name} >
                                        {user.name.first} {user.name.last}
                                    </Typography>
                                    <Typography component="h5" className={classes.companyAndPosition}>
                                        {user.currentPosition} at {user.currentCompany}
                                    </Typography>
                                    <Typography component="h5" className={classes.locationAndConnection}>
                                        <RoomIcon fontSize="small" color="primary" />
                                        {user.currentLocation} &nbsp; {user.connections}
                                        {user.connections > 1 ? " Connections" : "Connection"}
                                    </Typography>
                                </Grid>
                                <Grid item md={6} sm={5} xs={12} >
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <Button
                                                disableElevation
                                                variant="contained"
                                                color="primary"
                                                className={classes.buttonsfill + " " + classes.buttons}
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
                    <div className={classes.bigGap} />
                    <Card className={classes.aboutCard} elevation={0}>
                        <CardContent className={classes.aboutCardConent}>
                            <Typography component="h3" className={classes.aboutHeader}>
                                About
                            </Typography>
                            <div className={classes.hr} />
                            <Typography component="p" className={classes.aboutDetails}>
                                {user.about}
                            </Typography>
                        </CardContent>
                    </Card>

                    <div className={classes.bigGap} />
                    <Card className={classes.aboutCard} elevation={0}>
                        <CardContent className={classes.aboutCardConent}>
                            <Typography component="h3" className={classes.aboutHeader}>
                                Experience
                            </Typography>

                            {
                                experience.map(item => (
                                    <div key={item.id} style={{ marginBottom: 20 }}>
                                        <div className={classes.hr} />
                                        <Typography component="p" className={classes.experiencePosition}>
                                            {item.position}
                                        </Typography>
                                        <div className={classes.flex}>
                                            <div>
                                                <Typography component="p" className={classes.experiencePosition}>

                                                    <RLink className={classes.profileLink} to={"pages" + item.company.pageLink}> {item.company.name}</RLink>
                                                </Typography>
                                                <Typography component="p" className={classes.experiencePosition}>
                                                    <i> {item.duration.from}-{item.duration.to} </i> {item.duration.count}
                                                </Typography>
                                            </div>

                                            <div className={classes.companyLogo}>
                                                <Avatar className={classes.companyLogoImg} alt={item.company.name + " Logo"} src={item.company.logo} ></Avatar>
                                            </div>
                                        </div>
                                        <br />
                                        <Typography component="p" className={classes.aboutDetails}>
                                            {item.details}
                                        </Typography>
                                    </div>
                                ))
                            }
                        </CardContent>
                    </Card>
                    <div className={classes.bigGap} />
                    <Card className={classes.aboutCard} elevation={0}>
                        <CardContent className={classes.aboutCardConent}>
                            <Typography component="h3" className={classes.aboutHeader}>
                                Education
                            </Typography>

                            {
                                education.map(item => (
                                    <div key={item.id} style={{ marginBottom: 20 }}>
                                        <div className={classes.hr} />
                                        <Typography component="p" className={classes.experiencePosition}>
                                            {item.school.name}
                                        </Typography>
                                        <div className={classes.flex}>
                                            <div>
                                                <Typography component="p" className={classes.experiencePosition}>

                                                    <RLink className={classes.profileLink} to={"pages" + item.school.resultLink}> {item.degree}</RLink>
                                                </Typography>
                                                <Typography component="p" className={classes.duration}>
                                                    <i> {item.duration.from}-{item.duration.to} </i> {item.duration.count}
                                                </Typography>
                                            </div>

                                            <div className={classes.companyLogo}>
                                                <Avatar className={classes.companyLogoImg} alt={item.school.name + " Logo"} src={item.school.logo} ></Avatar>
                                            </div>
                                        </div>
                                        <br />
                                        <Typography component="p" className={classes.aboutDetails}>
                                            {item.details}
                                        </Typography>
                                    </div>
                                ))
                            }
                        </CardContent>
                    </Card>
                    <div className={classes.bigGap} />
                    <Card className={classes.aboutCard} elevation={0}>
                        <CardContent className={classes.aboutCardConent}>
                            <Typography component="h3" className={classes.aboutHeader}>
                                Skills and Endorsement
                            </Typography>

                            {
                                skillAndEndorsement.map(item => (
                                    <div key={item.id} style={{ marginBottom: 20 }}>
                                        <div className={classes.hr} />
                                        <Typography component="p" className={classes.experiencePosition}>
                                            {item.title}
                                        </Typography>
                                        <div className={classes.flex}>
                                            <div>

                                                <Typography component="p" className={classes.endorsedby}>
                                                    Endorsed By <span style={{ fontWeight: '600' }}>{item.endorsedBy}</span>
                                                </Typography>
                                            </div>
                                        </div>
                                        <br />
                                        <Typography component="p" className={classes.aboutDetails}>
                                            {item.details}
                                        </Typography>
                                    </div>
                                ))
                            }
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <ConnectSuggestCard connectionSuggestion={connectionRequest} />
                </Grid>
            </Grid>

        </div>
    );
};

Profile.propTypes = {

};

export default Profile;
