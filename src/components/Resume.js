import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  bgc: {
    backgroundColor: "blue"
  },
}));
export default function Resume() {
    const classes = useStyles();
    return (
        <div className={classes.bgc} >
            Resume
        </div>
    )
}
