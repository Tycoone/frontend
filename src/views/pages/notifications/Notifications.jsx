import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import { Card, CardContent, Typography, Button, Avatar } from '@material-ui/core'

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
    boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : theme.palette.elevationLight,
    padding: theme.spacing(3)
  },
  notificationsHeader: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: "22px",
    color: theme.palette.type === 'light' ? '#333333' : '#ffffff',
    lineHeight: '143.3%'
  },
  hr: {
    borderTop: theme.palette.type === 'light' ? '1.7px solid #ededed' : '1px solid white',
    margin: theme.spacing(2, 0)
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
  notificationAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    margin: theme.spacing(0, 3, 0, 0)
  }
}));

const Notification = ({ notification }) => {
  const classes = useStyles();
  return (
    <div key={notification.id} style={{ marginBottom: 10 }}>
      <div className={classes.hr} />

      <div className={classes.flex}>

        <div>
          <div className={classes.flex}>
            <div>
              <Avatar src={notification.image} className={classes.notificationAvatar} />
            </div>
            <div>
              <Typography component="p" className={classes.notificationDetails}>
                {notification.details}
              </Typography>
              <Typography component="p" className={classes.time}>
                {notification.time}
              </Typography>
            </div>
          </div>

        </div>

        <div className={classes.actionButton}>

          {
            notification.type === 'connect' ?
              <Button
                variant="outlined"
                color="primary"
                className={classes.buttons}
              >Connect</Button>
              : (
                notification.type === 'post' ?
                  ' '
                  : <Button
                    variant="outlined"
                    color="primary"
                    className={classes.buttons}
                  >See all Views</Button>
              )
          }

        </div>
      </div>
    </div>
  )
}

const Notifications = ({ notifications }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.bigGap} />
      <Card className={classes.aboutCard} elevation={0}>
        <CardContent className={classes.aboutCardConent}>
          <Typography component="h3" className={classes.notificationsHeader}>
            Notifications
          </Typography>
          {
            notifications.length === 0 ?
              <Typography component="p" className={classes.notificationDetails}>
                <center> You've got No Notifications </center>
              </Typography> :

              notifications.map(notification => (
                <Notification key={notification.id} notification={notification} />
              ))
          }
        </CardContent>
      </Card>

    </Paper>
  )
}

export default Notifications
