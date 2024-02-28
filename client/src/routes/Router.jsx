import UsersTable from "../components/table/UsersTable";
import UserForm from "../components/form/UserForm";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";


const Router = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<UserForm />} />
                <Route path="/users" element={<UsersTable />} />
            </Routes>
        </>
    )
};

export default Router;