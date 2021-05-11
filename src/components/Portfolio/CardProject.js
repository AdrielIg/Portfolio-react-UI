import React from 'react';

//Componentes
import reactIcon from '../../Assets/Icons/react.svg'

import CardTop from './Card/CardTop'



//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'


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
  },
  cardDescription: {
    fontSize: '1.4rem',
    marginBottom: '2rem'
  },
  cardDescIcons: {
    margin: "0 2rem"

  },

}));





export default function CardProject(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.cardTitle} align='center'>
      <CardTop
        title={props.title}
        imgProject={props.imgProject}
        github={props.github}
        live={props.live}
        classMedia={classes.media}
        classCardSpaceBtns={classes.cardSpaceBtns}
        classExpand={classes.expand}
        classExpandOpen={classes.expandOpen}
        classBackBtn={classes.backBtn}
        stateExpanded={expanded}
        onHandleExpandClick={handleExpandClick}
      />
      {/* ----------EXPANSIVE CONTENT-------------- */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* //ACA VA LO DESPLEGABLE */}
          <Typography className={classes.cardDescription} component='p'>
            {props.desc}
          </Typography>
          <Box component='div'>
            <img src={props.icon1} />
            <img className={classes.cardDescIcons} src={props.icon2} />
            <img src={props.icon3} />

          </Box>

        </CardContent>
      </Collapse>
    </Card >
  );
}
