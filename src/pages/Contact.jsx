import React, { useContext } from "react";
import { Grid, Box, TextField } from "@mui/material";
import SubHeading from "../components/sub_components/Sub_Heading/SubHeading";
import { globalContext } from "../context/GlobalContext";
import TimelineData from "../components/sub_components/TimelineData/TimelineData";
import Btn from "../components/sub_components/Btn/Btn";
import SendIcon from "@mui/icons-material/Send";
export default function Contact(props) {
  const info = useContext(globalContext).data.contact;
  const data = [];
  for (let i in info.info[0]) {
    data.push(
      <TimelineData key={i} dkey={i} value={info.info[0][i]}></TimelineData>
    );
  }

  return (
    <Grid
      container
      sx={{
        borderRadius: "10px",
        marginBottom: "30px",
        background: "#f0f0f0",
      }}
    >
      <Grid item md={6} sx={{ px: "30px", py: "40px" }}>
        <SubHeading title="Contact Form"></SubHeading>
        <Box>
          <form style={{ height: "200px", marginBottom: "20px" }}>
            <Grid container spacing={4}>
              <Grid item md={6}>
                <TextField label="Name" variant="standard"></TextField>
              </Grid>
              <Grid item md={6}>
                <TextField
                  label="Email"
                  variant="standard"
                  multiline
                ></TextField>
              </Grid>
              <Grid item md={12}>
                <TextField
                  sx={{ width: { md: "100%" } }}
                  label="Message"
                  variant="standard"
                  multiline
                ></TextField>
              </Grid>
            </Grid>
          </form>
          <Btn
            title="Submit"
            icon={<SendIcon style={{ fontSize: "15px" }} />}
          ></Btn>
        </Box>
      </Grid>
      <Grid item md={6} sx={{ px: "30px", py: "40px" }}>
        <SubHeading title="Contact Information"></SubHeading>
        <Box>{data}</Box>
      </Grid>
    </Grid>
  );
}
