import React from 'react';

//Componentes
import project1 from '../../img/Proyect1.png'
import project2 from '../../img/Proyect2.png'
import project3 from '../../img/Proyect3.png'
import project4 from '../../img/Proyect4.png'
import project5 from '../../img/Proyect5.png'
import project6 from '../../img/Proyect6.png'

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { GitHub } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    width: '98%',
    paddingTop: '70.9%', // 16:9
    backgroundColor: '#969696'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',

  },
  cardTitle: {
    backgroundColor: '#EBE6E6'
  },
  cardSpaceBtns: {
    marginLeft: '1rem'
  },
  backBtn: {
    backgroundColor: '#D69D27',
    borderRadius: '50%'
  }
}));

export default function CardProject(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.cardTitle} align='center'>
      <CardHeader titleTypographyProps={{ variant: 'h4', align: 'left', color: 'secondary', }}
        title='Adro-chat'
      />

      <CardMedia
        className={classes.media}
        image={project6}
        title="Adro-chat"
      />
      <CardContent>
        <Typography variant="body1" color="" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          size='small'
          variant='contained'
          color='secondary'
          endIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
        <Button
          className={classes.cardSpaceBtns}
          size='small'
          variant='contained'
          color='secondary'
          endIcon={<VisibilityIcon />}
        >
          See demo
        </Button>

        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon fontSize='large' className={classes.backBtn} />
        </IconButton>
      </CardActions>
      {/* Expansive Content */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* //ACA VA LO DESPLEGABLE */}
        </CardContent>
      </Collapse>
    </Card >
  );
}
