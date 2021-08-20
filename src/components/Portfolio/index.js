import React from 'react'
import { Flex, Box, Text } from '@chakra-ui/layout';
import ProjectList from '../ProjectList';
import { Container } from '@chakra-ui/react';

function Portfolio(props) {
    const { currentCategory } = props;
    return (
        <Flex wrap='nowrap' align='center' justify='space-evenly' p={5} id='portfolio'>
            <Box justify='center' align='center'>
                <Text pr={2} fontSize='40px'>
                    Portfolio
                </Text>
            </Box>
            <Box p={5}>
                <Container maxW='100ch'>
                    <ProjectList project={currentCategory.name} />
                    <Text>{currentCategory.name}</Text>
                </Container>
            </Box>
        </Flex>
    )
}

export default Portfolio
