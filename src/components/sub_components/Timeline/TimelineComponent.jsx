import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

import TimelineSeparatorComponets from "./TimelineSeparatorComponents";
import { useStyles } from "./timeline_styles";
import ProfileTimeline from "./ProfileTimeline";
import ResumeTimeline from "./ResumeTimeline";

export const TimelineComponent = (props) => {
  const classes = useStyles();
  return (
    <Timeline>
      <TimelineItem className={classes.timeline_item}>
        <TimelineSeparatorComponets />
        <TimelineContent className={classes.timeline_content}>
          {" "}
        </TimelineContent>
      </TimelineItem>
      {props.type.toLowerCase() === "profile" ? (
        <ProfileTimeline />
      ) : (
        <ResumeTimeline />
      )}
    </Timeline>
  );
};
