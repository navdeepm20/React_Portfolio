import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { useStyles } from "./timeline_styles";

function TimelineBigDot(props) {
  const classes = useStyles();
  return (
    <TimelineSeparator>
      <TimelineDot className={classes.timelinedot_big}>
        {props.icon_img ? (
          <img
            src={props.icon_img}
            alt="big_dot_icon "
            className={classes.timelinedot_img}
          />
        ) : (
          props.icon
        )}
      </TimelineDot>
      <TimelineConnector className={classes.timelineconnector_long} />
    </TimelineSeparator>
  );
}
TimelineBigDot.defaultProps = {
  icon: false,
  icon_img: false,
  size: 40,
};
export default TimelineBigDot;
