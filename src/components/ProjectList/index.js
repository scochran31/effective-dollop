import { Grid, Image } from '@chakra-ui/react';
import React, { useState } from 'react'

const ProjectList = ({ project }) => {
    const [currentProject, setCurrentProject] = useState();

    const [projects] = useState([
        {
            name: 'MERN',
            category: 'portfolio',
            link: 'https://boiling-headland-75602.herokuapp.com/',
        },
        {
            name: 'Javascript',
            category: 'portfolio',
            link: 'https://scochran31.github.io/myPassword/',
        },
        {
            name: 'Node.js',
            category: 'portfolio',
            link: 'https://github.com/scochran31/team-profile-creator',
        },
        {
            name: 'Express.js',
            category: 'portfolio',
            link: 'https://safe-bastion-32691.herokuapp.com/',
        }
    ]);

    const showProjects = projects.filter(project => project.name === project);

    const projectInfo = (image, i) => {
        setCurrentProject({ ...image, index: i });
    }

    return (
        <Grid h={500}>
            {showProjects.map((image, i) => (
                <Image
                    src={require(`../../assets/image/${project.category}/[${i}].jpg`)}
                    alt={projects[i].name}
                    onClick={() => projectInfo(image, i)}
                    key={image.name}
                    fallbackSrc="https://via.placeholder.com/150"
                />

            ))}
        </Grid>
    )
}

export default ProjectList

