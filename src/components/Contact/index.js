import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    // ModalHeader,
    // ModalFooter,
    // ModalBody,
    // ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea
} from "@chakra-ui/react"

export default function Contact() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (

        <>
            <Button
                onClick={onOpen}
                variant='unstyled'
                fontWeight='normal'
                align='center'
                pb={4}
            >Contact Me</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    p={5}
                >
                    <FormControl>
                        <FormLabel>Email Address</FormLabel>
                        <Input type='email' />
                        <FormLabel>Subject</FormLabel>
                        <Input type='text' />
                        <FormLabel>Leave comments or questions below</FormLabel>
                        <Textarea />
                        <Button onClick={onClose}>Submit</Button>
                    </FormControl>
                </ModalContent>
            </Modal>
        </>
    )
}