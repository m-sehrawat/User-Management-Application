import { Button, Flex, Heading, Input, Select, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import TableRow from "./TableRow";


const UsersTable = () => {

    const data = [
        {
            username: 'mohit',
            email: 'mohit@gmail.com',
            description: 'Hard working',
            role: 'Web Developer',
            city: 'Delhi',
            regDate: '28-02-2024',
        },
        {
            username: 'deepak',
            email: 'deepak@gmail.com',
            description: 'Hard working',
            role: 'Web Developer',
            city: 'Delhi',
            regDate: '28-02-2024',
        },
        {
            username: 'sagar',
            email: 'sagar@gmail.com',
            description: 'Hard working',
            role: 'Web Developer',
            city: 'Delhi',
            regDate: '28-02-2024',
        },
        {
            username: 'ravi',
            email: 'ravi@gmail.com',
            description: 'Hard working',
            role: 'Web Developer',
            city: 'Delhi',
            regDate: '28-02-2024',
        }
    ]

    const [userData, setUserData] = useState([]);

    const fetchUserData = () => {
        setUserData(data);
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div id="table-container">
            <Flex minWidth='max-content' alignItems='center' gap='15px' mb={'30px'}>
                <Heading fontSize={'25px'}  >Users List</Heading>
                <Spacer />
                <Select w={'200px'} placeholder='Sorting'>
                    <option>A-Z order</option>
                    <option>Z-A order</option>
                </Select>
                <Input w={'300'} placeholder="type username" />
                <Button>Filter</Button>
            </Flex>
            <hr />



            <TableContainer>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Th>Username</Th>
                            <Th>Email</Th>
                            <Th>Description</Th>
                            <Th>More Details</Th>
                            <Th>Delete</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {userData.map((item, i) => (
                            <TableRow key={i} data={item} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default UsersTable;