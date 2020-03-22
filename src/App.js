import React from 'react';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contacts from './components/Contacts';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Particles from "./components/Particles"

const useStyles = makeStyles(theme => ({
  fullHeight: {
    height: "100vh"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline />
      <Particles />
      <Grid container>
        <Grid item xs={12} className={classes.fullHeight}><Main/></Grid>
        <Grid item xs={12} className={classes.fullHeight}><Portfolio/></Grid>
        <Grid item xs={12} className={classes.fullHeight}><Resume/></Grid>
        <Grid item xs={12} className={classes.fullHeight}><Contacts/></Grid>
      </Grid>
    </div>
  );
}

export default App;
