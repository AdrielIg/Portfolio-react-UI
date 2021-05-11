import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Divider from '@material-ui/core/Divider';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import theme from '../../MaterialTheme/theme'


const useStyles = makeStyles(() => ({
  navLink: {
    margin: '0 2rem',
    color: '#F79E02'
  },
  anchorSize: {
    fontSize: '1.4rem',
    fontWeight: '300',
    marginLeft: '1rem',
    padding: '.5rem 1rem'
  },


}))


const NavButtons = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))


  return (
    <>
      <ListItem className={classes.navLink} button component="a" href={props.destiny} key={props.name}>
        {isMobile ? (
          <ListItemIcon ><ArrowForwardIosIcon color='secondary' /></ListItemIcon>
        ) : null}
        <Typography color='secondary' className={classes.anchorSize}>{props.name}</Typography>
      </ListItem>
      <Divider />
    </>
  )
}

export default NavButtons