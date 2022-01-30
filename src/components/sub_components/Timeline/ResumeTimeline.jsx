import React, { useContext } from "react";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

function ProfileTimeline(props) {
  return (
    <>
      {props.category === "work"
        ? props.data.map((el, ind) => {
            return (
              <TimelineItem
                sx={{
                  marginLeft: "15px",
                  minHeight: "40px",
                }}
                key={ind}
              >
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: "#ffc500",
                      padding: 0,
                      margin: 0,
                      width: "10px",
                      height: "10px",
                      position: "relative",
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      background: "#bdbdbd",
                      padding: 0,
                      margin: 0,
                      width: "1px",
                    }}
                  />
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
                sx={{
                  marginLeft: "15px",
                  minHeight: "40px",
                }}
                key={ind}
              >
                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: "#ffc500",
                      padding: 0,
                      margin: 0,
                      width: "10px",
                      height: "10px",
                      position: "relative",
                    }}
                  />
                  <TimelineConnector
                    sx={{
                      background: "#bdbdbd",
                      padding: 0,
                      margin: 0,
                      width: "1px",
                    }}
                  />
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
