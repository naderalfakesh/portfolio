import React ,{useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Button from '@material-ui/core/Button';

function ElevationScroll(props) {
  const { children } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: window.innerHeight-10
  });
  


  return React.cloneElement(
    !trigger ? (
      children
    ) : (
      <Slide  direction="down" in={trigger}>
        {children}
      </Slide>
    ),
    {
      elevation: trigger ? 4 : 0,
      position: trigger ? "sticky" : "absolute",
      className: trigger ? classes.sticky : classes.absolute,
    }
  );
}


const useStyles = makeStyles(theme => ({
  absolute: {
    top: "50px",
    right: "75px",
    width: "fit-content",
  },
  sticky: {
    top: 0,
    right: 0,
    width: "100%",
  },
  menuButton: { 
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: "flex-end",
  },
}));



export default function ElevateAppBar(props) {
  useEffect(() => {
    window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener("scroll")
    }
  }, )
  const classes = useStyles();
  const handleClick=(event,element)=>{
    const ref = (event.target.ownerDocument || document).getElementById(element)
    ref.scrollIntoView({behavior: "smooth",block: "start"});
  }
  const handleScroll=()=>{
    const ref = document.getElementById("Resume")
    console.log("Scroll Y: " , window.scrollY)
    console.log("Scroll Top: " , ref.scrollHeight)
  }
  return (
    <React.Fragment>
      <ElevationScroll {...props}>
          <AppBar  >
            <Toolbar className={classes.toolbar} >
              {/* <Typography variant="h6" >
                Home
              </Typography> */}
              <Button color="inherit" onClick={(e)=>handleClick(e,"Main")} >Home</Button>
              <Button color="inherit" onClick={(e)=>handleClick(e,"Portfolio")} >Projects</Button>
              <Button color="inherit" onClick={(e)=>handleClick(e,"Resume")} >Resume</Button>
              <Button color="inherit" onClick={(e)=>handleClick(e,"Contacts")} >Contact</Button>
            </Toolbar>
          </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
