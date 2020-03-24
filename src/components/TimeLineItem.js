import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography  } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  main: {
    margin: "20px 0",
    paddingLeft: "20px",
    
    "&::before": {
      content: '""',
      background: "white",
      display: "inline-block",
      position: "absolute",
      borderRadius: "50%",
      border: "3px solid #22c0e8",
      left: "20px",
      width: "20px",
      height: "20px",
      zIndex: "400"
    },
    heading: {
      margin: "0",
    },
    date: {
      margin: "0px",
    },
    body: {
      margin: "0",
    }
  }
}));
export default function TimeLineItem(props) {
  const classes = useStyles();
  return (
    <li className={classes.main}>
      <Typography color="textPrimary" variant="h5"  >
        {props.title || "title"}
      </Typography>
      <Typography color="textSecondary" variant="subtitle1"  >
        {props.date || "2016-2017"}
      </Typography>
      <Typography color="textPrimary" variant="body1" >
        {props.body || "Body"}
      </Typography>
    </li>
  );
}
