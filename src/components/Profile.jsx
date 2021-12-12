import React from "react";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { Typography } from "@mui/material";
const Profile = () => {
	return (
		<Paper square elevation={3}>
			<Box>
				<Typography variant="subtitle1" component="div" gutterBottom>
					h5. Heading
				</Typography>
				<Typography variant="subtitle2" component="p" gutterBottom>
					h5. Heading
				</Typography>
			</Box>
			<Box>
				<img src="" alt="profile_image"/>
			</Box>
			<Box></Box>
		</Paper>
	)
}
export default Profile;