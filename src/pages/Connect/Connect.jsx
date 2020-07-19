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
    // border: theme.palette.type === 'light' ? '1.7px solid #ededed' : '1px solid #a5acac',
    borderRadius: theme.spacing(0.2),
    color: theme.palette.text,
    boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : theme.palette.elevationLight,
    padding: theme.spacing(2,2,0,2)
  },
  header: {
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
const Connect = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.bigGap} />
      <Card className={classes.aboutCard} elevation={0}>
        <CardContent className={classes.aboutCardConent}>
          <Typography component="h3" className={classes.header}>
            Notifications
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  )
}

Connect.propTypes = {
  // bla: PropTypes.st
};

Connect.defaultProps = {
  // bla: 'test',
};

export default Connect;
