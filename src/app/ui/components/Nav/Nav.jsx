import React from 'react'
import { AppBar, Avatar, Toolbar, Typography, InputBase, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { makeStyles, fade } from '@material-ui/core/styles'
import { Link as RLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow:{
    flexGrow: 1,
  },
  appBar: {
    // backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    
  },
  title: {
    color: theme.palette.common.white,
    // flexGrow: 1,
    marginLeft: theme.spacing(4),
    fontSize: '24px'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    margin:theme.spacing(1,0)
  }, purple: {
    backgroundColor: 'purple'
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit'
  },
  
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  inputInput: {
    padding: theme.spacing(1.1, 1.1, 1.1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    
    // transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '120ch',
    //   },
    // },
  }
}));

const Nav = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}  >
        <Toolbar variant="dense" >
          {/* <IconButton edge="start" >
            <MenuIcon />
          </IconButton> */}
          <Typography component="h1" variant="h5" className={classes.title}>
            Tycoone
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              autoFocus
            />

          </div>
          <div className={classes.grow} />
          <RLink to="/signin">
            <IconButton >
              <Avatar alt="Profile Picture" src="/assets/images/nzaki.jpg" className={classes.small}></Avatar>
            </IconButton>
            </RLink>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav
