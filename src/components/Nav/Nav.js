import React from 'react';

/*Material UI Components*/
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import theme from "../../MaterialTheme/theme"


const useStyles = makeStyles((theme) => ({
  list: {
    margin: "0rem 2rem",
    fontSize: "1.2rem",
    fontWeight: 300,
    textTransform: "uppercase"
  },
  menuDrop: {
    margin: "0rem 2rem",

  },
  drop: {
    fontSize: "1.5rem",
    margin: "0rem 2rem",
    color: "##161616",
    textTransform: "uppercase",
    fontWeight: 600
  },
  lastDrop: {
    marginBottom: "180vh",
    fontSize: "1.5rem",
    margin: "0rem 2rem",
    color: "##161616",
    textTransform: "uppercase",
    fontWeight: 600

  },
  toolBar: {
    width: "90%",
    margin: "auto"
  },

  title: {
    flexGrow: 1,
  },
}));



const Nav = () => {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))
  console.log(isMobile)


  const [start, end] = ["<", "/ >"]



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (

    <AppBar position="static" color="transparent" position='sticky'>
      <Toolbar className={classes.toolBar}>

        <Typography variant="h1" color="secondary" className={classes.title}>
          {start} Adriel Gomez {end}
        </Typography>
        {auth && (
          <div>
            {isMobile ? (
              <>
                <IconButton
                  edge="start"
                  aria-label="menu"
                  onClick={handleMenu}
                  color="secondary"
                >
                  <MenuIcon color="secondary" fontSize="large" />
                </IconButton>
                <Menu

                  className={classes.menuDrop}
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem className={classes.drop} onClick={handleClose}><a href="/" >About</a></MenuItem>
                  <MenuItem className={classes.drop} onClick={handleClose}><a>Portfolio</a></MenuItem>
                  <MenuItem className={classes.lastDrop} onClick={handleClose}><a>Skills</a></MenuItem>
                </Menu>
              </>
            ) : (
              <Typography component="ul">
                <Link className={classes.list} href="/" component="a" color="primary">About</Link>
                <Link className={classes.list} href="/" component="a" color="primary">Portfolio</Link>
                <Link className={classes.list} href="/" component="a" color="primary">Skills</Link>
              </Typography>
            )}
          </div>
        )}
      </Toolbar>
    </AppBar>

  );
}

export default Nav