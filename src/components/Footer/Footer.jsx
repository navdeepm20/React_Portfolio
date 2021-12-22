import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typogrpahy from "@mui/material/Typography";
import { useStyles } from "./footer_styles";

function Footer(props) {
  const classes = useStyles();
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.footer}
    >
      <Box>
        <Typogrpahy
          className={classes.footer_name}
          variant="body1"
          component="p"
        >
          {props.title}
        </Typogrpahy>
      </Box>
      <Box>
        <Typogrpahy variant="body2" component="p">
          © 2017 All rights reserved
        </Typogrpahy>
      </Box>
    </Stack>
  );
}

export default Footer;
