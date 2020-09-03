import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../WebCard";
import Wave from "../utilities/Wave";
import site1 from "../../Assets/site1.jpg";
import site2 from "../../Assets/site2.jpg";
import site3 from "../../Assets/site3.jpg";
import movieExplorer from "../../Assets/movieExplorer.jpg";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
    justifyContent: "space-evenly",
    placeItems: "center",
    padding: "3em 0 10em 0",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      padding: "2em 0 5em 0",
      gridTemplateColumns: "repeat(2, 1fr)",
      justifyContent: "center",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2em 0 5em 0",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Card
        image={movieExplorer}
        title={"Natakallam"}
        description={
          "I adapted the Container/view design pattern in React while using functional components with hooks. CSS Material UI , Data source restful API"
        }
        code={"https://github.com/naderalfakesh/movie-explorer"}
        preview={"https://naderalfakesh.github.io/movie-explorer"}
      />
      <Card
        image={site1}
        title={"Natakallam"}
        description={
          "This is a real client project done by a team of bootcamp graduates including me, Used React and material UI frameworks."
        }
        preview={"https://ntk.netlify.app/"}
      />
      <Card
        image={site2}
        title={"ABTrend shoes"}
        description={
          "This page was made for a technical test for a web development agency,Implementation of home page using pure css and html"
        }
        code={"https://github.com/naderalfakesh/abtrend_test"}
        preview={"https://naderalfakesh.github.io/abtrend_test/"}
      />
      <Card
        image={site3}
        title={"King of thieves game"}
        description={
          "A mock of android game “King of thieves” made for a technical interview, An emulation of gravity using Jquery, html and javascript."
        }
        code={"https://github.com/naderalfakesh/Kingofthieves"}
        preview={"https://naderalfakesh.github.io/Kingofthieves/"}
      />
      <Wave color="#f2f2f2" mirror />
    </div>
  );
}
