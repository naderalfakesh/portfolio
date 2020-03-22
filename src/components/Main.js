import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import spaceBg from "../Assets/spaceBg.jpg";
import TypistMain from "./TypistMain"

const useStyles = makeStyles(theme => ({
  main: {
    backgroundImage: `url(${spaceBg})`,
    backgroundSize: "cover",
    height: "100%",
    display: "flex",
    flexDirection : "column",
    justifyContent: "center",
    alignItems: "center"
  },
  
  header: {
    zIndex: 1,
    color: "white",
    "& h1": {
      fontSize: "4em"
    },
    "& p": {
      fontSize: "3em"
    }
  }
}));


export default function Main() {
  const classes = useStyles();
  return (<>
    <div className={classes.main}>
      <div className={classes.header}>
        <h1>NADIR ALFAKESH</h1>
        <p>WEB developer</p>
      </div>

      <div className={classes.header}>
        <TypistMain />
      </div>
    </div>
    </>
  );
}
