import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import theme from '../../MaterialTheme/theme'
import List from '@material-ui/core/List';
import NavButtons from './NavButtons'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  navLinks: {
    display: 'flex',
    marginRight: '5rem',


  },
  navBar: {
    position: 'static'
  }

}))

const Bar = (props) => {
  const classes = useStyles();
  const [start, end] = ["<", "/ >"]
  const navBar = [["Home", "#home"], ["About", "#about"], ["Portfolio", "#portfolio"], ["Skills", "#skills"]]
  console.log(props)
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const closeNav = !isMobile ? props.closeHandlerNav(false) : null;




  return (
    <AppBar color='transparent' className={classes.navBar}>
      <Toolbar>
        <Typography id='home' variant="h1" noWrap color="secondary" className={props.classesh1} >
          {start} Adriel Gomez {end}
        </Typography>

        {isMobile ? (
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="end"
            onClick={props.openHandlerNav}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        ) : (
          <List className={classes.navLinks}>
            {navBar.map(item => {
              return (
                <NavButtons key={item[0]} className={classes.navLink} name={item[0]} destiny={item[1]} />

              )
            })}
          </List>
        )}

      </Toolbar>
    </AppBar>
  )
}

export default Bar