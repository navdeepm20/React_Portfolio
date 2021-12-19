import {makeStyles} from '@mui/styles';

export const useStyles = makeStyles({
	profile_container:{
			borderRadius: '10px',
			width: '100%',
		},
	profile_name_designation_section:
	{
		padding: '20px',
	},
	profile_image_container:
	{
		width: '100%',
		height: '100%',
		position: 'relative',
		marginBottom: '1rem',
		paddingBottom: '1px',
	},
	profile_image_container:
	{
		width: '100%',
		height: '100%',
		position: 'relative',
		paddingBottom: '1px',
	},
	profile_image_container_img:{
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		clipPath: 'polygon(0 9%, 100% 0, 100% 94%, 0% 100%)',
		minHeight: '263px'
	},
	name_title:
	{
		textTransform: 'uppercase',
		fontWeight: 700,
		fontSize: '17px',
		color: '#333'
	},
	
	designation:
	{
		textTransform: 'uppercase',
		color: '#777777',
		fontSize: '13px',
		textTransform: 'capitalize'
	},
	button_timeline_container:
	{
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		marginTop: '-35px',
		alignItems: 'flex-start'
		
	},
	
})
