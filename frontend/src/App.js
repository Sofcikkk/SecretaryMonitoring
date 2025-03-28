import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './Components/crudUsers/UserList';
import { UserListProvider } from "./context/UserContext";
import Users from "./Components/crudUsers/Users";
import NavBar from "./Components/NavBar";
import UpdateUserForm from "./Components/crudUsers/UpdateUserForm";
import NewUser from "./Components/crudUsers/NewUser";
import LoginForm from "./Components/Login";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import WorkTime from "./Components/WorkTime";
import DataAnalysis from "./Components/DataAnalysis";
import WorkSchedule from "./Components/WorkSchedule";
import VacationForm from "./Components/VacationForm";
import UpdateTaskForm from "./Components/crudTasks/UpdateTaskForm";
import TaskList from "./Components/crudTasks/TaskList";
import NewTask from "./Components/crudTasks/NewTask";
import { TaskProvider } from "./context/TaskContext";

function App() {
    return (
        <AuthProvider>
            <Router>
                <UserListProvider>
                    <TaskProvider> {/* <-- przeniesione tutaj */}
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
                                    <Route path="usersList" element={<UserList />} />
                                    <Route path=":id/edit" element={<UpdateUserForm />} />
                                    <Route path="newUser" element={<NewUser />} />
                                    <Route path="tasksList" element={<TaskList />} />
                                    <Route path=":id/editTask" element={<UpdateTaskForm />} />
                                    <Route path="newTask" element={<NewTask />} />
                                    <Route path="workTime" element={<WorkTime />} />
                                    <Route path="dataAnalysis" element={<DataAnalysis />} />
                                    <Route path="workSchedule" element={<WorkSchedule />} />
                                    <Route path="vacationForm" element={<VacationForm />} />
                                </Route>
                            </Routes>
                        </div>
                    </TaskProvider>
                </UserListProvider>
            </Router>
        </AuthProvider>
    );
}

export default App;
