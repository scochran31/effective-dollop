// import {
//     Drawer,
//     DrawerBody,
//     // DrawerFooter,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//     DrawerCloseButton,
//     Button,
//     // Input,
//     useDisclosure,
//     Text,
//     Divider,
// } from "@chakra-ui/react"
// import { HamburgerIcon } from "@chakra-ui/icons"
// import React from 'react'

// function Menu() {
//     const { isOpen, onOpen, onClose } = useDisclosure()
//     const btnRef = React.useRef()

//     return (
//         <>
//             <Button ref={btnRef} variant='ghost' onClick={onOpen}>
//                 <HamburgerIcon />
//             </Button>
//             <Drawer
//                 isOpen={isOpen}
//                 placement="left"
//                 onClose={onClose}
//                 finalFocusRef={btnRef}
//             >
//                 <DrawerOverlay />
//                 <DrawerContent>
//                     <DrawerCloseButton />
//                     <DrawerHeader p='5' bgGradient='linear(to-tr, blue.300, orange.200)' color='white' fontSize='24px'>Get to know Shawn</DrawerHeader>
//                     <Divider orientation='horizontal' />
//                     <DrawerBody p='5' bgGradient='linear(to-br, blue.300, orange.200)'>
//                         <Text>Nav Links Here</Text>
//                     </DrawerBody>
//                 </DrawerContent>
//             </Drawer>
//         </>
//     )
// }

// export default Menu
