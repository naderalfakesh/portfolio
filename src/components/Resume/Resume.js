import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import TimeLine from "../TimeLine";
import ChipList from "../ChipList";
// import Wave from "../Wave"
import Wave from "../utilities/Wave"
 
const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
    padding: "20px 0 70px 0",
    [theme.breakpoints.down('sm')]: {
      },
    [theme.breakpoints.down('xs')]: {
    },
  },
  section: {
    padding: "30px 20px",
    flexBasis: "50%",
    "& h4": {
      padding: "30px 20px"
    },
    [theme.breakpoints.down('sm')]: {
      flexBasis: "100%",
      },
    [theme.breakpoints.down('xs')]: {
    },
  },
}));
export default function Resume() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.section}>
          <Typography color="textPrimary" variant="h4" gutterBottom={true}>
            Job Experience
          </Typography>
          <TimeLine items={jobList} />
      </div>
      <div className={classes.section}>
      <Typography color="textPrimary" variant="h4" gutterBottom={true}>
            My Skills
          </Typography>
          <ChipList list={skillsList} />
      </div>
      <div className={classes.section}>
        <Typography color="textPrimary" variant="h4" gutterBottom={true}>
          Education
        </Typography>
        <TimeLine items={eduList} />
      </div>
      <div className={classes.section}>
      <Typography color="textPrimary" variant="h4" gutterBottom={true}>
            My interests
          </Typography>
          <ChipList list={InterestsList} color="secondary" />
      </div>
      <Wave color="white"/>
    </div>
  );
}

const jobList = [
  {
    title: "Sales consultant @ Dal Elektrik Motors",
    date: "2016-present",
    body:
      "Dealing with customer inquiries domestic and International on daily basis. "
  },
  {
    title: "Database Developer @ Hyper Technology L.L.C.",
    date: "2013-2015",
    body:
      "Making periodic reports , Maintaining the integrity of the data and fixing bugs on CRUD user interface.Technologies we used : IBM AS400 operation system with RPGLE programming language on server side."
  }
];
const eduList = [
  {
    title: "Computer Engineering @ Damascus University",
    date: "2008-2013",
    body: "I have a bachelors degree with 75,03% score"
  },
  {
    title: "Frontend dev bootcamp @ FlatIron & Re:coded",
    date: "2020",
    body: "Completed the frontend bootcamp on FlatIron school with alot of training with Re:coded NGO starting from fundementals ending with REACT in production apps"
  },
  {
    title: "Frontend dev bootcamp @ Kodluyoruz.org",
    date: "2019",
    body: "72 hours of training on React and general frontend aspects."
  },
  {
    title: "Machine learning bootcamp @ Kodluyoruz.org",
    date: "2019",
    body: "60 hours spend on python training with NLP project."
  },
  {
    title: "IOT Introduction workshop @ Habitat.org",
    date: "2019",
    body: "Three days workshop on IOT general info and applying on Arduino and Raspberry pi development boards. "
  },
  {
    title: "Various learnigng content",
    date: "Always",
    body:
      "I spend alot of time on online learning platforms such as Udacity, Coursera, Udemy and youtube."
  }
];

const skillsList = [
  "HTML",
  "CSS",
  "JS",
  "React",
  "Redux",
  "Git Version control",
  "Linux",
  "Firbase SDK",
  "SQL",
  "Bootstrap",
  "Material UI",
  "Styled Components"
];
const InterestsList = [
  "Web Technologies",
  "IOT",
  "AI",
  "Python",
  "Vue JS",
  "TypeScript",
  "Webpack",
  "GraphQL",
  "Agile Methodoloy"
];
