import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginAPICall } from "../Services/login.service";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // Use auth context

    async function handleLoginForm(e) {
        e.preventDefault();
        try {
            const response = await loginAPICall(username, password);
            console.log(response.data);

            login(); // Updates context and localStorage
            localStorage.setItem("user", JSON.stringify(response.data));

            navigate("/");
        } catch (error) {
            console.error("Login failed", error);
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-gradient">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className="btn btn-danger w-100 mt-3" onClick={handleLoginForm}>Login</button>
            </div>
        </div>
    );
};

export default LoginForm;
