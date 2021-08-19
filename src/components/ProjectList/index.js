import { Grid, Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import MERN from '../../assets/portfolio/0.jpg'
import JS from '../../assets/portfolio/1.jpg'
import Node from '../../assets/portfolio/2.jpg'
import Express from '../../assets/portfolio/3.jpg'

const ProjectList = ({ project }) => {
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            name: 'MERN',
            category: 'portfolio',
            link: 'https://boiling-headland-75602.herokuapp.com/',
            img: { MERN }
        },
        {
            name: 'Javascript',
            category: 'portfolio',
            link: 'https://scochran31.github.io/myPassword/',
            img: { JS }
        },
        {
            name: 'Node.js',
            category: 'portfolio',
            link: 'https://github.com/scochran31/team-profile-creator',
            img: { Node }
        },
        {
            name: 'Express.js',
            category: 'portfolio',
            link: 'https://safe-bastion-32691.herokuapp.com/',
            img: { Express }
        }
    ]);

    const showProjects = projects.filter(project => project.name === project);

    const projectInfo = (image, i) => {
        setCurrentProject({ ...image, index: i });
    }

    return (
        <Grid h={500}>
            {showProjects.map((image, i) => (
                <img
                    src={projects[i].img}
                    alt={projects[i].name}
                    onClick={() => projectInfo(image, i)}
                    key={image.name}
                />

            ))}
        </Grid>
    )
}

export default ProjectList

