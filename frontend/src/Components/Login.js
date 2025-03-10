import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginAPICall } from "../Services/login.service";

const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();
    const { isAuthenticated, login } = useAuth(); // Use auth context

    // Redirect when authentication state updates
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]);

    async function handleLoginForm(e) {
        e.preventDefault();
        try {
            const response = await loginAPICall(formData.username, formData.password);

            console.log("Login successful, response:", response.data);

            // Update authentication state
            login(formData.username, formData.password);

            // Store user data in local storage
            localStorage.setItem("user", JSON.stringify(response.data));

        } catch (error) {
            console.error("Login failed", error);
        }
    }

    // Handle input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="d-flex justify-content-center align-items-center bg-gradient">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <div className="mb-3">
                    <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Email"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <button className="btn btn-danger w-100 mt-3" onClick={handleLoginForm}>Login</button>
            </div>
        </div>
    );
};

export default LoginForm;
