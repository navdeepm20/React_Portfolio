import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { useStyles } from "./header_styles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Btn from "../sub_components/Btn/Btn";
import SendIcon from "@mui/icons-material/Send";

function Header() {
  const classes = useStyles();
  return (
    <Paper elevation={0} sx={{ borderRadius: "10px", marginBottom: "35px" }}>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item lg={9}>
          <Box>
            <Stack direction="row" spacing={2} alignItems="center">
              <Box className={`${classes.navbar_items} ${classes.navbar_home}`}>
                <HomeIcon />
              </Box>

              <Typography
                className={classes.navbar_items}
                variant="body1"
                component="h5"
              >
                Resume
              </Typography>

              <Typography
                className={classes.navbar_items}
                variant="body1"
                component="h5"
              >
                Portfolio
              </Typography>

              <Typography
                className={classes.navbar_items}
                variant="body1"
                component="h5"
              >
                Blog
              </Typography>

              <Typography
                className={classes.navbar_items}
                variant="body1"
                component="h5"
              >
                Contact
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item lg={3} sx={{ pr: "10px" }}>
          <Stack direction="row" alignItems="center">
            <Box sx={{ mr: "10px" }}>
              <Stack direction="row">
                <FacebookOutlinedIcon fontSize="small" />
                <LinkedInIcon fontSize="small" />
                <TwitterIcon fontSize="small" />
                <GitHubIcon fontSize="small" />
              </Stack>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Btn
                title="Hire Me"
                icon={<SendIcon style={{ fontSize: "15px" }} />}
              ></Btn>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Header;
