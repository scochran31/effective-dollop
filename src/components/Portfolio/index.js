import React from 'react'
import { Box, Text } from '@chakra-ui/layout';
import ProjectList from '../ProjectList';

function Portfolio(props) {
    const { currentCategory } = props;
    return (
        <Box>
            <a href={currentCategory.link}>
                <Text>{currentCategory.name}</Text>
            </a>
            <ProjectList project={currentCategory.name} />
        </Box>
    )
}

export default Portfolio
