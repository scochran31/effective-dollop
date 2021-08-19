import { Center, Image, Link } from '@chakra-ui/react'
import gh from '../../Assets/footerImg/GitHub.png'
import In from '../../Assets/footerImg/in.png'
import React from 'react'

function Footer() {
    return (
        <Center d='flex' h='100px' bgGradient='linear(to-r, orange.200, blue.300)' p='5'>
            <Link href='https://github.com/scochran31' isExternal>
                <Image src={gh} alt='github link' boxSize='75px' objectFit='cover'>
                </Image>
            </Link>
            <Link href='https://www.linkedin.com/in/shawn-cochran-18454220a/' isExternal>
                <Image src={In} alt='LinkdIn' boxSize='75px' objectFit='cover'></Image>
            </Link>
        </Center>

    )
}

export default Footer
