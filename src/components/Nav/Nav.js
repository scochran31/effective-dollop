import { Box, Heading, Spacer, Text } from '@chakra-ui/react'
// import Menu from './Menu'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import React from 'react'

const Nav = () => {
    return (
        <Heading h='100px' d='flex' bgGradient='linear(to-r, orange.200, blue.300)' p='5'>
            <Box>

            </Box>
            <Spacer />
            <Box>
                <Text size='4xl'>Shawn's React Portfolio</Text>
            </Box>
            <Spacer />
            <Box>
                <ColorModeSwitcher />
            </Box>
        </Heading>
    )
}

export default Nav