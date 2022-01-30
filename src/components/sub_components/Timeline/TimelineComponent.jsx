import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

import TimelineBigDot from "./TimelineBigDot";

import ProfileTimeline from "./ProfileTimeline";
import ResumeTimeline from "./ResumeTimeline";

export const TimelineComponent = (props) => {
  return (
    <Timeline>
      <TimelineItem sx={{ minHeight: "40px" }}>
        <TimelineBigDot
          icon_img={props.icon_img}
          icon={props.icon}
          size={props.size}
        />

        <TimelineContent
          sx={{
            marginTop: "-13px",
            fontSize: "14px",
            color: "#000",
            wordBreak: "break-word",
          }}
        ></TimelineContent>
      </TimelineItem>
      {props.type.toLowerCase() === "profile" ? (
        <ProfileTimeline />
      ) : (
        <ResumeTimeline data={props.data} category={props.category} />
      )}
    </Timeline>
  );
};
