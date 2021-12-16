import Button from '@mui/material/Button';
import './btn_styles'
import {ThemeProvider } from '@mui/material/styles';
import { btnTheme } from '../../themes/button_theme';
import React from 'react'


function Btn(props) {
	
	return (
		<ThemeProvider theme={btnTheme}>
			<Button variant="contained" sx={{mb:'30px'}}>{props.title}</Button>
		</ThemeProvider>
	)
}
export default Btn
