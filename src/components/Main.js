import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typist from 'react-typist';

const useStyles = makeStyles(theme => ({
  bgc: {
    backgroundColor: "red",
    height:"100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
}));
export default function Main() {
    const classes = useStyles();
    return (
        <div className={classes.bgc}>
            <Typist>
                Animate this text.
            </Typist>
        </div>
    )
}
