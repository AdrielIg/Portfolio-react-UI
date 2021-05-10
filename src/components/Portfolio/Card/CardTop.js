import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import clsx from 'clsx';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';




const CardTop = (props) => {
  return (
    <>
      <CardHeader titleTypographyProps={{ variant: 'h4', align: 'left', }}
        title={props.title}
      />
      {/* ----------IMAGE-------------- */}
      <CardMedia
        className={props.classMedia}
        image={props.imgProject}
        title={props.title}
      />

      {/* ----------CARD BUTTONS-------------- */}
      <CardActions disableSpacing>
        <Button
          size='small'
          variant='contained'
          color='secondary'
          endIcon={<GitHubIcon />}
          href={props.github}
          target='_blank'
        >
          GitHub
        </Button>
        <Button
          className={props.classCardSpaceBtns}
          size='small'
          variant='contained'
          color='secondary'
          endIcon={<VisibilityIcon />}
          href={props.live}
          target='_blank'
        >
          See demo
        </Button>

        <IconButton
          className={clsx(props.classExpand, {
            [props.classExpandOpen]: props.stateExpanded,
          })}
          onClick={props.onHandleExpandClick}
          aria-expanded={props.stateExpanded}
          aria-label="show more"
        >
          <ExpandMoreIcon fontSize='large' className={props.classBackBtn} />
        </IconButton>
      </CardActions>
    </>
  )
}

export default CardTop