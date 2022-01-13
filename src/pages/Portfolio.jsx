import React, { useContext } from "react";
import SubHeading from "../components/sub_components/Sub_Heading/SubHeading";
import {
  Grid,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import cardimg from "../assets/images/cardimg.jpg";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { globalContext } from "../context/GlobalContext";
const portfolio_data = [
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "fullstack",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "fullstack",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "frontend",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "frontend",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "frontend",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "frontend",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "backend",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "backend",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "backend",
    image: "Img",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, sequi?",
    tag: "backend",
    image: "Img",
  },
];
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
});

function Portfolio() {
  const [tag, setTag] = useState("all");
  const context = useContext(globalContext);
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
                          <CardMedia
                            component="img"
                            image={cardimg}
                            alt="Paella dish"
                          />
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
                          <CardMedia
                            component="img"
                            image={cardimg}
                            alt="Paella dish"
                          />
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
