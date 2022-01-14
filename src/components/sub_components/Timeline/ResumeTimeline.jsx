import React, { useContext } from "react";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { useStyles } from "./timeline_styles";

function ProfileTimeline(props) {
  const classes = useStyles();

  return (
    <>
      {props.category === "work"
        ? props.data.map((el, ind) => {
            return (
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
                    {el.company}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{ fontSize: "12px", pt: 9, pb: 9 }}
                  >
                    {el.time}
                    <br />
                  </Typography>
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{ fontSize: "13px", color: "#989898" }}
                  >
                    {el.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })
        : props.data.map((el, ind) => {
            return (
              <TimelineItem
                className={(classes.timeline_item, classes.timeline_margin)}
                key={ind}
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
                    {el.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{ fontSize: "12px", pt: 9, pb: 9 }}
                  >
                    {el.type + " - " + el.time}
                    <br />
                  </Typography>
                  <Typography
                    variant="caption"
                    component="span"
                    sx={{ fontSize: "13px", color: "#989898" }}
                  >
                    {el.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
    </>
  );
}

export default ProfileTimeline;
