import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Paper,Chip,Avatar } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(1),
      },
      chip: {
        margin: theme.spacing(1),
      },
}));

export default function ChipList({list,color}) {
  const classes = useStyles();
    return (
        <Paper className={classes.root} >
            {list.map((item,i)=> 
            <Chip 
            label={item} 
            className={classes.chip} 
            variant="outlined"
            avatar={<Avatar>{item.charAt(0)}</Avatar>}
            color={color || "primary" }           
            />)}
        </Paper>
    )
}

