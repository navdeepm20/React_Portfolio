import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import prog from "../../assets/images/prog.jpg";
import { useStyles } from "./profile_styles";
import Btn from "../sub_components/Btn/Btn";
import { TimelineComponent } from "../sub_components/Timeline/Timeline";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Profile = () => {
  const classes = useStyles();
  return (
    <Paper square elevation={3} className={classes.profile_container}>
      <Box className={classes.profile_name_designation_section}>
        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom
          className={classes.name_title}
        >
          Navdeep Mishra
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          gutterBottom
          className={classes.designation}
        >
          Creative Design
        </Typography>
      </Box>
      <Box className={classes.profile_image_container}>
        <img
          src={prog}
          alt="profile_image"
          className={classes.profile_image_container_img}
        />
      </Box>
      <Box className={classes.button_timeline_container}>
        <TimelineComponent />
        <Box style={{ marginBottom: "20px", margin: "0 auto 20px" }}>
          <Btn
            title="Download Cv"
            icon={<CloudDownloadIcon style={{ fontSize: "15px" }} />}
          ></Btn>
        </Box>
      </Box>
    </Paper>
  );
};
export default Profile;
