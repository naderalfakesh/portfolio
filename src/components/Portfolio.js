import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  bgc: {
    backgroundColor: "gray"
  },
}));
export default function Portfolio() {
    const classes = useStyles();
    return (
        <div className={classes.bgc} >
            Portfolio
        </div>
    )
}
