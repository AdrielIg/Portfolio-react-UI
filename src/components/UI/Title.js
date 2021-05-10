import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  title: {
    margin: '5rem 0'

  },
  subTitle: {
    marginTop: '5rem'
  }
}))

const Title = (props) => {
  return (
    <Typography className={props.classname} variant={props.variant} component={props.component} color='secondary'>{props.text}</Typography>
  )
}

export default Title