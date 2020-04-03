import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SocialButton from "../SocialButton"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Wave from "../utilities/Wave"

const useStyles = makeStyles(theme => ({
  Contacts: {
    backgroundColor: "#ccc",
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    position: "relative",
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: "1fr",
    },
  },
}));

export default function Contacts() {
    const classes = useStyles();
    return (
        <div className={classes.Contacts}>
             <SocialButton href="https://www.linkedin.com/in/nadir-alfakesh" fontSize="70px" bg="#0077b5" bgl="#005f90" bgr="#1984bc">
               <LinkedInIcon fontSize="inherit" />
              </SocialButton>
             <SocialButton href="https://www.github.com/naderalfakesh" fontSize="70px" bg="#24292e" bgl="#1d2125" bgr="#2e343a">
               <GitHubIcon fontSize="inherit" />
              </SocialButton>
             <SocialButton href="https://www.twitter.com/naderalfakesh" fontSize="70px" bg="#55acee" bgl="#4489be" bgr="#66b4ef">
               <TwitterIcon fontSize="inherit" />
              </SocialButton>
              <Wave color="#ccc" mirror />
        </div>
    )
}
