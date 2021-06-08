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

  // handleSubmit (event) {
  //   event.preventDefault();
  
  //   const {
  //     REACT_APP_EMAILJS_RECEIVER: receiverEmail,
  //     REACT_APP_EMAILJS_TEMPLATEID: template,
  //     REACT_APP_EMAILJS_USERID: user
  //   } = this.props.env;

  //   this.sendFeedback(
  //     template,
  //     this.props.senderEmail,
  //     receiverEmail,
  //     this.state.feedback,
  //     user
  //   );

  //   this.setState({
  //     formSubmitted: true
  //   });
  // }

  // sendFeedback (templateId, senderEmail, receiverEmail, feedback, user) {
  //   window.emailjs.send(
  //     'default_service', // default email provider in your EmailJS account
  //     templateId,
  //     {
  //       senderEmail,
  //       receiverEmail,
  //       feedback
  //     },
  //     user
  //   )
  //     .then(res => {
  //       this.setState({ formEmailSent: true })
  //     })
  //     // Handle errors here however you like, or use a React error boundary
  //     .catch(err => console.error('Failed to send feedback. Error: ', err))
  // }
  //  let service_id = "default_service";
  //  let template_id = "template_Y01y1ugF";
  //  emailjs.send(service_id, template_id, template_params);
  // }

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
          style={{ marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center" , alignItems:"center"}}
          
          // align="center"
          // className={classes.root}
          noValidate
          autoComplete="off"
          // onSubmit = {handleSubmit}
        >
          <TextField
            style={{ width: "50%", minWidth: "300px" }}
            id="filled-basic"
            label="Name"
            variant="filled"
            InputLabelProps={{ style: { color: "#feceab" } }}
          />
          
          <TextField
            style={{ width: "50%", minWidth: "300px" }}
            id="filled-basic"
            label="Enter Email"
            variant="filled"
            InputLabelProps={{ style: { color: "#feceab" } }}
          />
          
          <TextField
            style={{ width: "50%", minWidth: "300px" }}
            InputLabelProps={{ style: { color: "#feceab" } }}
            id="filled-multiline-static"
            label="Enter your message"
            multiline
            rows={8}
            variant="filled"
          />
          
          <Button
            variant="outlined"
            size="large"
            style={{ margin: "20px", borderColor: "white", color: "white", alignSelf: "center" }}
          >
            Submit
          </Button>
        </form>
      </Container>
    </div>
  );
        }

export default Contact;
