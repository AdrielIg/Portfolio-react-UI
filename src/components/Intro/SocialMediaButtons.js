import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(4),
    },
    introBtns: {
      fontSize: "2rem",
      margin: '0 8rem'
    }

  },
}));

export default function SocialMediaButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup fontSize='medium' variant='contained' color='secondary'>
        <IconButton href='https://www.linkedin.com/in/adriel-gomez/' target='__blank' color="primary" aria-label="add to shopping cart">
          <LinkedInIcon className={classes.introBtns} color='secondary' fontSize='large' />
        </IconButton>
        <IconButton href='https://github.com/AdrielIg' target='__blank' color="primary" aria-label="add to shopping cart">
          <GitHubIcon className={classes.introBtns} color='secondary' fontSize='large' />
        </IconButton>
        <IconButton href='https://www.instagram.com/adriiignacio/' target='__blank' color="primary" aria-label="add to shopping cart">
          <InstagramIcon className={classes.introBtns} color='secondary' fontSize='large' />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}

