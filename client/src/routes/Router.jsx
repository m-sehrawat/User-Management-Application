import UserForm from "../components/form/UserForm";
import Navbar from "../components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import UsersTable from "../components/table/UsersTable";
import UserData from "../components/user/UserData";


const Router = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<UserForm />} />
                <Route path="/users" element={<UsersTable />} />
                <Route path="/users/client" element={<UserData />} />
            </Routes>
        </>
    )
};

export default Router;