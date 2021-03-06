import React, { useState } from 'react';
import { AppBar, Avatar, Toolbar, Typography, InputBase, IconButton, Menu, MenuItem, Grid, Switch, SvgIcon } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/Message';
import { makeStyles} from '@material-ui/core/styles'
import { Link as RLink } from 'react-router-dom';
import auth from '../../auth/auth';
import {navStyles} from './Nav.styles';

const useStyles = makeStyles(navStyles);

const IconLink = (props) => {
  const classes = useStyles();
  // console.log(props)
  var color;
  if(props.children !== undefined){
    color = props.children.props.color;
  }else{
    color = '';
  }
  return (
    <RLink
      {...props}
      className={`
        ${props.className} 
        ${classes.navBottonLink}
        ${classes.links}
      `}
    >
      {props.children}
      <span className={`${classes.iconButtonTitle} ${color === 'primary' ? classes.primaryColor : ''}`}>
        {props.name}
      </span>
    </RLink>
  )
}

const Nav = ({ Icons, mode, activeMode }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} elevation={0}  >
        <Toolbar>
          <RLink to="/" className={classes.titleLink}>
            <Typography component="h1" variant="h5" className={classes.title}>
              Tycoones
            </Typography>
          </RLink>


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
          <Grid container spacing={1} className={classes.iconsContainer}>
            <Grid item sm={3} >
              <IconLink to="/" name="Home">
                <IconButton className={classes.navIcon} variant="contained" color={activeMode === 'home' ? "primary" : "default"}>
                  <SvgIcon  style={{fontSize:'1.9rem'}} viewBox="0 0 576 512">
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </SvgIcon>
                </IconButton>
              </IconLink>
            </Grid>
            <Grid item sm={3}>
              <IconLink to="/connections" name="Connections">
                <IconButton className={classes.navIcon} variant="contained" color={activeMode === 'connections' ? "primary" : "default"}>
                  <SvgIcon style={{fontSize:'1.9rem'}} viewBox="0 0 640 512">
                    <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                  </SvgIcon>
                </IconButton>
              </IconLink>
            </Grid>
            <Grid item sm={3}>
              <IconLink to="/messages" name="Messages">
                <IconButton className={classes.navIcon} variant="contained" color={activeMode === 'messages' ? "primary" : "default"}>
                  <MessageIcon  style={{fontSize:'1.9rem'}} />
                  
                </IconButton>
              </IconLink>
            </Grid>
            <Grid item sm={3}>
              <IconLink to="/notifications" name="Notifications">
                <IconButton className={classes.navIcon} variant="contained" color={activeMode === 'notifications' ? "primary" : "default"}>
                  <SvgIcon  style={{fontSize:'1.9rem'}} viewBox="0 0 448 512">
                    <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                  </SvgIcon>
                </IconButton>
              </IconLink>
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
        <Avatar alt="Profile Picture" src="/assets/images/nzaki.png" className={classes.small}></Avatar>
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
          <RLink className={classes.links} to="/profile">Profile</RLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>My Account </MenuItem>
        <MenuItem >Mode
        <Switch
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          /> </MenuItem>
        <MenuItem>
          <RLink
            to="/signin"
            onClick={
              () => auth.logout(() => window.location = "/signin")
            }>
            Logout
              </RLink>
        </MenuItem>
      </Menu>
    </>
  )
}

export default Nav
