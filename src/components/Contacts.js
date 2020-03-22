import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SocialButton from "./SocialButton"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


const useStyles = makeStyles(theme => ({
  bgc: {
    backgroundColor: "#ccc",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

export default function Contacts() {
    const classes = useStyles();
    return (
        <div className={classes.bgc}>
             <SocialButton fontSize="70px" bg="#0077b5" bgl="#005f90" bgr="#1984bc">
               <LinkedInIcon fontSize="inherit" />
              </SocialButton>
             <SocialButton fontSize="70px" bg="#24292e" bgl="#1d2125" bgr="#2e343a">
               <GitHubIcon fontSize="inherit" />
              </SocialButton>
             <SocialButton fontSize="70px" bg="#55acee" bgl="#4489be" bgr="#66b4ef">
               <TwitterIcon fontSize="inherit" />
              </SocialButton>
        </div>
    )
}
