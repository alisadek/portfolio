import React from "react";

import "./Contact.css";
import { Grid, Cell, List } from "react-mdl";
import CustomListItem from "../Components/CustomListItem";
import aliAvatar from "../Components/Ali Face.png";

function Contact() {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2> Ali Sadek</h2>
          <img
            src={aliAvatar}
            alt="avatar"
            style= {{height: "300px", width: "350px"}}
          />
          <p style= {{width: "75%", margin: "auto", paddingTop: "0.5em"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Cell>
        <Cell col={6}>
        <h2>Contact Me</h2>
        <hr />
        <div className= "contact-list">
        <List>
<CustomListItem icon= "fa fa-phone-square" content= "(+20) 1111921824" />
<CustomListItem icon= "fa fa-envelope" content= "alysadekk@gmail.com" />
<CustomListItem icon= "fa fa-linkedin" content= "linkedin.com/in/alisadekk" />

</List>
</div>
        </Cell>
        

      </Grid>
    </div>
  );
}

export default Contact;
