//Material UI
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  aboutContainer: {
    minHeight: '50vh',
    marginTop: '5rem',
    padding: '0 8rem'
  },
  aboutDescription: {
    fontSize: '1.6rem',
    margin: '3rem 0'
  },
  aboutLocation: {
    fontWeight: 700
  }
}))

const About = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='md' component='section' id='about' align='center' className={classes.aboutContainer}>
      <Typography variant='h3' component='h3' color='secondary'>
        About Me
      </Typography>

      <Typography className={classes.aboutDescription} color='primary'>
        Looking to make my way in the IT field to become a Trainee / Jr. developer. I am an enthusiastic person, committed to my tasks, self-taught, who never tires of learning and always in search of new knowledge. I´m 23 and I´m from <span className={classes.aboutLocation}> Buenos Aires, Argentina.</span>
      </Typography>
    </Container >
  )
}

export default About