import { Box, Text, Flex, Link, Container } from '@chakra-ui/react'
// import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import Contact from '../Contact'
import React, { useEffect } from 'react'

function Nav(props) {
    const {
        currentCategory
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <Flex
            display='inline-flex' justify='space-between' bgGradient='linear(to-r, orange.200, blue.300)'
            p={5}
            h='auto'
            minW='100vw' align='center'>
            <Box align='center' justify='center'>
                <Text fontFamily='fantasy' fontSize='4xl'>
                    <a href='/'>Shawn Cochran's Portfolio</a>
                </Text>
            </Box>
            <Box
                display='inline-flex'>
                <Container align='center'
                    maxW='20ch'>
                    <Link href='#about'>About Me</Link>
                </Container>
                <Container align='center'
                    maxW='20ch'>
                    <Link href='#portfolio'>
                        Portfolio
                    </Link>
                </Container>
                <Container
                    align='center'
                    maxW='20ch'>
                    <Link href='#resume'>
                        Resume
                    </Link>
                </Container>
                <Container
                    align='center'
                    maxW='20ch'>
                    <Contact />
                </Container>
            </Box>
            {/* <Box>
                <ColorModeSwitcher />
            </Box> */}
        </Flex>

    )
}

export default Nav