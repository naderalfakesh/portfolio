import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export default function Wave({ color, mirror }) {
  const useStyles = makeStyles((theme) => ({
    svg: {
      display: "inline-block",
      position: "absolute",
      transformOrigin: "bottom",
      top: 1,
      left: 0,
      zIndex: 1,
      transform: `scale(${mirror ? -1 : 1},1) translate(0,-100%) `,
      [theme.breakpoints.down("sm")]: {
        top: 2,
      },
    },
  }));
  const classes = useStyles();
  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill={color || "current-background-color"}
        fillOpacity="1"
        d="M0,192L60,208C120,224,240,256,360,277.3C480,299,600,309,720,288C840,267,960,213,1080,213.3C1200,213,1320,267,1380,293.3L1440,320L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
}
