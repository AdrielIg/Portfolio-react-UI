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

  },
}));

export default function SocialMediaButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ButtonGroup variant='contained' color='secondary'>
        <IconButton href='https://www.linkedin.com/in/adriel-gomez/' rel='noreferrer' target='_blank' color="primary" aria-label="go to adriel gomez linkedin">
          <LinkedInIcon color='primary' fontSize='large' />
        </IconButton>
        <IconButton href='https://github.com/AdrielIg' target='_blank' rel='noreferrer' color="primary" aria-label=" go to adriel gomez github">
          <GitHubIcon color='primary' fontSize='large' />
        </IconButton>
        <IconButton href='https://www.instagram.com/adriiignacio/' rel='noreferrer' target='_blank' color="primary" aria-label="go to adriel gomez instagram">
          <InstagramIcon color='primary' fontSize='large' />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}

