import React from 'react'
import { makeStyles, Paper, Grid } from '@material-ui/core'
import { Card, CardContent, Typography, Button, Avatar } from '@material-ui/core'
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
  paper2: {
    padding: theme.spacing(3.7, 2)

  },
  header: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: "22px",
    color: theme.palette.type === 'light' ? '#333333' : '#ffffff',
    lineHeight: '1'
  },
  noti: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: "22px",
    color: theme.palette.type === 'light' ? '#333333' : '#ffffff',
    lineHeight: '143.3%'
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
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  time: {
    fontStyle: 'normal',
    fontWeight: 'light',
    fontSize: "16px",
    color: theme.palette.type === 'light' ? '#4f4f4f' : '#ffffff',
    lineHeight: '200%',
  },
  notificationDetails: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: "18px",
    color: theme.palette.type === 'light' ? '#4f4f4f' : '#ffffff',
    lineHeight: '143.3%',
  },
  connectAvatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    margin: 'auto'
  },
  card: {
    border: theme.palette.type === 'light' ? '0.09em solid #bdbdbd' : '1px solid white',
    borderRadius: theme.spacing(0.2),

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
  inviteHead: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(4, 2, 0, 2)
  },
  bigGap: {
    padding: theme.spacing(2)
  },
}));
const Connect = ({ connectionRequest }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
      <div className={classes.bigGap} />
      <Card className={classes.aboutCard} elevation={0}>
        <CardContent className={classes.inviteHead}>
          <Typography component="h3" className={classes.header}>
            No New Invitations
          </Typography>
        </CardContent>
      </Card>

      <div className={classes.hr} />
      <Card elevation={0}>
        <CardContent className={classes.aboutCardConent}>
          <Typography component="h3" className={classes.noti}>
            People you may know from Start Innovation Hub
          </Typography>
        </CardContent>
      </Card>
      <Grid container className={classes.paper2} spacing={4}>
        {
          connectionRequest.map(user => (
            <Grid item md={3} key={user.id}>
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
          ))
        }

      </Grid>
    </Paper>
    <div className={classes.bigGap} />
    <div className={classes.bigGap} />

    <Paper className={classes.paper}>
      <div className={classes.bigGap} />
      <Card className={classes.aboutCard} elevation={0}>
        <CardContent className={classes.inviteHead}>
          <Typography component="h3" className={classes.header}>
            More Suggestion For You.
          </Typography>
        </CardContent>
      </Card>

      <div className={classes.hr} />
      <Grid container className={classes.paper2} spacing={4}>
        {
          connectionRequest.map(user => (
            <Grid item md={3} key={user.id}>
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
          ))
        }

      </Grid>
    </Paper>
    </>
  )
}

Connect.propTypes = {
  // bla: PropTypes.st
};

Connect.defaultProps = {
  // bla: 'test',
};

export default Connect;
