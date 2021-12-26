import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import SubHeading from "../components/sub_components/Sub_Heading/SubHeading";
import { TimelineComponent } from "../components/sub_components/Timeline/TimelineComponent";

function Resume() {
  return (
    <Grid
      container
      sx={{
        background: "#fff",
        borderRadius: "10px",
        marginBottom: "30px",
        background: "#f0f0f0",
        px: "30px",
        py: "40px",
      }}
    >
      <Grid items sm={12}>
        <SubHeading title="Resume" />
      </Grid>
      <Grid item sm={12}>
        <Grid container>
          <Grid item sm={6}>
            <TimelineComponent type="profile" />
          </Grid>
          <Grid item sm={6}>
            <TimelineComponent type="profile" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Resume;
