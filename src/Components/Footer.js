import React from 'react'
import { Container, Typography } from '@material-ui/core'
import "./Footer.css";
function Footer() {
    var dt = new Date();
    var year = dt.getFullYear();
    return (
        <div  style= {{backgroundColor: "#342b38"}}>
            <Container  className= "social-links" >
            <a   href = "http://linkedin.com/in/alisadekk" target="_blank" rel= "noopener noreferrer">
                  <i className= "fa fa-linkedin-square"  aria-hidden= "true" />
              </a>
            {/* Github */}
            <a href = "http://github.com/alisadek" target="_blank" rel= "noopener noreferrer">
                  <i className= "fa fa-github-square"  aria-hidden= "true" />
              </a>
              <Typography variant= "h6" component= "h6" style= {{color: "grey", padding: "30px"}}>
              © Copyright Ali Sadek {year}
              </Typography>
            </Container>
        </div>
    )
}

export default Footer
