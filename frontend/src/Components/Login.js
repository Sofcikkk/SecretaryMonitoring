import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="d-flex justify-content-center align-items-center  bg-gradient">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                {/* Title */}
                <h2 className="text-center mb-4">Login</h2>

                {/* Form */}
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username / Email"
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>

                {/* Forgot Password */}
                <div className="text-end">
                    <a href="#" className="text-decoration-none">Forgot Password?</a>
                </div>

                {/* Login Button */}
                <button className="btn btn-danger w-100 mt-3">Login</button>

                {/* Register Link */}
                <p className="text-center mt-3">
                    Don’t have an account?{" "}
                    <NavLink
                        to="/register"
                        className="text-danger fw-bold text-decoration-none"
                    >
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
