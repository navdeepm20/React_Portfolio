import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useStyles } from './timeline_styles';
import TimelineSeparatorComponets from './TimelineSeparatorComponents';
import Typography from '@mui/material/Typography';
const profile_data = {
	Name: "Navdeep Mishra",
	Birthday: "20/06/2000",
	Job: "FrontEnd Engineer @Neurobit",
	Email: "navdeep@gm.com",
	Skype: "skype@gm.com",
}

export const TimelineComponent = (props)=>{
	const classes = useStyles()
	let counter = 0
	return(
			<Timeline>
				<TimelineItem className={classes.timeline_item}>
					<TimelineSeparatorComponets/>
					<TimelineContent className={classes.timeline_content}> </TimelineContent>
				</TimelineItem>
				{
					Object.keys(profile_data).map((el,key)=>{
							counter+=1
							console.log(counter===Object.keys(profile_data).length)
							return <TimelineItem  key={key} className={classes.timeline_item,classes.timeline_margin}>
								{counter===Object.keys(profile_data).length ? <TimelineSeparator>
									<TimelineDot className={classes.timelinedot}/>
									
								</TimelineSeparator> : <TimelineSeparator>
									<TimelineDot className={classes.timelinedot}/>  
									<TimelineConnector className={classes.timelineconnector} /> 
								</TimelineSeparator >	}

								<TimelineContent className={classes.timeline_content}>{el}: <Typography variant='caption' component="span">{profile_data[el]}</Typography></TimelineContent>
							</TimelineItem>
				
					})
				}
				
		</Timeline>
	)
}