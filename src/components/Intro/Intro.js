import { useEffect, useRef } from 'react';
//Components
import SocialMediaButtons from './SocialMediaButtons';
import AvatarLogo from './AvatarLogo'
//Material UI

import { Container, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import VanillaTilt from 'vanilla-tilt';




const useStyles = makeStyles(() => ({
  introContainer: {
    minHeight: '95vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',



  },
  introTitle: {
    margin: '3rem 0 2rem 0',
    fontWeight: 500,
    letterSpacing: '.5rem',

  },
  introProfile: {
    fontWeight: 200,
    fontSize: "2rem",
    opacity: .6,

  },
  containerIntroBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',

  }

}))




const Intro = () => {
  const classes = useStyles()
  const tiltRef = useRef()
  const tiltChildrenRef = useRef()
  useEffect(() => {
    const tiltNode = tiltRef.current

    console.log(tiltNode)
    const vanillaTiltOption = {
      max: 20,
      speed: 10,
      glare: true,
      gyroscope: true,
      'max-glare': 0.2,
      transition: true,
      reverse: true

    }

    VanillaTilt.init(tiltNode, vanillaTiltOption)


  })

  return (
    <Container component='section' align='center' className={classes.introContainer} >
      <Box ref={tiltRef} component='div' className={classes.containerIntroBox}>
        <AvatarLogo />
        <Typography className={classes.introTitle} variant='h2' color='secondary' >Adriel Gomez</Typography>
        <Typography className={classes.introProfile} variant='h3' color='secondary' >| Front End Developer |</Typography>
        <SocialMediaButtons variant='contained' />
        <ArrowDownwardIcon className='bouncer' color='secondary' fontSize='large' />
      </Box>
    </Container >
  )
}

export default Intro