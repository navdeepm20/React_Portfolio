import React from "react";
import { Box, Typography } from "@mui/material";
function TimelineData({ dkey, value }) {
  return (
    <Box sx={{ marginBottom: "10px" }}>
      <Typography
        component="span"
        sx={{ fontFamily: "Roboto", fontSize: "14px" }}
      >
        {dkey.charAt(0).toUpperCase() + dkey.slice(1) + ": "}
      </Typography>
      <Typography
        variant="caption"
        component="span"
        sx={{
          fontSize: "13.5px",
          color: "#7f7f7f",
          fontFamily: "Roboto",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default TimelineData;
