import React from "react";
import ParticlesBg from "particles-bg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  particle: {
    position: "absolute",
    height: "100%",
    width: "100%",
    zIndex: 0,
    overflow: "hidden",
  },
}));

export default function Particles() {
  const classes = useStyles();
  return (
    <div className={classes.particle}>
      <ParticlesBg
        type="cobweb"
        color="#f1f1f1"
        num={100}
        //  bg={true}
      />
    </div>
  );
}
