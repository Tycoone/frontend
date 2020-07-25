import React from 'react'
import { makeStyles, Paper, Grid } from '@material-ui/core'
import { Card, CardContent, Typography } from '@material-ui/core'
import ConnectCard from '../../app/ui/components/Cards/ConnectCard';
import  PropTypes  from 'prop-types'
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
    padding: theme.spacing(2, 2, 0, 2),
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
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
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
    < >
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
              <ConnectCard key={user.id} user={user} />
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
              <ConnectCard key={user.id} user={user} />
            ))
          }

        </Grid>
      </Paper>
    </>
  )
}

Connect.propTypes = {
  connectionRequest: PropTypes.array.isRequired,
};

Connect.defaultProps = {
  connectionRequest: [{
    id:1,
    name:"User Name",
    details:"position",
    profileImage:"/assets/images/nzaki.jpg"
}]
};

export default Connect;
