import {Container,Grid} from '@mui/material';
import Profile from './components/Profile/Profile'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Container>
        <Grid container sx={{marginTop: '60px'}}>
          <Grid item xs={12} sm={12} md={4} lg={3} sx={{px: '15px'}}>
            <Profile/>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9} sx={{px: '15px'}} >
            <Header/>
              <Routes>
                  <Route path="/portfolio" element={<Portfolio/>}/>
                  <Route path="/" element={<Resume/>}/>
              </Routes>
            <Footer/>
          </Grid>
        </Grid>
      </Container>
    </Router>
    
  );
}

export default App;
