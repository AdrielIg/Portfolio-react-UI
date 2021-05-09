import React from 'react';
// Components
import CardProject from './CardProject'
//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({

}));

export default function ProjectCenter() {
  const classes = useStyles();


  return (

    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4}>
        <CardProject />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardProject />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardProject />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardProject />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardProject />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardProject />
      </Grid>
    </Grid>

  );
}
