import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { AuthContext } from "../App";
import { useContext } from "react";
import QuoteList from "./QuoteList";

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
        </div>
    );
};

export default UserLayout;
