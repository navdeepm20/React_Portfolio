import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
	timelinedot:{
		background: '#ffc500',
		padding: 0,
		margin: 0,
		width: '10px',
		height: '10px',
	},
	timelineconnector:
	{
		background: '#eee',
		padding: 0,
		margin: 0,
	},
	timelinedot_big:{
		background: '#ffc500',
		width: '40px',
		height: '40px',
		padding: 0,
		margin: 0,
	},
	timelineconnector_long:
	{
		background: '#eee',
		height: '30px',
		padding: 0,
		margin: 0,
	},
	timeline_item: {
		minHeight: '40px',
		
	},
	timeline_margin:{
		marginLeft: '15px',
		minHeight: '40px',
	},
	timeline_content:
	{
		marginTop: '-13px',
		fontSize: '16px',
	}
})