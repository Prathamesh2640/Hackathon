import React from "react";
import { Link, useNavigate } from "react-router";

function Navbar() {
    const navigate = useNavigate();

    const onLogout = () => {
        console.log("Logout clicked!");
        sessionStorage.clear();
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary shadow sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold text-white" to="/user/">
                    📚 Awesome Quotes
        </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/user/quotes">
                                Home
              </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/user/myquotes">
                                My Quotes
              </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/user/profile">
                                Profile
              </Link>
                        </li>
                        <li className="nav-item mx-2">
                            <button
                                onClick={onLogout}
                                className="btn btn-outline-light btn-sm"
                            >
                                Logout
              </button>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;
