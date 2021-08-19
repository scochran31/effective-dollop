import { Box, Text, Flex } from '@chakra-ui/react'
// import Menu from './Menu'
import { ColorModeSwitcher } from '../../ColorModeSwitcher'
import React from 'react'

const Nav = () => {
    return (
        // <Heading h='100px' d='flex'  p='5'>
        //     <Box d='flex' alignItems='flex-end'>
        //         <Menu />
        //     </Box>
        //     <Spacer />
        //     <Box d='flex' alignItems='center'>
        //         <Text fontSize='4xl' fontFamily='fantasy'>Shawn's React Portfolio</Text>
        //     </Box>
        //     <Spacer />
        //     <Box d='flex' alignItems='flex-end'>
        //         <ColorModeSwitcher />
        //     </Box>
        // </Heading>
        <Flex justify='space-between' bgGradient='linear(to-r, orange.200, blue.300)' p={5} h='auto' align='center'>
            {/* <Box>
                <Menu />
            </Box> */}
            <Box align='center' justify='center'>
                <Text fontFamily='fantasy' fontSize={{ base: '32px', md: '48px', lg: '64px' }}>
                    Shawn's React Portfolio
                </Text>
            </Box>
            <Box>
                <ColorModeSwitcher />
            </Box>
        </Flex>

    )
}

export default Nav