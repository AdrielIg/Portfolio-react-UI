import { Divider, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import SocialMediaButtons from '../Intro/SocialMediaButtons';

const useStyles = makeStyles(() => ({
  footerContainer: {
    marginTop: '5rem'
  },
  divisor: {
    backgroundColor: "white",
    opacity: .3,
    margin: '1rem 0 0 0'
  },


}))
const Footer = () => {
  const classes = useStyles()
  return (
    <Container className={classes.footerContainer} maxWidth='md' component='footer' variant='section' align='center'>
      <Divider variant='middle' className={classes.divisor} />
      <SocialMediaButtons />
      <Typography color='secondary'>
        Made by Adriel Gomez
      </Typography>
    </Container>
  )
}

export default Footer