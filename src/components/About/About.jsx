import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import Skill from "../sub_components/Skill/Skill";
import SubHeading from "../sub_components/Sub_Heading/SubHeading";
import { globalContext } from "../../context/GlobalContext";
function About() {
  const data = useContext(globalContext).data.about;
  return (
    <Grid
      container
      sx={{
        borderRadius: "10px",
        marginBottom: "30px",
        background: "#f0f0f0",
      }}
    >
      <Grid item sx={{ px: "30px", py: "40px" }}>
        <Box>
          <SubHeading title="About Me" />
          <Typography
            variant="body1"
            sx={{ color: "#4c4c4c", fontSize: "13px" }}
          >
            {data.about[0]}
            <br />
            <br />
            {data.about[1]}
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={12} sx={{ px: "30px", py: "40px" }}>
        <SubHeading title="My Services" />
        <Box display="flex" justifyContent="center" flexWrap="wrap">
          {data.services.map((el, ind) => {
            return (
              <Paper
                key={ind}
                sx={{
                  BackgroundColor: "#fff",
                  maxWidth: "200px",
                  height: "auto",
                  p: "20px",
                  m: "20px 20px 20px 0px",
                  mb: "20px",
                }}
                elevation={2}
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
                    }}
                  >
                    {el.type}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#4c4c4c",
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    {el.description}
                  </Typography>
                </Box>
              </Paper>
            );
          })}
        </Box>
      </Grid>
      <Grid item lg={12} sx={{ px: "30px", py: "40px" }}>
        <Grid container>
          <Grid item xs={12} sm={12} lg={12}>
            <SubHeading title="My Services" />
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Box sx={{ pr: 2 }}>
              {data.skills.map((el, index) => {
                return index < 6 ? (
                  <Skill
                    skill={el.name}
                    key={`${el}-${index}`}
                    progress={el.progress}
                  ></Skill>
                ) : (
                  ""
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} lg={6}>
            <Box sx={{ pr: 2 }}>
              {data.skills.map((el, index) => {
                return index > 5 ? (
                  <Skill
                    skill={el.name}
                    key={`${el}-${index}`}
                    progress={el.progress}
                  ></Skill>
                ) : (
                  ""
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
