import React from "react";
import Box from "@mui/material/Box";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { useStyles } from "./timeline_styles";

const profile_data = {
  Name: "Navdeep Mishra",
  Birthday: "20/06/2000",
  Job: "FullStack Developer",
  Email: "navdeep@gm.com",
  Skype: "skype@gm.com",
};
function ProfileTimeline() {
  let counter = 0;
  const classes = useStyles();
  return Object.keys(profile_data).map((el, key) => {
    counter += 1;
    console.log(counter === Object.keys(profile_data).length);
    return (
      <TimelineItem
        key={key}
        className={(classes.timeline_item, classes.timeline_margin)}
      >
        {counter === Object.keys(profile_data).length ? (
          <TimelineSeparator>
            <TimelineDot className={classes.timelinedot} />
          </TimelineSeparator>
        ) : (
          <TimelineSeparator>
            <TimelineDot className={classes.timelinedot} />
            <TimelineConnector className={classes.timelineconnector} />
          </TimelineSeparator>
        )}
        <TimelineContent className={classes.timeline_content}>
          {el}:{" "}
          <Typography
            variant="caption"
            component="span"
            className={classes.data_values}
          >
            {profile_data[el]}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });
}

export default ProfileTimeline;
