import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#4a516b",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    fontFamily: "Raleway-semibold",
    fontSize: "16px",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },

  header: {
    zIndex: 100,
    backgroundColor: "rgba(0,0,0,0.7)",
    padding: "1em 2em",
    margin: "1em 2em",
    color: "white",
    "& h1": {
      fontSize: "3em",
    },
    "& p": {
      fontSize: "2em",
    },
  },
  name: {
    color: "#e31b6d",
  },
  companyLink:{
    color: "white",
    textDecoration:"none",
    transition: "0.3s",
    "&:hover":{
      color: "#e31b6d",
    }

  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <Typography variant="h1">
          Hello, I'm <span className={classes.name}>NADIR ALFAKESH</span>
        </Typography>
        <Typography variant="h5">Tech enthusiast , Frontend developer <a className={classes.companyLink} href="http://www.kolayik.com" target="_blank" rel="noopener noreferrer" >@Kolayik </a> </Typography>
        <Typography variant="subtitle2">nader.alfakesh@gmail.com </Typography>
        <Typography variant="caption">+90 545 693 9297</Typography>
      </div>

    </div>
  );
}
