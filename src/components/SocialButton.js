import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function SocialButton(props) {
  const useStyles = makeStyles((theme) => ({
    link: {
      position: "relative",
      display: "block",
      width: "80px",
      height: "80px",
      background: "#fff",
      textAlign: "center",
      transform:
        "perspective(1000px) rotate(-30deg) skew(25deg) translate(0,0)",
      transition: "0.5s",
      boxShadow: "-20px 20px 10px rgba(0, 0, 0, 0.5)",
      fontSize: `${props.fontSize || "40px"}`,
      "&::before": {
        content: '""',
        position: "absolute",
        top: "10px",
        left: "-20px",
        height: "100%",
        width: "20px",
        background: "#b2b2b2",
        transition: "0.5s",
        transform: "rotate(0deg) skewY(-45deg)",
      },
      "&:hover::before": {
        backgroundColor: `${props.bgl || "#fff"}`,
      },
      "&:hover::after": {
        backgroundColor: `${props.bgr || "#fff"}`,
      },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-20px",
        left: "-10px",
        height: "20px",
        width: "100%",
        background: "#e5e5e5",
        transition: "0.5s",
        transform: "rotate(0deg) skewX(-45deg)",
      },
      "&:hover": {
        transform:
          "perspective(1000px) rotate(-30deg) skew(25deg) translate(20px,-20px)",
        boxShadow: "-50px 50px 50px rgba(0, 0, 0, 0.5)",
        backgroundColor: `${props.bg || "#fff"}`,
      },
      "& svg ": {
        color: "#555",
      },
      "&:hover svg ": {
        color: "#fff",
      },
    },
  }));
  const classes = useStyles();
  return (
    <a
      href={props.href || "/"}
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
}
