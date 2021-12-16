import { createTheme } from '@mui/material/styles';

export const btnTheme = createTheme({
  palette: {
    primary: {
      main: '#ffc500',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: '50px',
  }
});

