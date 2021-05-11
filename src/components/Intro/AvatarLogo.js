/* react */
import avatar from '../../Assets/img/Avatar.jpeg'
import picture from '../../Assets/img/selfie.jpeg'


//Material ui
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({


  introContainerImg: {
    height: '16rem',
    width: '16rem',
    position: 'relative',
    borderRadius: '50% 10px 50% 10px',


  },
  introImgAvatar: {
    height: '100%',
    width: 'auto',
    borderRadius: '50% 10px 50% 10px',
    border: '5px solid #F79E02',
    '&:hover': {
      opacity: 0
    }

  },
  introImgPicture: {
    height: '100%',
    width: 'auto',
    borderRadius: '50% 10px 50% 10px',
    border: '5px solid #F79E02',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -100


  }
}))
const AvatarLogo = () => {


  const classes = useStyles()


  return (

    <Box component='div' className={classes.introContainerImg}>

      <img className={classes.introImgAvatar} src={avatar} alt='Logo Adriel Gomez' />
      <img className={classes.introImgPicture} src={picture} alt='Logo Adriel Gomez' />
    </Box>

  )
}

export default AvatarLogo