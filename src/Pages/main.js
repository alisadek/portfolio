import React from 'react';
import LandingPage from './LandingPage';
import {Switch, Route} from "react-router-dom";
import AboutMe from './AboutMe';
import Resume from './Resume';
import Contact from './Contact';
import Projects from './Projects';

 function Main (){
     return (
     <Switch>
         <Route exact path= "/portfolio" component = {LandingPage} />
         <Route path= "/aboutme" component = {AboutMe} />
         <Route path= "/contact" component = {Contact} />
         <Route path= "/projects" component = {Projects} />
         <Route path= "/resume" component = {Resume} />
     </Switch>
     )
 }

export default Main
