import { Text, Container, Flex, Box, Image, ListItem, UnorderedList, HStack } from '@chakra-ui/react'
import React from 'react'
// import Me from '../../assets/image/shawn.png'

function About() {
    return (
        <Flex spacing='15px' justify='space-evenly' align='center' p={5} wrap='wrap'>
            <Box>
                <Text pr='2' fontSize='40px'>
                    About Me
                </Text>
            </Box>
            <Box>
                <Container fontSize='20px'>
                    Hi, I am Shawn Cochran. I have completed a Web Development certificate through the Coding Bootcamp at the University of Utah. Technical skills that I learned and developed:
                </Container>
                <HStack justify='space-evenly' fontSize='20px' p={5}>
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
            {/* <Box>
                <Image
                    src={Me}
                    alt='Shawn'
                    h={240} w={200}
                    boxShadow='dark-lg'
                    fallbackSrc="https://via.placeholder.com/150" />
            </Box> */}
        </Flex>
    )
}

export default About
