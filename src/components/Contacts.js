import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  bgc: {
    backgroundColor: "red"
  },
}));

export default function Contacts() {
    const classes = useStyles();
    return (
        <div className={classes.bgc}>
            Contacts
        </div>
    )
}
