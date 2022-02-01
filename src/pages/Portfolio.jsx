import React, { useContext } from "react";
import SubHeading from "../components/sub_components/Sub_Heading/SubHeading";
import {
  Grid,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Fab,
  Box,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import { styled } from "@mui/system";
import cardimg from "../assets/images/cardimg.jpg";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { globalContext } from "../context/GlobalContext";

const StyledTypography = styled(
  Typography,
  {}
)({
  marginRight: "15px",
  cursor: "pointer",
  color: "#787878",
  fontSize: "14px",
});
const StyledCard = styled(
  Card,
  {}
)({
  maxWidth: "283px",
  boxShadow: "0px 0px 48px 0px rgb(4 6 4 / 8%)",
  // "&:hover .stack-container": {
  //   display: "flex",
  // },
});

function Portfolio() {
  const [tag, setTag] = useState("all");
  const context = useContext(globalContext);
  const portfolio_data = context.data.portfolio;
  const changeTextColorOnClick = (e) => {
    e.target.classList.add("active");
    Array.from(document.getElementsByClassName("portfolio-subheading")).forEach(
      (el, ind) => {
        if (el !== e.target) {
          el.classList.remove("active");
        }
      }
    );

    setTag(String(e.target.textContent).toLowerCase());
  };
  return (
    <CSSTransition
      in={context.showPortfolio}
      timeout={1000}
      classNames="alert"
      unmountOnExit
      // onEnter={() => setShowButton(false)}
      // onExited={() => setShowButton(true)}
    >
      <Grid
        container
        sx={{
          borderRadius: "10px",
          marginBottom: "30px",
          background: "#f0f0f0",
          px: "30px",
          py: "40px",
        }}
      >
        <Grid item sm={12}>
          <SubHeading title="Portfolio" />
        </Grid>
        <Grid item sm={12}>
          <Grid container spacing={4}>
            <Grid item sm={12}>
              <Stack direction="row">
                <StyledTypography
                  className="portfolio-subheading"
                  onClick={changeTextColorOnClick}
                >
                  All
                </StyledTypography>
                <StyledTypography
                  className="portfolio-subheading"
                  onClick={changeTextColorOnClick}
                >
                  FullStack
                </StyledTypography>
                <StyledTypography
                  className="portfolio-subheading"
                  onClick={changeTextColorOnClick}
                >
                  FrontEnd
                </StyledTypography>
                <StyledTypography
                  className="portfolio-subheading"
                  onClick={changeTextColorOnClick}
                >
                  BackEnd
                </StyledTypography>
              </Stack>
            </Grid>
            <Grid item sm={12}>
              <Grid container spacing={4}>
                {portfolio_data.map((el, ind) => {
                  if (el.tag === tag) {
                    return (
                      <Grid key={ind} item xs={12} sm={6} md={6} lg={4}>
                        <StyledCard>
                          <Box
                            sx={{
                              position: "relative",
                              display: "flex",
                              justifyContent: "center",
                              "&:hover .stack-container": {
                                display: "flex",
                                top: 0,
                                opacity: 1,
                                visibility: "visible",
                              },
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={cardimg}
                              alt="Paella dish"
                            />
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{
                                position: "absolute",
                                top: "60px",
                                marginTop: "70px",

                                visibility: "hidden",
                                // opacity: 0,
                                transition:
                                  "visibility .05s linear , top .3s linear",
                              }}
                              className="stack-container"
                            >
                              <Box
                                sx={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  backgroundColor: "#fff",
                                  boxShadow: "0px 0px 48px 0px rgb(4 6 4 / 8%)",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <GitHubIcon fontSize="10px" />
                              </Box>
                              <Box
                                sx={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  backgroundColor: "#fff",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <MobileFriendlyIcon fontSize="10px" />
                              </Box>
                            </Stack>
                          </Box>
                          <CardContent>
                            <Typography
                              component="h6"
                              color="#000"
                              fontSize="14px"
                            >
                              {el.title}
                            </Typography>
                            <Typography
                              component="p"
                              variant="caption"
                              color="#989898"
                              fontSize="13px"
                            >
                              {el.description}
                            </Typography>
                          </CardContent>
                        </StyledCard>
                      </Grid>
                    );
                  } else if (tag === "all") {
                    return (
                      <Grid item key={ind} xs={12} sm={6} md={6} lg={4}>
                        <StyledCard>
                          <Box
                            sx={{
                              position: "relative",
                              display: "flex",
                              justifyContent: "center",
                              "&:hover .stack-container": {
                                display: "flex",
                                top: 0,
                                opacity: 1,
                                visibility: "visible",
                              },
                            }}
                          >
                            <CardMedia
                              component="img"
                              image={cardimg}
                              alt="Paella dish"
                            />
                            <Stack
                              direction="row"
                              spacing={1}
                              sx={{
                                position: "absolute",
                                top: "60px",
                                marginTop: "70px",

                                visibility: "hidden",
                                // opacity: 0,
                                transition:
                                  "visibility .05s linear , top .3s linear",
                              }}
                              className="stack-container"
                            >
                              <Box
                                sx={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  backgroundColor: "#fff",
                                  boxShadow: "0px 0px 48px 0px rgb(4 6 4 / 8%)",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <GitHubIcon fontSize="10px" />
                              </Box>
                              <Box
                                sx={{
                                  width: "30px",
                                  height: "30px",
                                  borderRadius: "50%",
                                  backgroundColor: "#fff",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <MobileFriendlyIcon fontSize="10px" />
                              </Box>
                            </Stack>
                          </Box>
                          <CardContent>
                            <Typography
                              component="h6"
                              color="#000"
                              fontSize="14px"
                            >
                              {el.title}
                            </Typography>
                            <Typography
                              component="p"
                              variant="caption"
                              color="#989898"
                              fontSize="13px"
                            >
                              {el.description}
                            </Typography>
                          </CardContent>
                        </StyledCard>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CSSTransition>
  );
}

export default Portfolio;
