import React from "react";
import Grid from "@mui/material/Grid";
import SubHeading from "../components/sub_components/Sub_Heading/SubHeading";
import { TimelineComponent } from "../components/sub_components/Timeline/TimelineComponent";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

function Resume() {
  return (
    <Grid
      container
      sx={{
        borderRadius: "10px",
        marginBottom: "30px",
        background: "#f0f0f0",
        px: "30px",
        py: "40px",
      }}
    >
      <Grid item sm={12}>
        <SubHeading title="Resume" />
      </Grid>
      <Grid item sm={12}>
        <Grid container>
          <Grid item sm={6}>
            <TimelineComponent
              type="resume"
              icon={
                <WorkOutlineIcon
                  sx={{
                    position: "absolute",
                    top: 0,
                    width: "20px",
                    height: "20px",
                    margin: "9px 2px 10px 8px",
                    color: "#000",
                  }}
                />
              }
              size={50}
            />
          </Grid>
          <Grid item sm={6}>
            <TimelineComponent
              type="resume"
              icon={
                <SchoolOutlinedIcon
                  sx={{
                    position: "absolute",
                    top: 0,
                    width: "20px",
                    height: "20px",
                    margin: "9px 2px 10px 8px",
                    color: "#000",
                  }}
                />
              }
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Resume;
