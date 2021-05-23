//Components
import Title from '../UI/Title'
import SkillList from './SkillList';
//Matrial UI
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles';





const useStyles = makeStyles(() => ({
  skillsContainer: {

    marginTop: '10rem',


  },
  skillsTitle: {
    marginBottom: '5rem'
  },
  skillsWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: '5rem'

  },

}))

const Skills = () => {
  const classes = useStyles()
  return (
    <Container id='skills' className={classes.skillsContainer} maxWidth='md' component='section' variant='section' align='center'>
      <Title
        text='Skills'
        variant='h3'
        component='h3'
        classname='title'
      />
      <Box className={classes.skillsWrapper}>
        <SkillList

          text='Front End'
          tec1='HTML'
          tec2='CSS (SASS)'
          tec3='Javascript'
          tec4='React'
        />
        <SkillList

          text='Design'
          tec1='Photoshop'
          tec2='Adobe XD'
          tec3='Figma'
          tec4='SketchUp (3D)'
        />
      </Box>


    </Container>
  )
}


export default Skills