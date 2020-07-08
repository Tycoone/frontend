import React, {useState} from 'react'
import { AppBar, Avatar, Toolbar, Typography, InputBase, IconButton, Menu, MenuItem } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MailIcon from '@material-ui/icons/Mail'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { makeStyles, fade } from '@material-ui/core/styles'
import { Link as RLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appBar: {
    background: ' url("/assets/images/bg1.png")',
    color: theme.palette.common.white,
    padding: theme.spacing(0, 4),

  },
  title: {
    color: theme.palette.common.white,
    // flexGrow: 1,

    fontSize: '22px'
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
    margin: theme.spacing(1, 0)
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
  }, btsmall: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginLeft: theme.spacing(3),
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,

    // transition: theme.transitions.create('width'),
    // width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //   width: '12ch',
    //   '&:focus': {
    //     width: '120ch',
    //   },
    // },
  },
  nav_profile_menu:{
    marginTop:'37px'
  }
}));
const mul = x => y => z => x * y * z;
const Nav = ({Icons}) => {
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
          <div>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>


          <ProfileMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
};
const ProfileMenu = () => {
  const classes = useStyles();
 const [anchorEl, setAnchorEl] = useState(null);

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
        className={classes.nav_profile_menu}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My Account </MenuItem>
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
