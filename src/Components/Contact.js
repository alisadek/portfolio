import React from "react";
import {
  Typography,
  Grid,
  makeStyles,
  Container,
  TextField,
  Button,
} from "@material-ui/core";

function Contact() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      id="contact"
      style={{ backgroundColor: "#222831" }}
    >
      <Container>
        <Typography
          component="h3"
          variant="h3"
          align="center"
          style={{
            color: "white",
            padding: "100px",
            textDecoration: "underline",
            fontFamily: "Oxygen",
            fontWeight: "bold",
          }}
        >
          Contact
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          align="center"
          style={{ color: "#feceab" }}
        >
          Want to work together?
        </Typography>
        <form
          style={{ marginTop: "50px" }}
          align="center"
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <TextField
            style={{ width: "50%", minWidth: "300px" }}
            id="filled-basic"
            label="Name"
            variant="filled"
            InputLabelProps={{ style: { color: "#feceab" } }}
          />
          <br />
          <TextField
            style={{ width: "50%", minWidth: "300px" }}
            id="filled-basic"
            label="Enter Email"
            variant="filled"
            InputLabelProps={{ style: { color: "#feceab" } }}
          />
          <br />
          <TextField
            style={{ width: "50%", minWidth: "300px" }}
            InputLabelProps={{ style: { color: "#feceab" } }}
            id="filled-multiline-static"
            label="Enter your message"
            multiline
            rows={8}
            variant="filled"
          />
          <br />
          <Button
            variant="outlined"
            size="large"
            style={{ margin: "20px", borderColor: "white", color: "white" }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
