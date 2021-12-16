import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useStyles } from './timeline_styles';
import TimelineSeparatorComponets from './TimelineSeparatorComponents';

export const TimelineComponent = (props)=>{
	const classes = useStyles()
	return(
			<Timeline>
				<TimelineItem className={classes.timeline_item}>
					<TimelineSeparatorComponets/>
					<TimelineContent className={classes.timeline_content}> </TimelineContent >
				</TimelineItem>
				<TimelineItem className={classes.timeline_item,classes.timeline_margin}>
					<TimelineSeparator >
					<TimelineDot className={classes.timelinedot}/>
					<TimelineConnector className={classes.timelineconnector} />   
					</TimelineSeparator >
					<TimelineContent className={classes.timeline_content}>Name</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.timeline_item,classes.timeline_margin}>
					<TimelineSeparator>
					<TimelineDot  className={classes.timelinedot}/>
					<TimelineConnector className={classes.timelineconnector} />
					</TimelineSeparator >
					<TimelineContent className={classes.timeline_content}>Birthday</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.timeline_item,classes.timeline_margin}>
					<TimelineSeparator>
					<TimelineDot className={classes.timelinedot}/>
					<TimelineConnector className={classes.timelineconnector} />   
					</TimelineSeparator >
					<TimelineContent className={classes.timeline_content}>Job</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.timeline_item,classes.timeline_margin}>
					<TimelineSeparator>
					<TimelineDot  className={classes.timelinedot}/>
					<TimelineConnector className={classes.timelineconnector} />
					</TimelineSeparator >
					<TimelineContent className={classes.timeline_content}>Email</TimelineContent>
				</TimelineItem>
				<TimelineItem className={classes.timeline_item ,classes.timeline_margin}>
					<TimelineSeparator>
					<TimelineDot  className={classes.timelinedot}/>
					
					</TimelineSeparator >
					<TimelineContent className={classes.timeline_content}>Skype</TimelineContent>
				</TimelineItem>
		</Timeline>
	)
}