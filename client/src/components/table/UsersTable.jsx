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
            username: 'Deepak',
            email: 'deepak@gmail.com',
            description: 'Good working',
            role: 'Software Engineer',
            city: 'Bangalore',
            regDate: '01-02-2024',
        },
        {
            username: 'Sagar',
            email: 'sagar@gmail.com',
            description: 'Smart working',
            role: 'Full stack Developer',
            city: 'Noida',
            regDate: '30-01-2024',
        },
        {
            username: 'Ravi',
            email: 'ravi@gmail.com',
            description: 'Slow working',
            role: 'Python Developer',
            city: 'Jaipur',
            regDate: '09-02-2024',
        }
    ]

    const [userData, setUserData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const fetchUserData = () => {
        setUserData(data);
    }

    const handleSorting = ({ target: { value } }) => {
        const sortedUserData = [...userData];
        const resetData = [...userData];
        if (value === 'increase') {
            sortedUserData.sort((a, b) => a.username.localeCompare(b.username));
        } else if (value === 'decrease') {
            sortedUserData.sort((a, b) => b.username.localeCompare(a.username));
        }
        setUserData(sortedUserData);
    }

    const handleFiltering = () => {
        console.log(inputValue);
        const filteredData = userData.filter((item) => item.username === inputValue);
        setUserData(filteredData);
        setInputValue('');
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div id="table-container">
            <Flex minWidth='max-content' alignItems='center' gap='15px' mb={'30px'}>
                <Heading fontSize={'25px'}  >Users List</Heading>
                <Spacer />
                <Select onChange={handleSorting} w={'200px'} placeholder='Sorting'>
                    <option value={'increase'}>A-Z order</option>
                    <option value={'decrease'}>Z-A order</option>
                </Select>
                <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} w={'300'} placeholder="username" />
                <Button onClick={handleFiltering}>Filter</Button>
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