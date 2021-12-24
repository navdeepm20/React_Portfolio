import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: "5px",
  color: "#ffc500",
  borderRadius: "5px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#dfdfdf",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#ffc500",
  },
}));

function Skill({ skill, progress }) {
  return (
    <Box sx={{ margin: "45px 0 10px" }}>
      <Typography
        variant="caption"
        component="p"
        sx={{
          fontSize: "12px",
          marginBottom: "10px",
        }}
      >
        {skill}
      </Typography>
      {/* <StyledLinearProgress variant="determinate" value={progress} /> */}
      <LinearProgress
        value={progress}
        sx={{
          background: "#dfdfdf",
          "& > span": {
            background: "#ffc500",
            borderRadius: "5px",
          },
        }}
        variant="determinate"
      />
    </Box>
  );
}

Skill.defaultProps = {
  skill: "Your Skill",
  progress: 50,
};
export default Skill;
