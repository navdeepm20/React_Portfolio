import Button from '@mui/material/Button';
import './btn_styles'
import {ThemeProvider } from '@mui/material/styles';
import {btnTheme} from '../../../themes/button_theme'
import React from 'react'
import {useStyles} from './btn_styles'


function Btn(props) {
	const classes = useStyles()
	return (
		<ThemeProvider theme={btnTheme}>
			<Button variant="contained" sx={{mb:'30px'}} endIcon={props.children} className={classes.btn} size="small">{props.title}</Button>
		</ThemeProvider>
	)
}
export default Btn
 