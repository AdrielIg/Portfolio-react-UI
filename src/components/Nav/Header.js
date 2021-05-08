import React from 'react';

/* Componentes */
import Bar from "./Bar"
import NavButtons from "./NavButtons"

/* Materiual UI */

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Typography } from '@material-ui/core';





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,

  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#262626',
    overflowX: 'hidden'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },



}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [start, end] = ['<', '/ >']

  /*Data to add*/
  const navBar = [["Home", "#home"], ["About", "#about"], ["Portfolio", "#portfolio"], ["Skills", "#skills"]]

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    < >


      <Bar closeHandlerNav={setOpen} openHandlerNav={handleDrawerOpen} classesh1={classes.title} />

      <Drawer

        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <HighlightOffIcon fontSize='large' color='secondary' />
          </IconButton>
          <Typography color='secondary' variant='h5'>{start} Adriel Gomez {end}</Typography>
        </div>

        <Divider />
        <List>
          {navBar.map(item => {
            return (
              <NavButtons key={item[0]} name={item[0]} destiny={item[1]} />

            )
          })}

        </List>

      </Drawer>
    </>
  );
}