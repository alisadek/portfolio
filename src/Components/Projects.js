import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";

import ProjectCard from "./ProjectsData";

import Guestbook from "../Assets/GuestBook.png";
import Blog from "../Assets/blog.png";
import Tindog from "../Assets/tindog.png";
import Keeper from "../Assets/Keeper.png";
import Todo from "../Assets/Todolist App.png"
import People from "../Assets/peoplenplaces.png"

function Projects() {
  return (
		<div id='projects' style={{ backgroundColor: "#ACFCF4" }}>
			<Container style={{ padding: "50px 0 170px" }}>
				<Typography
					component='h3'
					variant='h3'
					align='center'
					style={{
						padding: "100px",
						textDecoration: "underline",
						fontFamily: "Oxygen",
						fontWeight: "bold",
					}}
				>
					Projects
				</Typography>
				<Grid
					container
					direction='row'
					justify='space-evenly'
					alignItems='center'
					spacing={24}
				>
					<Grid item md={4}>
						<ProjectCard
							img={Guestbook}
							title='Guest Book'
							content='A guest book where users can write, edit and delete messages after logging in.'
							github='https://github.com/alisadek/guestbook-frontend'
							liveDemo='http://alisadek.web.app'
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							img={Blog}
							title='Blog Website'
							content='A blog created using ejs templates and connected to mongoose database'
							github='https://github.com/alisadek/blog'
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							img={Tindog}
							title='Tindog'
							content="It's just the same as Tinder, but for your dog. (Pure CSS and HTML project)"
							github='https://github.com/alisadek/TinDog'
							liveDemo='https://alisadek.github.io/TinDog/'
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							img={Keeper}
							title='Keeper'
							content="It's an app where you can keep your notes (looks like google keep). Frontend using ReactJS"
							github='https://github.com/alisadek/keeper'
							liveDemo='https://keepernoteapp.web.app/'
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							img={Todo}
							title='Todolist'
							content='A todolist app where you can create lists and create todos. Todos are stored using MongoDB.'
							github='https://github.com/alisadek/todolist'
							liveDemo='https://alitodolist.herokuapp.com/'
						/>
					</Grid>
					<Grid item md={4}>
						<ProjectCard
							img={People}
							title='People and Places'
							content='A webapp where users can post their favorite places. Frontend using React, backend using NodeJS'
							github='https://github.com/alisadek/peoplenplaces'
						/>
					</Grid>
				</Grid>
			</Container>
		</div>
  );
}

export default Projects;
