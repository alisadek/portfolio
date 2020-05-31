import React, { useState } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";

import ProjectCard from "../Components/ProjectCard";
import "../Components/PageLayout.css"

function Projects(props) {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabChange(tabId) {
    setActiveTab(tabId);
  }
  function toggleCategories() {
    if (activeTab === 0) {
      return (
        <div className="projects-grid">
          <ProjectCard
            imgUrl="https://reactjs.org/logo-og.png"
            cardText="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            cardTitle="React Project #1"
          />
          <ProjectCard
            imgUrl="https://reactjs.org/logo-og.png"
            cardText="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            cardTitle="React Project #2"
          />
          <ProjectCard
            imgUrl="https://reactjs.org/logo-og.png"
            cardText="Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            cardTitle="React Project #3"
          />
        </div>
      );
    } else if (activeTab === 1) {
      return (
        <div>
          <h1>This is the Backend</h1>
        </div>
      );
    } else if (activeTab === 2) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }
  return (
    <div className="category-tabs">
      <Tabs
        activeTab={activeTab}
        onChange={(tabId) => {
          handleTabChange(tabId);
        }}
        ripple
      >
        <Tab>React</Tab>
        <Tab>Backend</Tab>
        <Tab>MongoDB</Tab>
      </Tabs>
      <section>
        <Grid>
          <Cell col={12}>
            <div className="content">{toggleCategories()}</div>
          </Cell>
        </Grid>
        "
      </section>
    </div>
  );
}

export default Projects;
