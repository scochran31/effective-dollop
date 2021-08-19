import { Text, Container, Flex, Box, Image, ListItem, UnorderedList, HStack } from '@chakra-ui/react'
import React from 'react'
import Me from '../../Assets/image/shawn.png'

function About() {
    return (
        <Flex spacing='15px' justify='space-evenly' align='center' p={5} wrap='wrap'>
            <Box>
                <Text fontSize='40px'>
                    About Me
                </Text>
            </Box>
            <Box>
                <Container fontSize='20px'>
                    Hi, I am Shawn. I have been pursuing a Web Development certificate through the Coding Bootcamp at the University of Utah. I have spent the last six months learning web development with heavy emphasis on the Javascript language.

                    Other skills developed:
                </Container>
                <HStack justify='space-evenly' fontSize='20px'>
                    <Box>
                        <UnorderedList>
                            <ListItem>HTML</ListItem>
                            <ListItem>CSS</ListItem>
                            <ListItem>Javascript</ListItem>
                            <ListItem>Git, GitHub, GitLab</ListItem>
                            <ListItem>Node.js</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <UnorderedList>
                            <ListItem>Express.js</ListItem>
                            <ListItem>MySQL/NoSQL(MongoDB)</ListItem>
                            <ListItem>React.js</ListItem>
                            <ListItem>MERN</ListItem>
                        </UnorderedList>
                    </Box>
                </HStack>
                <Container fontSize='20px'>
                    Just as important as learning and understanding the concepts taught in this class, I have also learned how to research, study, parse documentation and data, and I have learned how to implement that information. I am dedicated to quality results and continuing my education and learning to become more proficient and a more valuable asset in whatever I am pursuing.
                </Container>
            </Box>
            <Box>
                <Image src={Me} alt='Shawn' h={240} w={200} fallbackSrc="https://via.placeholder.com/150" />
            </Box>
        </Flex>
    )
}

export default About
