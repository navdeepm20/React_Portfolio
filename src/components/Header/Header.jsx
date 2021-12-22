import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import HomeIcon from "@mui/icons-material/Home";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useStyles } from "./header_styles";
function Header() {
  const classes = useStyles();
  return (
    <Paper elevation={0} sx={{ borderRadius: "10px" }}>
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
      <Box></Box>
    </Paper>
  );
}
export default Header;
