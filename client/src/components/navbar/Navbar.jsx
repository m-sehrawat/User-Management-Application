import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg={'#f5f5f5'} p={'10px'}>
                <Box p='2'>
                    <Heading size='md'>User Management</Heading>
                </Box>
                <Spacer />
                <ButtonGroup gap='2'>
                    <Button onClick={() => navigate('/')} colorScheme='teal'>Form</Button>
                    <Button onClick={() => navigate('/users')} colorScheme='teal'>Table</Button>
                </ButtonGroup>
            </Flex>
        </>
    )
};

export default Navbar;