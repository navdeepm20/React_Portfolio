import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typogrpahy from "@mui/material/Typography";

function Footer(props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        background: "#1e1e1e",
        borderRadius: "10px",
        minHeight: "70px",
        padding: "15px",
        color: "#fff",
        marginBottom: "30px",
      }}
    >
      <Box>
        <Typogrpahy
          sx={{
            fontSize: { xs: "13px", sm: "15px" },
            fontWeight: "500",
          }}
          variant="body1"
          component="p"
        >
          {props.title}
        </Typogrpahy>
      </Box>
      <Box>
        <Typogrpahy
          variant="body2"
          component="p"
          sx={{ fontSize: { xs: "12px", sm: "14px" } }}
        >
          © 2022 All Rights Reserved
        </Typogrpahy>
      </Box>
    </Stack>
  );
}

export default Footer;
