//Componenetes
import AvatarLogo from './AvatarLogo'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SocialMediaButtons from './SocialMediaButtons';


const useStyles = makeStyles((theme) => ({
  containerIntro: {
    minHeight: '80vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  introTitle: {
    margin: '3rem 0 2rem 0',
    fontWeight: 500,
    letterSpacing: '.5rem'
  },
  introProfile: {
    fontWeight: 200,
    fontSize: "2rem",
    opacity: .6,
  }
}))

const Intro = () => {
  const classes = useStyles()
  return (
    <Box component='section' align='center' className={classes.containerIntro} display='flex'>
      <AvatarLogo />
      <Typography className={classes.introTitle} variant='h2' color='secondary' >Adriel Gomez</Typography>
      <Typography className={classes.introProfile} variant='h3' color='secondary' >| Front End Developer |</Typography>
      <SocialMediaButtons />

    </Box >
  )
}

export default Intro