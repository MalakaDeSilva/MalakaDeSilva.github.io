import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CustomCard from "../common/CustomCard";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  timeline: {
    [theme.breakpoints.up("md")]: {
      position: "relative",
      alignItems: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "flex-end",
    },
  },
}));

function CustTimeline(props) {
  const classes = useStyles();
  //const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const matches = useMediaQuery("(max-width:600px)");

  const createEduTimeline = () => {
    const details = props.education;
    let items = [];

    details.forEach((element, i) => {
      items.push(
        <TimelineItem style={{ "::before": { flex: 0.2 } }} key={i}>
          <TimelineSeparator>
            <TimelineDot variant="outlined"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                {element.school}
              </Typography>
              <Typography>
                From : {element.from}
                <br />
                To : {element.to}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      );
    });

    return items;
  };

  const createWorkTimeline = () => {
    const details = props.work;
    let items = [];
    details.forEach((element, i) => {
      items.push(
        <TimelineItem key={i}>
          <TimelineSeparator>
            <TimelineDot variant="outlined"></TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" component="h1">
                {element.company}
              </Typography>
              <h6>{element.title}</h6>
              <Typography>
                From : {element.from}
                <br />
                To : {element.to}
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      );
    });

    return items;
  };

  let content = (
    <div className="col-center pt-3 pb-1">
      <h1>{props.type === "work" ? "Work" : "Education"}</h1>
      <Timeline
        align={matches ? "left" : "alternate"}
        className="timeline-cust"
        style={{ width: "100%" }}
      >
        {props.type === "education"
          ? createEduTimeline()
          : createWorkTimeline()}
      </Timeline>
    </div>
  );

  return <CustomCard content={content}></CustomCard>;
}

export default CustTimeline;
