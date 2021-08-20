import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/layout';
import ProjectList from '../ProjectList';

function Portfolio(props) {
    const { currentCategory } = props;
    return (
        <Flex spacing='15px' justify='space-evenly' align='center' p={5} display='flex'>
            <Box>
                <Text pr={2} fontSize='40px'>
                    Portfolio
                </Text>
            </Box>
            <Box>

                <ProjectList project={currentCategory.name} />
                <a href={currentCategory.link}>
                    <img src={currentCategory.img} />
                    <Text>{currentCategory.name}</Text>
                </a>

            </Box>
            <Box>
                Something else
            </Box>
        </Flex>
    )
}

export default Portfolio
