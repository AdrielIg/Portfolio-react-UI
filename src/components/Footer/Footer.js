import { Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import SocialMediaButtons from '../Intro/SocialMediaButtons';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from "@material-ui/core/useMediaQuery"
import theme from '../../MaterialTheme/theme'

const useStyles = makeStyles(() => ({
  footerContainer: {
    marginTop: '5rem',
    position: 'relative'
  },
  divisor: {
    backgroundColor: "white",
    opacity: .3,
    margin: '1rem 0 0 0'
  },
  madeBy: {
    marginBottom: '1rem'
  },
  btnHomeMobile: {
    position: 'absolute',
    bottom: 30,
    right: '3rem',
    border: '1px solid #D69D27',
    '&:hover': {
      transform: "scale(1.2)"
    }
  },
  btnHomeDesk: {
    position: 'absolute',
    bottom: 30,
    right: '-10%',
    border: '1px solid #D69D27',
    '&:hover': {
      transform: "scale(1.2)"
    }
  },


}))
const Footer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const classes = useStyles()
  return (
    <Container className={classes.footerContainer} maxWidth='md' component='footer' variant='section' align='center'>
      <Divider variant='middle' className={classes.divisor} />
      <SocialMediaButtons />
      <Typography className={classes.madeBy} color='secondary'>
        Made by Adriel Gomez
      </Typography>
      <IconButton className={isMobile ? classes.btnHomeMobile : classes.btnHomeDesk} href="#home" size='medium' variant='contained' color='secondary'>
        <ArrowUpwardIcon color='secondary' fontSize='large' />
      </IconButton>
    </Container>
  )
}

export default Footer