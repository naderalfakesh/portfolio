import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography  } from "@material-ui/core";
import TimeLine from "./TimeLine";

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexBasis: "50%",
    alignItems: "flex-start",
    // fontSize: "2em",
    position: "relative",
    padding: "30px 0"
  },
  section:{
    padding: "0 20px",
    width: "100%",
    '& h2':{
      marginLeft: "20px"
    }
  }
}));
export default function Resume() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.section}>
        <Typography color="textPrimary" variant="h4" >Job Experience</Typography>
        <TimeLine items={jobList} />
        </div> 
      <div className={classes.section}>
        <Typography color="textPrimary" variant="h4" >Education</Typography>
        <TimeLine items={eduList} />
        </div> 
    </div>
  );
}

const jobList=[
  {
      title: "Sales consultant @ Dal Elektrik Motors",
      date: "2016-present",
      body: "Sales consultant @ Dal Elektrik Motors Sales consultant @ Dal Elektrik Motors",
  },
  {
      title: "Database Developer @ Hyper Technology L.L.C.",
      date: "2013-2015",
      body: "Database Developer @ Hyper Technology L.L.C.  Database Developer @ Hyper Technology L.L.C.",
  },
]
const eduList=[
  {
      title: "Computer Engineering @ Damascus University",
      date: "2008-2013",
      body: "Bachelors degree with 75,03% score",
  },
  {
      title: "Frontend dev bootcamp @ FlatIron & Re:coded",
      date: "2020",
      body: "React",
  },
  {
      title: "Frontend dev bootcamp @ Kodluyoruz.org",
      date: "2019",
      body: "General",
  },
  {
      title: "Machine learning bootcamp @ Kodluyoruz.org",
      date: "2019",
      body: "React",
  },
  {
      title: "IOT Introduction @ Habitat.org",
      date: "2019",
      body: "React",
  },
  {
      title: "Various learnigng content",
      date: "Always",
      body: "I spend alot of time on online learning platforms such as Udacity , Coursera ,Udemy and youtube",
  },
]