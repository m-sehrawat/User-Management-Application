import { Tr, Td, Button, useDisclosure, useToast } from '@chakra-ui/react';
import { setToast } from '../../utils/functions';
import UserModal from './UserModal';
import axios from 'axios';


const TableRow = ({ data, fetchUserData }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const handleDeleteRequest = async (id) => {
        try {
            const { status } = await axios.delete(`/users/${id}`);
            status === 201 && setToast(toast, 'User deleted successfully', 'success');
            fetchUserData();
        } catch (err) {
            console.log(err);
            setToast(toast, 'Something went wrong', 'error');
        }
    }

    return (
        <>
            <Tr>
                <Td>{data.username}</Td>
                <Td>{data.email}</Td>
                <Td>{data.description}</Td>
                <Td>
                    <Button onClick={onOpen} size='xs' variant='outline' colorScheme="teal">More Details</Button>
                </Td>
                <Td>
                    <Button onClick={() => handleDeleteRequest(data._id)} size='xs' variant='outline' colorScheme="red">Delete</Button>
                </Td>
            </Tr>
            <UserModal data={data} isOpen={isOpen} onClose={onClose} />
        </>
    )
};

export default TableRow;