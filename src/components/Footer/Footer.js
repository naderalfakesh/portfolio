import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    minHeight: "75px",
    backgroundColor: "#9a0036",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="body1" align="center" paragraph={true}>
        Created By Nadir Alfakesh @ 2020 , nader.alfakesh@gmail.com
      </Typography>
    </footer>
  );
}
