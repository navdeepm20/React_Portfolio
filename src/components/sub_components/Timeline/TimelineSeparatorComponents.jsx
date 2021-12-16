import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import { useStyles } from './timeline_styles';



function TimelineSepratorComponents() {
	const classes = useStyles()
	return (
		<TimelineSeparator >
			<TimelineDot className={classes.timelinedot_big} />
			<TimelineConnector className={classes.timelineconnector_long} />
		</TimelineSeparator>
	)
}

export default TimelineSepratorComponents

