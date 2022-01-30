import React, { useContext } from "react";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";

import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

import { globalContext } from "../../../context/GlobalContext";
import TimelineData from "../TimelineData/TimelineData";

function ProfileTimeline() {
  const data = useContext(globalContext).data.profile;
  let counter = 0;

  return Object.keys(data).map((el, ind) => {
    counter += 1;
    return (
      <TimelineItem
        key={`timeline-${ind}`}
        sx={{
          marginLeft: "15px",
          minHeight: "40px",
        }}
      >
        {counter === Object.keys(data).length ? (
          <TimelineSeparator key={`separator-${ind}`}>
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
          </TimelineSeparator>
        ) : (
          <TimelineSeparator key={`separator-${ind}`}>
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
        )}
        <TimelineContent
          key={`content-${ind}`}
          sx={{
            marginTop: "-13px",
            fontSize: "14px",
            color: "#000",
            wordBreak: "break-word",
          }}
        >
          <TimelineData dkey={el} value={data[el]}></TimelineData>
        </TimelineContent>
      </TimelineItem>
    );
  });
}

export default ProfileTimeline;
