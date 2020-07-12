import React, { useState } from 'react'
import { AppBar, Avatar, Toolbar, Typography, InputBase, IconButton, Menu, MenuItem, Grid, Switch, Link, SvgIcon } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import PeopleIcon from '@material-ui/icons/People';
// import MailIcon from '@material-ui/icons/Mail'
// import Badge from '@material-ui/core/Badge'
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications'
import { makeStyles, fade } from '@material-ui/core/styles'
import { Link as RLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: theme.palette.type === 'light' ? theme.palette.common.white : theme.palette.background,
    color: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.common.white,
    padding: theme.spacing(1.99, 13.45),
    // padding: theme.spacing(14, 14.9),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3),
    },
    borderBottom: theme.palette.type === 'light' ? '1px solid' : 'none',
    borderBottomColor: theme.palette.type === 'light' ? '#e0e0e0' : 'none',
    boxShadow: theme.palette.type === 'dark' ? theme.palette.elevationDark : 'none'

  },
  title: {
    color: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.common.white,
    // flexGrow: 1,

    fontSize: '35px',
    fontWeight: 'bold'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid',
    borderColor: theme.palette.type === 'light' ? fade(theme.palette.primary.main, 0.5) : theme.palette.common.white,
    // backgroundColor: fade(theme.palette.common.white, 0.85),
    '&:hover': {
      // backgroundColor: fade(theme.palette.common.white, 0.25),

    },

    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    margin: theme.spacing(1, 0)
  }, purple: {
    backgroundColor: 'purple'
  },
  searchIcon: {
    padding: theme.spacing(0, 0.8),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.type === 'light' ? 'grey' : theme.palette.common.white
  },
  inputRoot: {
    color: theme.palette.type === 'light' ? 'grey' : theme.palette.common.white
  },

  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  }, btsmall: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginLeft: theme.spacing(3),
  },
  inputInput: {
    padding: theme.spacing(1.7, 1.4, 1.7, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)}px)`,
    '&::placeholder': {
      color: theme.palette.type === 'light' ? 'grey' : theme.palette.common.white,
      fontSize: '15px',
      fontWeight: 'regular'
    },
    // transition: theme.transitions.create('width'),
    width: '21ch',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '120ch',
    //   },
    // },
  },
  nav_profile_menu: {
    marginTop: '37px'
  },
  iconsContainer: {
    width: '61ch',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
      width: 0
    },
  },
  links:{
    textDecoration:'none',
    color:theme.palette.text.primary
  }
}));
const TLink = (props)=>(
  <Link color="default" className={props.className} >
    <RLink
      {...props}
    >
      
    </RLink>
  </Link>
)
// const mul = x => y => z => x * y * z;
const Nav = ({ Icons, mode }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="sticky" className={classes.appBar} elevation={0}  >
        <Toolbar  >
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
              placeholder="Search for people, groups "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              autoFocus
            />

          </div>
          <div className={classes.grow} />
          <Grid container spacing={7} className={classes.iconsContainer}>
            <Grid item sm={3} >
              <RLink to="/home">
                <IconButton variant="contained" color="default">
                  <HomeIcon fontSize="large" />
                </IconButton>
              </RLink>
            </Grid>
            <Grid item sm={3}>
              <RLink to="/connections">
                <IconButton variant="contained" color="default">
                  <PeopleIcon fontSize="large" />
                </IconButton>
              </RLink>
            </Grid>
            <Grid item sm={3}>
              <RLink to="/messages">
                <IconButton variant="contained" color="default">
                  <MessageIcon fontSize="large" />
                </IconButton>
              </RLink>
            </Grid>
            <Grid item sm={3}>
              <RLink to="/notifications">
                <IconButton variant="contained" color="default">
                  <NotificationsIcon fontSize="large" />
                </IconButton>
              </RLink>
            </Grid>
          </Grid>

          <ProfileMenu mode={mode} />
        </Toolbar>
      </AppBar>
    </div>
  )
};
const ProfileMenu = ({ mode }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = mode;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton onClick={handleClick} aria-controls="nav-profile-menu" aria-haspopup="true" className={classes.btsmall}>
        <Avatar alt="Profile Picture" src="/assets/images/nzaki.jpg" className={classes.small}></Avatar>
      </IconButton>
      <Menu
        id="nav-profile-menu"
        keepMounted
        // className={classes.nav_profile_menu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >
        <TLink className={classes.links} to="/profile">Profile</TLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>My Account </MenuItem>
        <MenuItem >Mode
        <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          /> </MenuItem>
        <MenuItem>
          <RLink to="/signin">
            Logout
              </RLink>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Nav
