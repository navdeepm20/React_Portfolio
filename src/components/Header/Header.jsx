import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { useStyles } from "./header_styles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Btn from "../sub_components/Btn/Btn";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { useContext } from "react";
import { globalContext } from "../../context/GlobalContext";
import Drawer from "@mui/material/Drawer";
import WidgetsIcon from "@mui/icons-material/Widgets";
const StyledLink = styled(Link, {
  name: "StyledLink",
  slot: "wrapper",
})({
  color: "#111",
  textDecoration: "none",
  transition: ".2s ease",
  ":hover": {
    color: "#ffc500",
  },
});
const StyledDrawerListItemContainer = styled(Box, {
  name: "StyledDrawerListItemContainer",
})`
  width: 150px;
`;
const IconStyles = {
  width: "18px",
  transition: ".2 ease",
  cursor: "pointer",
  "& svg": {
    width: "14px",
  },
  "&:hover svg": {
    width: "16px",
  },
  mx: "2px",
  display: { xs: "none", sm: "none", md: "none", lg: "block" },
};
function Header() {
  const [sideBar, showSideBar] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    showSideBar(open);
  };
  const classes = useStyles();
  const context = useContext(globalContext);

  return (
    <Paper elevation={0} sx={{ borderRadius: "10px", marginBottom: "35px" }}>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Grid item sm={7} md={7} lg={8}>
          <Box>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={{
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            >
              <Box className={`${classes.navbar_items} ${classes.navbar_home}`}>
                <StyledLink to="/" sx={{ ":hover": { color: "#111" } }}>
                  <HomeIcon />
                </StyledLink>
              </Box>

              <Typography
                className={classes.navbar_items}
                variant="body1"
                component="h5"
              >
                <StyledLink to="/resume">Resume</StyledLink>
              </Typography>

              <Typography
                className={classes.navbar_items}
                variant="body1"
                component="h5"
              >
                <StyledLink
                  to="/portfolio"
                  onClick={() => {
                    context.setShowPortfolio(true);
                  }}
                >
                  Portfolio
                </StyledLink>
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
            <Box
              sx={{ p: "10px", display: { xs: "block", sm: "none" } }}
              onClick={toggleDrawer(true)}
            >
              <WidgetsIcon fontSize="large" sx={{ color: "#ffc500" }} />
            </Box>
            <Drawer anchor="left" open={sideBar} onClose={toggleDrawer(false)}>
              <Stack sx={{ width: { xs: "50vw", sm: "30vw", md: "30vw" } }}>
                <Typography
                  className={classes.navbar_items}
                  sx={{ textAlign: "center" }}
                  variant="body1"
                  component="h5"
                >
                  <StyledLink to="/">Home</StyledLink>
                </Typography>
                <Typography
                  className={classes.navbar_items}
                  sx={{ textAlign: "center" }}
                  variant="body1"
                  component="h5"
                >
                  <StyledLink to="/resume">Resume</StyledLink>
                </Typography>

                <Typography
                  sx={{ textAlign: "center" }}
                  className={classes.navbar_items}
                  variant="body1"
                  component="h5"
                >
                  <StyledLink
                    to="/portfolio"
                    onClick={() => {
                      context.setShowPortfolio(true);
                    }}
                  >
                    Portfolio
                  </StyledLink>
                </Typography>

                <Typography
                  sx={{ textAlign: "center" }}
                  className={classes.navbar_items}
                  variant="body1"
                  component="h5"
                >
                  Blog
                </Typography>

                <Typography
                  sx={{ textAlign: "center" }}
                  className={classes.navbar_items}
                  variant="body1"
                  component="h5"
                >
                  Contact
                </Typography>
              </Stack>
            </Drawer>
          </Box>
        </Grid>
        <Grid item sm={5} md={3} lg={4} sx={{ pr: "10px", height: "100%" }}>
          <Stack direction="row" justifyContent="end" alignItems="center">
            <Box sx={{ mr: "10px", display: "flex" }}>
              <Box sx={{ ...IconStyles }}>
                <FacebookOutlinedIcon fontSize="small" />
              </Box>
              <Box sx={{ ...IconStyles }}>
                <LinkedInIcon fontSize="small" />
              </Box>
              <Box sx={{ ...IconStyles }}>
                <TwitterIcon fontSize="small" />
              </Box>
              <Box sx={{ ...IconStyles }}>
                <GitHubIcon fontSize="small" />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <React.Fragment>
                <Btn
                  title="Hire Me"
                  icon={<SendIcon style={{ fontSize: "15px" }} />}
                ></Btn>
                {/* <Button onClick={toggleDrawer(true)}>Helloo</Button> */}
              </React.Fragment>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Header;
