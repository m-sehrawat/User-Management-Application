import { VStack, Input, Button, useToast, Heading } from '@chakra-ui/react'
import { useState } from 'react';
import { isInputFormValid, setToast } from '../../utils/functions'
import axios from 'axios';


const UserForm = () => {

    const payload = { username: '', email: '', description: '', role: '', city: '' };
    const [form, setForm] = useState(payload);
    const toast = useToast();

    const postUserData = async (payload) => {
        try {
            const { data: { username } } = await axios.post("/users", payload);
            return username;
        } catch (err) {
            console.log(err);
        }
    }

    const handleInputChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    }

    const handleOnSubmit = async () => {
        if (!isInputFormValid(form)) {
            setToast(toast, 'Empty Values', 'error');
        } else {
            const username = await postUserData(form);
            setToast(toast, `${username}'s Data Added`, 'success');
            setForm(payload);
        }
    }


    return (
        <>
            <div id="input-form">
                <VStack gap={'10px'} >
                    <Heading size={'lg'} mb={'10px'} >User Input Form</Heading>
                    <Input onInput={handleInputChange} value={form.username} name='username' type='text' placeholder='Username' />
                    <Input onInput={handleInputChange} value={form.email} name='email' type='email' placeholder='Email' />
                    <Input onInput={handleInputChange} value={form.description} name='description' type='text' placeholder='Description' />
                    <Input onInput={handleInputChange} value={form.role} name='role' type='text' placeholder='Role' />
                    <Input onInput={handleInputChange} value={form.city} name='city' type='text' placeholder='City' />
                    <Button onClick={handleOnSubmit} w={'100%'} >Submit</Button>
                </VStack>
            </div>
        </>
    )
};

export default UserForm;