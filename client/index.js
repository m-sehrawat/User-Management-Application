import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ChakraProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ChakraProvider>
);