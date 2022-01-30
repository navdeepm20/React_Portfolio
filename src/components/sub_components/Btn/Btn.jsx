import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import { btnTheme } from "../../../themes/button_theme";
import React from "react";

function Btn({ title, icon }) {
  return (
    <ThemeProvider theme={btnTheme}>
      <Button
        disableElevation
        variant="contained"
        endIcon={
          icon ? (
            <div
              style={{
                background: "#fff",
                width: "27px",
                height: "27px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {icon}
            </div>
          ) : null
        }
        sx={{
          maxWidth: "148px",
          margin: "auto",
          // marginBottom: "30px",
          fontSize: "14px",
          textTransform: "capitalize",
          fontWeight: "500",
          color: "black",
        }}
        size="small"
      >
        {title}
      </Button>
    </ThemeProvider>
  );
}
export default Btn;
