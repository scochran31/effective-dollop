import { Box, Text, Flex, Link, Container } from '@chakra-ui/react'
// import Menu from './Menu'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import React, { useEffect } from 'react'

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
    }, [currentCategory]);

    return (
        <Flex display='inline-flex' justify='space-between' bgGradient='linear(to-r, orange.200, blue.300)' p={5} h='auto' minW='100vw' align='center'>
            <Box align='center' justify='center'>
                <Text fontFamily='fantasy' fontSize='4xl'>
                    <a href='/'>Shawn Cochran's Portfolio</a>
                </Text>
            </Box>
            <Box display='inline-flex'>
                <Container align='center'>
                    <Link href='#about'>About Me</Link>
                </Container>
                {categories.map((category) => (
                    <Box display='inline-flex'
                        className={`${currentCategory.name === category.name && 'navActive'}`}
                        key={category.name}
                    ><Text onClick={() => {
                        setCurrentCategory(category);
                    }}
                    >
                            {category.name}
                        </Text>
                    </Box>
                ))}
            </Box>
            <Box>
                <ColorModeSwitcher />
            </Box>
        </Flex>

    )
}

export default Nav