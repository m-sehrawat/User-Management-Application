import { Tr, Td, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'
import { formatDateAndTime } from '../../utils/functions';


const UserModal = ({ data, isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>User All Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Tr><Td>Username: {data.username}</Td></Tr>
                    <Tr><Td>Email: {data.email}</Td></Tr>
                    <Tr><Td>Description: {data.description}</Td></Tr>
                    <Tr><Td>Role: {data.role}</Td></Tr>
                    <Tr><Td>Registration Date & Time: {formatDateAndTime(data.createdAt)}</Td></Tr>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
};

export default UserModal;