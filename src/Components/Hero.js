import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Toolbar,
  ButtonGroup,
  Modal,
} from "@material-ui/core";
import "./Hero.css";
import { makeStyles } from "@material-ui/core/styles";
import SimpleModal from "./Modal";

import ResumeOne from "../Assets/Software Engineer CV Design-01.svg";
import ResumeTwo from "../Assets/Software Engineer CV Design-02.svg";




const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));


function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  const classes = useStyles();
  
const openModal = () => setModalOpen(true);

const closeModal = () => setModalOpen(false);

  return (
    <React.Fragment>
    {modalOpen===true?
    <SimpleModal onCancel= {closeModal}>
      <img src= {ResumeOne} alt = "Resume" />
    </SimpleModal>:
    <div>
      <Container maxWidth="xlg" style={{ padding: "0" }}>
        <Typography align="center" variant="h2" component="h2" className="hero" style= {{fontFamily: "Oxygen" }}>
          Hello, I'm <span style= {{color: "#4F5759", fontWeight: "bold"}}> Ali Sadek.</span> <br /> I'm a full-stack web developer.
          <br />
          <Button
            variant="outlined"
            size="large"
            style={{ margin: "20px", borderColor: "white", color: "white" }}
            href="#projects"
          >
            View My Work
          </Button>
          {/* <Button size="large" color="inherit"
           onClick= {openModal}>
            Resume
          </Button> */}
        </Typography>
        <Typography align="center" className="hero-bar">

          <ButtonGroup
            size="large"
            variant="text"
            aria-label="text primary button group"
          >
            <Button color= "inherit" href="#projects">Projects</Button>
            <Button color= "inherit" href="#about"> About</Button>
            <Button color= "inherit" href="#contact">Contact</Button>
          </ButtonGroup>
        </Typography>
      </Container>
    </div>}
    </React.Fragment>
  );
}

export default Hero;
