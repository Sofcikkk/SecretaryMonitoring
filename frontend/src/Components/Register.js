import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";

const RegisterForm = () => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-gradient">
            <div className="card p-4 shadow-lg" style={{ width: "350px" }}>
                {/* Title */}
                <h2 className="text-center mb-4 text-uppercase text-danger fw-bold">
                    Register
                </h2>

                {/* Form */}
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Full Name" />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Username / Email"
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number"
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>

                {/* Sign Up Button */}
                <button className="btn btn-danger w-100">Sign Up</button>

                {/* Already a Member? */}
                <p className="text-center mt-3">
                    Already a Member?{" "}
                    <NavLink
                        to="/login"
                        className="text-danger fw-bold text-decoration-none"
                    >
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;
