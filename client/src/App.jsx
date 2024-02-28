import UserForm from "./components/form/UserForm";
import Navbar from "./components/navbar/Navbar";
import UsersTable from "./components/table/UsersTable";
import Router from "./routes/Router";

const App = () => {
    return (
        <>
            <Router />
            {/* <Navbar />
            <UserForm />
            <UsersTable /> */}
        </>
    )
};

export default App;