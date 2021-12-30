import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Switch,
} from "react-router-dom";
import About from "./components/About/About";
import { GlobalContextProvider } from "./context/GlobalContext";
import { TransitionGroup, CSSTransition } from "react-transition-group";
function App() {
  let location = useLocation();
  return (
    <GlobalContextProvider>
      <Container>
        <Grid container sx={{ marginTop: "60px" }}>
          <Grid item xs={12} sm={12} md={4} lg={3} xl={3} sx={{ px: "15px" }}>
            <Profile />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9} xl={9} sx={{ px: "15px" }}>
            <Header />
            <TransitionGroup>
              <CSSTransition
                key={location.pathname}
                classNames="alert"
                timeout={500}
              >
                <Routes location={location}>
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/resume" element={<Resume />} />
                  {/* <Route path="/" element={<About />} /> */}
                  <Route path="/" element={<About />} />
                </Routes>
              </CSSTransition>
            </TransitionGroup>
            <Footer title={"Navdeep Mishra"} />
          </Grid>
        </Grid>
      </Container>
    </GlobalContextProvider>
  );
}

export default App;
