import { Text, Container, Flex, Box, Image } from '@chakra-ui/react'
import React from 'react'

function About() {
    return (
        // <Flex wrap='wrap' d='grid' gridTemplateColumns='3'>
        //     <Flex d='grid' templateColumns='repeat(3, auto)' gap={5} h='auto' pl='5' >
        //         <Box w='30%'>
        //             <Text fontSize='40px'>About Me</Text>
        //         </Box>
        //         <Box w='40%'>
        //             <Container>Hi, I am Shawn. I have been pursuing a Web Development certificate through the Coding Bootcamp at the University of Utah. I have spent the last six months learning web development.
        //             </Container>
        //         </Box>
        //     </Flex>
        // </Flex >
        <Flex spacing='15px' justify='space-evenly' align='center' p={5} wrap='wrap'>
            <Box>
                <Text fontSize='40px'>
                    About Me
                </Text>
            </Box>
            <Box>
                <Container fontSize='20px'>
                    Hi, I am Shawn. I have been pursuing a Web Development certificate through the Coding Bootcamp at the University of Utah. I have spent the last six months learning web development.
                </Container>
            </Box>
            <Box>
                <Image src="gibbresh.png" fallbackSrc="https://via.placeholder.com/150" />
            </Box>
        </Flex>
    )
}

export default About
