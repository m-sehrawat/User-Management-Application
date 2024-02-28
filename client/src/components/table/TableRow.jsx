import { Tr, Td, Button, useDisclosure } from '@chakra-ui/react';
import UserModal from './UserModal';
import { useNavigate } from 'react-router-dom';


const TableRow = ({ data }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate = useNavigate();

    return (
        <>
            <Tr>
                <Td>{data.username}</Td>
                <Td>{data.email}</Td>
                <Td>{data.description}</Td>
                <Td>
                    {/* <Button onClick={() => navigate('/users/client')} size='xs' variant='outline' colorScheme="teal">More Details</Button> */}
                    <Button onClick={onOpen} size='xs' variant='outline' colorScheme="teal">More Details</Button>
                </Td>
                <Td>
                    <Button size='xs' variant='outline' colorScheme="red">Delete</Button>
                </Td>
            </Tr>

            <UserModal data={data} isOpen={isOpen} onClose={onClose} />
        </>
    )
};

export default TableRow;