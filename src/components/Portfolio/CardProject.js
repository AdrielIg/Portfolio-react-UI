import React from 'react';

//Componentes
import reactIcon from '../../Assets/Icons/react.svg'

import CardTop from './Card/CardTop'



//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';


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
  cardDescription: {
    fontSize: '1.4rem'
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
      <CardTop
        classMedia={classes.media}
        imgProject={reactIcon}
        classCardDescription={classes.cardDescription}
        classCardSpaceBtns={classes.cardSpaceBtns}
        classExpand={classes.expand}
        classExpandOpen={classes.expandOpen}
        classBackBtn={classes.backBtn}
        stateExpand={expanded}
        onHandleExpandClick={handleExpandClick}
      />
      {/* ----------EXPANSIVE CONTENT-------------- */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* //ACA VA LO DESPLEGABLE */}
          <img src={reactIcon} />
          <img src={reactIcon} />
          <img src={reactIcon} />
          <img src={reactIcon} />
        </CardContent>
      </Collapse>
    </Card >
  );
}
