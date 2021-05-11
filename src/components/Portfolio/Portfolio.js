import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCenter from './ProjectCenter';

const useStyles = makeStyles(() => ({
  portfolioContainer: {
    minHeight: '60vh',
    marginTop: '6rem'

  },
  portfolioTitle: {
    marginBottom: '5rem'
  }
}))

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Container id='portfolio' maxWidth='md' className={classes.portfolioContainer} component='section' variant='section' align='center'>
      <Typography className={classes.portfolioTitle} variant='h3' component='h3' color='secondary'>
        Portfolio
      </Typography>
      <ProjectCenter />
    </Container>
  )
}

export default Portfolio