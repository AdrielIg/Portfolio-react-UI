import React from 'react';
// Components
import CardProject from './CardProject'
//Material UI

import Grid from '@material-ui/core/Grid';
import projects from '../../Data/Data'





export default function ProjectCenter() {



  return (

    <Grid container spacing={6}>
      {projects.map(project => {
        return (
          <Grid key={project.id} item xs={12} sm={6} md={4}>
            <CardProject
              title={project.title}
              imgProject={project.imgProject}
              github={project.github}
              live={project.live}
              desc={project.description}
              icon1={project.tecnologias.icon1}
              icon2={project.tecnologias.icon2}
              icon3={project.tecnologias.icon3}

            />
          </Grid>
        )
      })}


    </Grid>

  );
}
