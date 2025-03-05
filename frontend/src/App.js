import './App.css';
import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import UsersList from "./Components/users-list.component";

class App extends Component {
    render() {
        return (
            <div className="container mt-3">
                <Routes>
                    <Route path="/users" element={<UsersList/>} />
                </Routes>
            </div>
        )
    }

};

export default App;
