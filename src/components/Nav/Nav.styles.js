import {  fade } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
export const navStyles = (theme) => ({
    grow: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.white : grey.A700,
      color: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.common.white,
      padding: theme.spacing(1.99, 12.0),
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
      textDecoration: 'none',
      fontSize: '35px',
      fontWeight: 'bold'
    },
    titleLink: {
      textDecoration: 'none',
  
    },
    search: {
      position: 'relative',
      borderRadius: '2px',
      border: '1px solid',
      borderColor: theme.palette.type === 'light' ? fade(theme.palette.primary.main, 0.5) : theme.palette.common.white,
      // backgroundColor: fade(theme.palette.common.white, 0.85),
      [theme.breakpoints.down('xs')]: {
        display: 'none',
        width: 0
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
      justifyContent: 'center',
      textAlign: 'center',
      // maxHeight:'70px',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
        width: 0
      },
    },
    links: {
      textDecoration: 'none',
      color: theme.palette.text.primary
    },
    iconLink: {
      display: 'block',
      margin: 'auto',
      textAlign: 'center'
    },
    iconButtonTitle: {
      display: 'block',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '0.9rem'
    },
    primaryColor: {
      color: theme.palette.primary.main
    },
    navBottonLink: {
      maxWidth: '9px',
      margin: 'auto',
      color: theme.palette.type === 'light' ? 'grey' : theme.palette.common.white
    },
    navIcon: {
      padding: 0
    }
  })