import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
	timelinedot:{
		background: '#ffc500',
		padding: 0,
		margin: 0,
		width: '10px',
		height: '10px',
		position: 'relative',
	},
	timelineconnector:
	{
		background: '#eee',
		padding: 0,
		margin: 0,
		width: '2px'
	},
	timelinedot_big:{
		background: '#ffc500',
		width: '40px',
		height: '40px',
		padding: 0,
		margin: 0,
		position: 'relative',
	},
	timelineconnector_long:
	{
		background: '#eee',
		height: '30px',
		padding: 0,
		margin: 0,
		width: '2px'
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
		fontSize: '14px',
		color: '#000'
	},
	timelinedot_img:
	{
		position: 'absolute',
		top: 0,
		width: '27px',
		height: '10px',
		margin: '14px 2px 10px 5px',
		
		 
	}
})