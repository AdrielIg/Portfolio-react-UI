//Componenetes
import AvatarLogo from './AvatarLogo'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SocialMediaButtons from './SocialMediaButtons';


const useStyles = makeStyles((theme) => ({
  introContainer: {
    minHeight: '95vh',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
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
    <Box component='section' align='center' className={classes.introContainer} display='flex'>
      <AvatarLogo />
      <Typography className={classes.introTitle} variant='h2' color='secondary' >Adriel Gomez</Typography>
      <Typography className={classes.introProfile} variant='h3' color='secondary' >| Front End Developer |</Typography>
      <SocialMediaButtons />
      <Typography color='secondary'>Aniadir cosa para scrollear para abajo</Typography>

    </Box >
  )
}

export default Intro