import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import cardo from "../Assets/cardo.jpg"
const useStyles = makeStyles(theme => ({
   card:{
    position: "relative",
    margin: "20px 0",
    width: "300px",
    height: "400px",
    background: "#fff",
    transformStyle: "preserve-3d",
    transform: "perspective(2000px)",
    transition: "1s",
    boxShadow: "inset 300px 0 50px rgba(0,0,0,.5)",
    '&:hover':{
    transform: "perspective(2000px) rotate(-10deg) ",
    boxShadow: "inset 20px 0 50px rgba(0,0,0,.5)",
    },
    '&:hover div:first-child ':{
        transform: "rotateY(-135deg)"
    }
   },
   imgBox:{
       position: "relative",
       width: "100%",
       height: "100%",
       border: "1px solid #000",
       boxSizing: "border-box",
       transformOrigin: "left",
       zIndex: 1,
       transition: "1s"
   },
   cardimg:{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover"
   },
   details:{
    position: "absolute",
    top: 0,
    left: 0,
    boxSizing: "border-box",
    padding: "20px",
   },
   
  })); 

export default function WebCard() {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img className={classes.cardimg} src={cardo} alt="" />
            </div>
            <div className={classes.details}>
                <h2>lorem ipsum</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    )
}
