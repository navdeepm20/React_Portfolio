import React, { useContext } from "react";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { useStyles } from "./timeline_styles";
import { globalContext } from "../../../context/GlobalContext";

function ProfileTimeline() {
  const data = useContext(globalContext).data.profile;
  let counter = 0;
  const classes = useStyles();
  return Object.keys(data).map((el, ind) => {
    counter += 1;
    return (
      <TimelineItem
        key={`timeline-${ind}`}
        className={(classes.timeline_item, classes.timeline_margin)}
      >
        {counter === Object.keys(data).length ? (
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
          {el.charAt(0).toUpperCase() + el.slice(1)}:{" "}
          <Typography
            variant="caption"
            component="span"
            className={classes.data_values}
          >
            {data[el]}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    );
  });
}

export default ProfileTimeline;
