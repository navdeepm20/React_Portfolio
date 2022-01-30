import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";

function TimelineBigDot(props) {
  return (
    <TimelineSeparator>
      <TimelineDot
        sx={{
          background: "#ffc500",
          width: "40px",
          height: "40px",
          padding: 0,
          margin: 0,
          position: "relative",
        }}
      >
        {props.icon_img ? (
          <img
            src={props.icon_img}
            alt="big_dot_icon "
            style={{
              position: "absolute",
              top: 0,
              width: "27px",
              height: "10px",
              margin: "14px 2px 10px 5px",
            }}
          />
        ) : (
          props.icon
        )}
      </TimelineDot>
      <TimelineConnector
        sx={{
          background: "#bdbdbd",
          height: "30px",
          padding: 0,
          margin: 0,
          width: "1px",
        }}
      />
    </TimelineSeparator>
  );
}
TimelineBigDot.defaultProps = {
  icon: false,
  icon_img: false,
  size: 40,
};
export default TimelineBigDot;
