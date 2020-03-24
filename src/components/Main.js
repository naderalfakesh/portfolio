import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import spaceBg from "../Assets/spaceBg.jpg";
import TypistMain from "./TypistMain"

const useStyles = makeStyles(theme => ({
  main: {
    // backgroundImage: `url(${spaceBg})`,
    // backgroundSize: "cover",
    backgroundColor: "#4a516b",
    height: "100%",
    display: "flex",
    flexDirection : "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Raleway-semibold",
    fontSize: "24pt",
    lineHeight: "30pt"
  },
  
  header: {
    zIndex: 1,
    color: "white",
    "& h1": { 
      // fontSize: "1em"
    },
    "& p": {
      // fontSize: "1em"
    }
  },
  name: {
    color: "#e31b6d"
  }
}));


export default function Main() {
  const classes = useStyles();
  return (<>
    <div className={classes.main}>
      <div className={classes.header}>
        <h1>Hello, I'm <span className={classes.name}>NADIR ALFAKESH</span></h1>
        <p>WEB developer</p>
      </div>

      <div className={classes.header}>
        <TypistMain />
      </div>
    </div>
    </>
  );
}
