import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper,Chip,Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: "2em",
      },
      chip: {
        margin: ".5em 1em",
      },
}));

export default function ChipList({list,color}) {
  const classes = useStyles();
    return (
        <Paper className={classes.root} elevation={3} >
            {list.map((item,i)=> 
            <Chip
            key={Math.random()} 
            label={item} 
            className={classes.chip} 
            variant="outlined"
            avatar={<Avatar>{item.charAt(0)}</Avatar>}
            color={color || "primary" }           
            />)}
        </Paper>
    )
}

