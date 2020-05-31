import React from "react";
import { Grid, Cell } from "react-mdl";

import "./LandingPage.css";

function LandingPage() {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing--grid">
        <Cell col={12}>
          <img
            alt="ali's avatar"
            src="https://scontent-hbe1-1.xx.fbcdn.net/v/t31.0-8/12772044_10153228252755518_5671036087251677849_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_eui2=AeFr8UnPonwkQ-Murx3PVQsXqFarCs03KueoVqsKzTcq53HVEq2J-gLr4UvlzlT5Mno&_nc_ohc=GI4tm0FunR8AX9aBysi&_nc_ht=scontent-hbe1-1.xx&oh=b5a1c49139b604c74a5c17b5523d6e8d&oe=5EF86A4D"
            className= "avatar-img"
          />
          <div className= "banner-text">
          <h1> Full Stack Web Developer</h1>
          <hr />
          <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>
          <div className = "social-links">

            {/* LinkedIn */}          
              <a href = "http://linkedin.com/in/alisadekk" target="_blank" rel= "noopener noreferrer">
                  <i className= "fa fa-linkedin-square"  aria-hidden= "true" />
              </a>
              {/* Github */}
              <a href = "http://github.com/alisadek" target="_blank" rel= "noopener noreferrer">
                  <i className= "fa fa-github-square"  aria-hidden= "true" />
              </a>
          </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
}

export default LandingPage;
