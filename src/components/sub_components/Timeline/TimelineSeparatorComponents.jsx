import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineDot from '@mui/lab/TimelineDot';
import { useStyles } from './timeline_styles';
import glassesImg from '../../../assets/images/glasses.png';


function TimelineSepratorComponents() {
	const classes = useStyles()
	return (
		<TimelineSeparator >
			<TimelineDot className={classes.timelinedot_big}><img src={require('../../../assets/images/glasses.png').default} alt='glasses ' className={classes.timelinedot_img}/></TimelineDot>
			<TimelineConnector className={classes.timelineconnector_long} />
		</TimelineSeparator>
	)
}

export default TimelineSepratorComponents

