import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';





export default function Pop(props) {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  function SlideTransition(props) {
    return <Slide {...props} direction="up" />;
  }

  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };

  return (
    <div>

      <Button onClick={handleClick(SlideTransition)}>Slide Transition</Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        color='secondary'
        message="Mail copied!!!"
        key={state.Transition.name}
      />
    </div>
  );
}