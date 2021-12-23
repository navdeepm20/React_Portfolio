import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
function About() {
  return (
    <Grid
      container
      sx={{
        background: "#fff",
        borderRadius: "10px",
        marginBottom: "30px",
        background: "#f0f0f0",
      }}
    >
      <Grid item sx={{ px: "30px", py: "40px" }}>
        <Box>
          <Box
            sx={{
              position: "relative",
              display: "inline-block",
              marginBottom: "30px",
            }}
          >
            <Typography variant="h5" component="h5">
              About Me
            </Typography>
            <span
              style={{
                width: "100%",
                borderBottom: "5px solid #ffb100",
                position: "absolute",
                height: "70px",
                bottom: "5px",
                opacity: "0.4",
              }}
            ></span>
          </Box>
          <Typography
            variant="body1"
            sx={{ color: "#4c4c4c", fontSize: "13px" }}
          >
            Started earnest brother believe an exposed so. Me he believing
            daughters if forfeited at furniture. Age again and stuff downs
            spoke. Late hour new nay able fat each sell. Nor themselves age
            introduced frequently use unsatiable devonshire get. They why quit
            gay cold rose deal park. One same they four did ask busy. Reserved
            opinions fat him nay position. Breakfast as zealously incommode do
            agreeable furniture. One too nay led fanny allow plate.
            <br />
            <br />
            Quick six blind smart out burst. Perfectly on furniture dejection
            determine my depending an to. Add short water court fat. Her
            bachelor honoured perceive securing but desirous ham required.
            Questions deficient acuteness to engrossed as. Entirely led ten
            humoured greatest and yourself. Besides ye country on observe. She
            continue appetite endeavor she judgment interest the met. For she
            surrounded motionless fat resolution may.
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={12} sx={{ px: "30px", py: "40px" }}>
        <Box
          sx={{
            position: "relative",
            display: "inline-block",
            marginBottom: "30px",
          }}
        >
          <Typography variant="h5" component="h5">
            My Services
          </Typography>
          <span
            style={{
              width: "100%",
              borderBottom: "5px solid #ffb100",
              position: "absolute",
              height: "70px",
              bottom: "5px",
              opacity: "0.4",
            }}
          ></span>
        </Box>
        <Box display="flex" justifyContent="flex-start">
          <Paper
            sx={{
              BackgroundColor: "#fff",
              width: "200px",
              height: "200px",
              p: "20px",
              mr: "20px",
            }}
            elevation="2"
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "10px",
                  width: "100%",
                }}
              >
                <ComputerIcon fontSize="large" />
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "30px",
                  textAlign: "center",
                  width: "100%",
                }}
                variant="subtitle1"
                component="span"
              >
                FrontEnd Development
              </Typography>
              <Typography sx={{ color: "#4c4c4c", fontSize: "13px" }}>
                I have been working on web design for 10 years.
              </Typography>
            </Box>
          </Paper>
          <Paper
            sx={{
              BackgroundColor: "#fff",
              width: "200px",
              height: "200px",
              p: "20px",
              mr: "20px",
            }}
            elevation="2"
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mb: "10px",
                }}
              >
                <StorageIcon fontSize="large" />
              </Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  lineHeight: "30px",
                  textAlign: "center",
                }}
                variant="subtitle1"
                component="span"
              >
                BackEnd Development
              </Typography>
              <Typography sx={{ color: "#4c4c4c", fontSize: "13px" }}>
                I have been working on web design for 10 years.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Grid>
      <Grid item lg={12}>
        <Grid container lg={12}>
          <Grid item lg={6}>
            <Typography>Design Skills</Typography>
          </Grid>
          <Grid item lg={6}>
            <Typography>Design Skills</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
