import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typist from "react-typist";

const useStyles = makeStyles(theme => ({
  bgc: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2em"
  },
}));
export default function Resume() {
    const classes = useStyles();
    return (
        <div className={classes.bgc} >
             <Typist cursor={{hideWhenDone: true, hideWhenDoneDelay: 0}}>
        <span> Nadir Alfakesh. Web Developer</span>
        <Typist.Backspace count={9} delay={200} />
        <span> Expert </span>
      </Typist>
     
        </div>
    )
}
