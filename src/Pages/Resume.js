import React, { useState } from 'react';



import pageOne from "../Software Engineer CV Design-01.svg";
import pageTwo from "../Software Engineer CV Design-02.svg";

function Resume() {


  return (
      <div style={{textAlign: "center"}}>
    <img style = {{width: "80%"}}src= {pageOne} alt= "Resume Page One" />
    <img style = {{width: "80%"}}src= {pageTwo} alt= "Resume Page Two" />
    </div>
  );
}

export default Resume;