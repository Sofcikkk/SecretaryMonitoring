import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './Components/UserList';
import {UserListProvider} from "./context/UserContext";
import Users from "./Components/Users";
import NavBar from "./Components/NavBar"
import UpdateUserForm from "./Components/UpdateUserForm";
import NewUser from "./Components/NewUser";
import LoginForm from "./Components/Login";
import RegisterForm from "./Components/Register";

function App() {
    return (
        <Router>
            <UserListProvider>
                <div className="container">
                    <NavBar />
                    <hr />
                    <Routes>
                        <Route path="/" element={<Users />}>
                            <Route path="/UsersList" index element={<UserList />} />
                            <Route path=":id/edit" element={<UpdateUserForm/>}/>
                            <Route path="newUser" index element={<NewUser/>} />
                            <Route path="login" element={<LoginForm/>}/>
                            <Route path="register" element={<RegisterForm/>}/>
                        </Route>
                    </Routes>
                </div>
            </UserListProvider>
        </Router>

    );
}

export default App;
