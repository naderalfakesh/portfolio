import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    wave: {
        display: "inline-block",
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
        verticalAlign: "middle",
        overflow: "hidden",
    },
    svg:{
        display: "inline-block",
        position: "absolute",
        bottom: 0,
        left: 0,
    }
}));

export default function Particles() {
  const classes = useStyles();
  return (
    <div className={classes.wave}>
        <svg className={classes.svg} viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
            <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{stroke: "none", fill:"#f2f2f2" }}></path>
        </svg>
    </div>
  );
}
