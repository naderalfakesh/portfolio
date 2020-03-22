import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ParticlesBg from 'particles-bg'
import spaceBg from "../Assets/spaceBg.jpg"

const useStyles = makeStyles(theme => ({
  bgc: {
    // backgroundColor: "white",
    backgroundImage: `url(${spaceBg})`,
    backgroundSize: "cover",
    height: "100%"
  },
}));

let config = {

};


export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.bgc}>
      <ParticlesBg 
      type="cobweb" 
      color="#ffffff"
       num={75}   
       config={config} 
      //  bg={true} 
       />
     
    </div>
  );
}
