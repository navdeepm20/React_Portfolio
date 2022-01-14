import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

import TimelineBigDot from "./TimelineBigDot";
import { useStyles } from "./timeline_styles";
import ProfileTimeline from "./ProfileTimeline";
import ResumeTimeline from "./ResumeTimeline";

export const TimelineComponent = (props) => {
  const classes = useStyles();
  return (
    <Timeline>
      <TimelineItem className={classes.timeline_item}>
        <TimelineBigDot
          icon_img={props.icon_img}
          icon={props.icon}
          size={props.size}
        />

        <TimelineContent className={classes.timeline_content}></TimelineContent>
      </TimelineItem>
      {props.type.toLowerCase() === "profile" ? (
        <ProfileTimeline />
      ) : (
        <ResumeTimeline data={props.data} category={props.category} />
      )}
    </Timeline>
  );
};
