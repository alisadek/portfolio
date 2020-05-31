import React from 'react'
import {Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from "react-mdl";

function ProjectCard(props) {
    return (
        <div className= "projects-grid" style= {{margin: "auto", float: "left", position:"relative"}}>
             <Card shadow = {5} style= {({minWidth: "450", margin: "auto"})}>
                <CardTitle style = {{color: "#fff", height: "176px", background: `url(${props.imgUrl}) center / cover`}}>
                    {props.cardTitle}
                </CardTitle>
                <CardText>
                {props.cardText}
                </CardText>
                <CardActions border>
                    <Button colored> Github </Button>
                    <Button colored> CodePen</Button>
                    <Button colored> Live Demo </Button> 
                </CardActions>
                <CardMenu style= {{color: "#fff"}}>
                    <IconButton name = "share" />
                </CardMenu>
            </Card>
        </div>
    )
}

export default ProjectCard
