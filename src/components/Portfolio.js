import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from "./WebCard"

const useStyles = makeStyles(theme => ({
  bgc: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  }
})); 



export default function Portfolio() {
    const classes = useStyles();
    return (
        <div className={classes.bgc} >
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}
