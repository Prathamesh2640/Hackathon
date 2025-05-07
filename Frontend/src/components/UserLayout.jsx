import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { AuthContext } from "../App";
import { useContext } from "react";

const UserLayout = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="min-vh-100 bg-light p-3">
            <Navbar />
            <div
                className="p-3 text-center text-white fw-bold fs-5"
                style={{ background: "linear-gradient(to right, #ff8a00, #e52e71)" }}
            >
                👋 Welcome, {user?.firstName || "User"}!
      </div>
            <h1 className="text-center">Quotes around the world</h1>

            <div className="container my-4">
                <Outlet />
            </div>
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary me-2">All</button>
                <button className="btn btn-outline-danger">My Favourites</button>
            </div>



        </div>
    );
};

export default UserLayout;
