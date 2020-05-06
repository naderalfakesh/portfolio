import React from "react";
import Main from "./components/Main/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Contacts from "./components/Contacts/Contacts";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "./components/Particles";
import AppBar from "./components/appBar/AppBar";
import Footer from "./components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  fullHeight: {
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline />
      <AppBar />
      <Particles />
      <Grid container>
        <Grid item xs={12} className={classes.fullHeight} id="Main">
          <Main />
        </Grid>
        <Grid item xs={12} className={classes.fullHeight} id="Portfolio">
          <Portfolio />
        </Grid>
        <Grid item xs={12} className={classes.fullHeight} id="Resume">
          <Resume />
        </Grid>
        <Grid item xs={12} className={classes.fullHeight} id="Contacts">
          <Contacts />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
