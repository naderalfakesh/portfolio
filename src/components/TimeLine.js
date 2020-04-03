import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TimeLineItem from "./TimeLineItem"


const useStyles = makeStyles(theme => ({
    mainTL:{
        listStyleType: "none",
        position: "relative",
        // fontSize: "1em",
        '&::before':{
            content: '""',
            background: "#d4d9df",
            display: "inline-block",
            position: "absolute",
            left: "29px",
            width: "2px",
            height: "100%",
            zIndex: "400",
        }
    }
}));
export default function TimeLine(props) {
    const classes = useStyles();
    return (
        <ul className={classes.mainTL}>
            {props.items.map(item=><TimeLineItem key={Math.random()} title={item.title} date={item.date} body={item.body} />)}
        </ul>
    )
}
