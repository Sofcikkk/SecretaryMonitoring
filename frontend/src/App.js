import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './Components/UserList';
import { UserListProvider } from "./context/UserContext";
import Users from "./Components/Users";
import NavBar from "./Components/NavBar";
import UpdateUserForm from "./Components/UpdateUserForm";
import NewUser from "./Components/NewUser";
import LoginForm from "./Components/Login";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Router>
                <UserListProvider>
                    <div className="container">
                        <NavBar />
                        <hr />

                        <Routes>
                            {/* Public Routes */}
                            <Route path="login" element={<LoginForm />} />

                            {/* Protected Routes */}
                            <Route
                                path="/"
                                element={
                                    <ProtectedRoute>
                                        <Users />
                                    </ProtectedRoute>
                                }
                            >
                                <Route path="UsersList" element={<UserList />} />
                                <Route path=":id/edit" element={<UpdateUserForm />} />
                                <Route path="newUser" element={<NewUser />} />
                            </Route>
                        </Routes>
                    </div>
                </UserListProvider>
            </Router>
        </AuthProvider>
    );
}

export default App;
