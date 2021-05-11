//components
import Title from "../UI/Title"
//Material UI
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'



const useStyles = makeStyles(() => ({
  listSkills: {
    marginTop: '1.5rem'
  },
  listSkill: {
    margin: '.5rem 0'
  },

  divisor: {
    backgroundColor: 'white',
    marginTop: '.4rem'
  }
}))


const SkillList = (props) => {
  const classes = useStyles()
  return (
    <Box >
      <Title
        component='h4'
        variant='h4'
        text={props.text}
        classname='subTitle'
      />
      <Divider className={classes.divisor} />
      <Box className={classes.listSkills}>
        <List component='ul'>
          <li>
            <Typography component='p' color='primary'>{props.tec1}</Typography>
          </li>
          <li>
            <Typography className={classes.listSkill} component='p' color='primary'>{props.tec2}</Typography>
          </li>
          <li>
            <Typography className={classes.listSkill} component='p' color='primary'>{props.tec3}</Typography
            ></li>
          <li>
            <Typography component='p' color='primary'>{props.tec4}</Typography>
          </li>
        </List>

      </Box >

    </Box >
  )
}

export default SkillList