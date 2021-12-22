import Button from "@mui/material/Button";
import "./btn_styles";
import { ThemeProvider } from "@mui/material/styles";
import { btnTheme } from "../../../themes/button_theme";
import React from "react";
import { useStyles } from "./btn_styles";

function Btn({ title, icon }) {
  const classes = useStyles();
  return (
    <ThemeProvider theme={btnTheme}>
      <Button
        variant="contained"
        endIcon={icon ? <div className={classes.icon}>{icon}</div> : null}
        className={classes.btn}
        size="small"
      >
        {title}
      </Button>
    </ThemeProvider>
  );
}
export default Btn;
