import { Button, Flex, Heading, Input, Select, Spacer, Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import axios from "axios";


const UsersTable = () => {

    const [userData, setUserData] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const fetchUserData = async () => {
        try {
            const { data } = await axios.get("/users");
            setUserData(data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleSorting = ({ target: { value } }) => {
        const sortedUserData = [...userData];
        if (value === 'usernameAZ') {
            sortedUserData.sort((a, b) => a.username.localeCompare(b.username));
        } else if (value === 'usernameZA') {
            sortedUserData.sort((a, b) => b.username.localeCompare(a.username));
        } else if (value === 'dateIncrease') {
            sortedUserData.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        } else if (value === 'dateDecrease') {
            sortedUserData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        setUserData(sortedUserData);
    }

    const handleFiltering = () => {
        const filteredData = [...userData];
        setUserData(filteredData.filter((item) => {
            return item.username.toLowerCase().includes(inputValue.toLowerCase());
        }));
        setInputValue('');
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div id="table-container">
            <Flex flexDirection={['column', 'column', 'row', 'row']} minWidth='max-content' alignItems='center' gap={['5px', '5px', '10px', '15px']} mb={'30px'}>
                <Heading fontSize={'25px'}>Users List</Heading>
                <Spacer />
                <Button onClick={fetchUserData}>Reset</Button>
                <Select onChange={handleSorting} w={['200px', '200px', '100px', '200px']} placeholder='Sorting'>
                    <option value={'usernameAZ'}>Username A-Z</option>
                    <option value={'usernameZA'}>Username Z-A</option>
                    <option value={'dateIncrease'}>Date Increase</option>
                    <option value={'dateDecrease'}>Date Decrease</option>
                </Select>
                <Input onChange={(e) => setInputValue(e.target.value)} value={inputValue} w={['200px', '200px', '150px', '200px']} placeholder="username" />
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
                        {userData.map((item) => (
                            <TableRow key={item._id} data={item} fetchUserData={fetchUserData} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default UsersTable;