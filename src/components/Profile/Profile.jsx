import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
import prog from '../../assets/images/prog.jpg'
import './Profile.css'
const Profile = () => {
	return (
		<Paper square elevation={3}>
			<Box>
				<Typography variant="subtitle1" component="div" gutterBottom className="name_title">
					Navdeep Mishra
				</Typography>
				<Typography variant="subtitle2" component="p" gutterBottom className="designation">
					Creative Design
				</Typography>
			</Box>
			<Box className="profile_image_container">
				<img src={prog} alt="profile_image"/>
			</Box>
			
		</Paper>
	)
}
export default Profile;