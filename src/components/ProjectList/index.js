import { Grid, Image, Text, GridItem, Link, Flex } from '@chakra-ui/react';
import React from 'react'
import MERN from '../../assets/image/portfolio/MERN.jpg'
import Javascript from '../../assets/image/portfolio/Javascript.jpg'
import Node from '../../assets/image/portfolio/Node.jpg'
import Express from '../../assets/image/portfolio/Express.jpg'
import MongoDB from '../../assets/image/portfolio/MongoDB.png'

const ProjectList = () => {

    const projects = [
        {
            name: 'MERN',
            category: 'portfolio',
            link: 'https://boiling-headland-75602.herokuapp.com/',
        },
        {
            name: 'Javascript',
            category: 'portfolio',
            link: 'https://scochran31.github.io/myPassword/',
        },
        {
            name: 'Node.js',
            category: 'portfolio',
            link: 'https://github.com/scochran31/team-profile-creator',
        },
        {
            name: 'Express.js',
            category: 'portfolio',
            link: 'https://safe-bastion-32691.herokuapp.com/',
        },
        {
            name: 'MongoDB',
            category: 'portfolio',
            link: 'https://github.com/scochran31/the-social-api'
        }
    ];



    return (
        <Flex>
        <Grid
            h={400}
            templateRows='repeat(4, 2fr)'
            templateColumns='repeat(9, 2fr)'
            gap={4}
            p={15}
        >
            <GridItem rowSpan={2} colSpan={3}>
                    <Link href={projects[0].link} target='_blank'>
                    <Image src={MERN} objectFit='contain' />
                    <Text fontSize='xl'>{projects[0].name}</Text></Link>
            </GridItem>
            <GridItem rowSpan={2} colSpan={3}>
                    <Link href={projects[1].link} target='_blank'>
                    <Image src={Javascript} />
                    <Text fontSize='xl'>{projects[1].name}</Text>
                </Link>
            </GridItem>
            <GridItem rowSpan={2} colSpan={3}>
                    <Link href={projects[2].link} target='_blank'>
                    <Image src={Node} />
                    <Text fontSize='xl'>{projects[2].name}</Text>
                </Link>
            </GridItem>
            <GridItem rowSpan={2} colSpan={3}>
                    <Link href={projects[3].link} target='_blank'>
                    <Image src={Express} />
                    <Text fontSize='xl'>{projects[3].name}</Text>
                </Link>
            </GridItem>
            <GridItem rowSpan={2} colSpan={3}>
                    <Link href={projects[4].link} target='_blank'>
                    <Image src={MongoDB} />
                    <Text fontSize='xl'>{projects[4].name}</Text>
                </Link>
            </GridItem>
        </Grid>
        </Flex>
    )
}

export default ProjectList

