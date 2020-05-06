import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import WebIcon from "@material-ui/icons/Web";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    // margin: "20px 0",
    width: "300px",
    height: "400px",
    background: "#fff",
    transformStyle: "preserve-3d",
    transform: "perspective(2000px)",
    transition: "1s",
    boxShadow: "inset 300px 0 50px rgba(0,0,0,.5)",
    zIndex: 2,
    "&:hover": {
      transform: "perspective(2000px) rotate(-10deg) ",
      boxShadow: "inset 20px 0 50px rgba(0,0,0,.5)",
      zIndex: 5,
    },
    "&:hover div:first-child ": {
      transform: "rotateY(-135deg)",
    },
    [theme.breakpoints.down("md")]: {
      width: "270px",
      height: "360px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "240px",
      height: "320px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "400px",
    },
  },
  imgBox: {
    position: "relative",
    width: "100%",
    height: "100%",
    boxShadow: "10px 0 20px rgba(0,0,0,.5)",
    boxSizing: "border-box",
    transformOrigin: "left",
    zIndex: 1,
    transition: "1s",
  },
  cardimg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
  },
  details: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    overflow: "hidden",
    "& div": {
      width: "100%",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-around",
    },
  },
  link: {
    fontSize: "3em",
    color: "#555",
    textDecoration: "none",
    "&:hover": {
      color: "#4040a1",
    },
  },
}));

export default function WebCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.imgBox}>
        <img className={classes.cardimg} src={props.image} alt="" />
      </div>
      <div className={classes.details}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div>
          {props.code && (
            <a
              href={props.code}
              title="Check the code"
              className={classes.link}
            >
              <GitHubIcon fontSize="inherit" />
            </a>
          )}
          {props.preview && (
            <a
              href={props.preview}
              title="Live preview"
              className={classes.link}
            >
              <WebIcon fontSize="inherit" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
