import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Container>
        <Grid container sx={{ marginTop: "60px" }}>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={{ px: "15px" }}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9} xl={9} sx={{ px: "15px" }}>
            <Header />
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/" element={<About />} />
            </Routes>
            <Footer title={"Navdeep Mishra"} />
          </Grid>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
