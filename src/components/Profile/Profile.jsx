import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import prog from '../../assets/images/prog.jpg'
import { useStyles } from "./profile_styles";
import Btn from "../sub_components/Btn";
const Profile = () => {
	const classes = useStyles()
	return (
		<Paper square elevation={3} className={classes.profile_container}>
			<Box className={classes.profile_name_designation_section}>
				<Typography variant="subtitle1" component="div" gutterBottom className={classes.name_title}>
					Navdeep Mishra
				</Typography>
				<Typography variant="subtitle2" component="p" gutterBottom className="designation">
					Creative Design
				</Typography>
			</Box>
			<Box className={classes.profile_image_container}>
				<img src={prog} alt="profile_image" className={classes.profile_image_container_img} />
			</Box>
			<Box className={classes.button_container}>
				<Btn title={"Download"}/>
			</Box>
			
		</Paper>
	)
}
export default Profile;