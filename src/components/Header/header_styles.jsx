import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	navbar_items: {
		padding: '20px 0px 20px 0px',
		fontWeight: 'bold',
		cursor: 'pointer',                                                     "&:hover":{
			color: '#ffc500'
		},
		transition: '.2s ease',
		textTransform: 'uppercase',
		fontSize: '14px', 
		display: 'table-cell',
		verticalAlign: 'center',                                                                           
	},
	navbar_home: {
		paddingRight: '20px',
		paddingLeft: '20px',
		background: '#ffc500',
		borderRadius: '10px'
	}
})