import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from "./WebCard"
import Wave from "./Wave"
import site1 from "../Assets/site1.jpg"
import site2 from "../Assets/site2.jpg"
import site3 from "../Assets/site3.jpg"


const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "30px 0"
  }
})); 



export default function Portfolio() {
    const classes = useStyles();
    return (
        <div className={classes.main} >
            <Card image={site1} title={"Website 1"} code={"/"} preview={"/"} description={"Made using HTML CSS ..."} />
            <Card image={site2} title={"Website 2"} code={"/"} preview={"/"} description={"Made using HTML CSS ..."} />
            <Card image={site3} title={"Website 3"} code={"/"} preview={"/"} description={"Made using HTML CSS ..."} />
            {/* <Wave /> */}
        </div>
    )
}
