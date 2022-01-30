import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import prog from "../../assets/images/prog.jpg";

import Btn from "../sub_components/Btn/Btn";
import { TimelineComponent } from "../sub_components/Timeline/TimelineComponent";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { globalContext } from "../../context/GlobalContext";
const Profile = () => {
  const data = useContext(globalContext).data.profile;

  return (
    <Paper
      square
      elevation={3}
      sx={{
        borderRadius: "10px",
        width: "100%",
        marginBottom: "40px",
      }}
    >
      <Box sx={{ p: "20px" }}>
        <Typography
          variant="subtitle1"
          component="div"
          gutterBottom
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: "17px",
            color: "#333",
          }}
        >
          {data.name}
        </Typography>
        <Typography
          variant="subtitle2"
          component="p"
          gutterBottom
          sx={{
            color: "#777777",
            fontSize: "13px",
            textTransform: "capitalize",
          }}
        >
          {data.designation}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "relative",
          marginBottom: "1rem",
          paddingBottom: "1px",
        }}
      >
        <img
          src={prog}
          alt="profile_image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            clipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
            minHeight: "263px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "-35px",
          alignItems: "flex-start",
        }}
      >
        <TimelineComponent
          type="Profile"
          icon_img={require("../../assets/images/glasses.png").default}
        />
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
