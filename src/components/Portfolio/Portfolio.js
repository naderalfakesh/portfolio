import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from "../WebCard"
import Wave from "../utilities/Wave"
import site1 from "../../Assets/site1.jpg"
import site2 from "../../Assets/site2.jpg"
import site3 from "../../Assets/site3.jpg"


const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "#f2f2f2",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
    justifyContent: "space-evenly",
    placeItems: "center",
    padding: "0 0 5em 0",
    position: "relative",
    [theme.breakpoints.down('sm')]: {
    padding: "2em 0 5em 0",
    gridTemplateColumns: "repeat(2, 1fr)",
      justifyContent: "center",
    },
    [theme.breakpoints.down('xs')]: {
    padding: "2em 0 5em 0",
    gridTemplateColumns: "repeat(1, 1fr)",
    },
  }
})); 



export default function Portfolio() {
    const classes = useStyles();
    return (
        <div className={classes.main} >
            <Card image={site1} title={"Website 1"} code={"/"} preview={"/"} description={"Made using HTML CSS ..."} />
            <Card image={site2} title={"Website 2"} code={"/"} preview={"/"} description={"Made using HTML CSS ..."} />
            <Card image={site3} title={"Website 3"} code={"/"} preview={"/"} description={"Made using HTML CSS ..."} />
            {/* <Wave color="#f2f2f2" flip mirror /> */}
            <Wave color="#f2f2f2" mirror/>
        </div>
    )
}
