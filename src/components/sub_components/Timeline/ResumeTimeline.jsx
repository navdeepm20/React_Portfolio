import React from "react";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { useStyles } from "./timeline_styles";

function ProfileTimeline() {
  let counter = 0;
  const classes = useStyles();
  return (
    <>
      <TimelineItem
        className={(classes.timeline_item, classes.timeline_margin)}
      >
        <TimelineSeparator>
          <TimelineDot className={classes.timelinedot} />
          <TimelineConnector className={classes.timelineconnector} />
        </TimelineSeparator>

        <TimelineContent sx={{ pb: "40px", pl: "30px", pt: 0 }}>
          <Typography
            variant="caption"
            component="h3"
            sx={{ fontSize: "16px", fontWeight: 500 }}
          >
            Art Director - Facebook Inc
          </Typography>
          <Typography
            variant="caption"
            component="span"
            sx={{ fontSize: "12px", pt: 9, pb: 9 }}
          >
            2010 - Present <br />
          </Typography>
          <Typography
            variant="caption"
            component="span"
            sx={{ fontSize: "13px", color: "#989898" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            dolore saepe. Quas numquam, voluptatum earum cumque eius iste
            minima! Quia.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        className={(classes.timeline_item, classes.timeline_margin)}
      >
        <TimelineSeparator>
          <TimelineDot className={classes.timelinedot} />
          <TimelineConnector className={classes.timelineconnector} />
        </TimelineSeparator>

        <TimelineContent sx={{ pb: "40px", pl: "30px", pt: 0 }}>
          <Typography
            variant="caption"
            component="h3"
            sx={{ fontSize: "16px", fontWeight: 500 }}
          >
            Art Director - Facebook Inc
          </Typography>
          <Typography
            variant="caption"
            component="span"
            sx={{ fontSize: "12px", pt: 9, pb: 9 }}
          >
            2010 - Present <br />
          </Typography>
          <Typography
            variant="caption"
            component="span"
            sx={{ fontSize: "13px", color: "#989898" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            dolore saepe. Quas numquam, voluptatum earum cumque eius iste
            minima! Quia.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem
        className={(classes.timeline_item, classes.timeline_margin)}
      >
        <TimelineSeparator>
          <TimelineDot className={classes.timelinedot} />
          <TimelineConnector className={classes.timelineconnector} />
        </TimelineSeparator>

        <TimelineContent sx={{ pb: "40px", pl: "30px", pt: 0 }}>
          <Typography
            variant="caption"
            component="h3"
            sx={{ fontSize: "16px", fontWeight: 500 }}
          >
            Art Director - Facebook Inc
          </Typography>
          <Typography
            variant="caption"
            component="span"
            sx={{ fontSize: "12px", pt: 9, pb: 9 }}
          >
            2010 - Present <br />
          </Typography>
          <Typography
            variant="caption"
            component="span"
            sx={{ fontSize: "13px", color: "#989898" }}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias,
            dolore saepe. Quas numquam, voluptatum earum cumque eius iste
            minima! Quia.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
}

export default ProfileTimeline;
