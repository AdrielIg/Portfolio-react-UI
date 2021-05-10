import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import React from 'react';
import Box from '@material-ui/core/Box';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles(() => ({
  contactContainer: {
    marginTop: '5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  spanContact: {
    color: '#F6F6F6',
    marginLeft: '1rem'
  },
  mail: {
    color: '#F6F6F6',
    fontSize: '1.6rem',
    marginTop: '2rem',
    width: '235px'
  }
}))

const Contact = () => {
  const classes = useStyles()
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  //Function Copy Mail
  const copy = (e) => {


    const mail = e.target
    mail.select()
    document.execCommand("copy")
  }

  //PopUp
  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  const handleClick = (Transition) => () => {

    setState({
      open: true,
      Transition,
    });
    console.log(Transition)

  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };



  /* Function copy() */


  return (
    <Container className={classes.contactContainer} maxWidth='md' component='section' variant='section' align='center'>
      <Typography
        component='h4'
        variant='h1'
        color='secondary'
      >Interested In Working Together?
      <span className={classes.spanContact}>
          Contact Me
        </span>
      </Typography>

      <Box className={classes.caja} onClick={handleClick(SlideTransition)}>
        <Input
          className={classes.mail}
          inputProps={{ value: 'adrielgomezignacio@gmail.com', readOnly: true, tpye: 'text' }}
          onClick={copy}
          color='secondary' />
      </Box>



      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        color='secondary'
        message="Mail copied!!!"
        key={state.Transition.name}
      />
    </Container>
  )
}

export default Contact