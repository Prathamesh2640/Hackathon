import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    });

    // Load initial user data (simulate or fetch from API)
    useEffect(() => {
        async function fetchProfile() {
            try {
                const res = await axios.get("/api/profile");
                setFormData(res.data);
            } catch (err) {
                console.log("Error fetching profile:", err);
            }
        }

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            await axios.put("/api/profile", formData);
            alert("Profile updated successfully!");
        } catch (err) {
            console.log("Error updating profile:", err);
            alert("Failed to update profile.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">My Profile</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <textarea
                        className="form-control"
                        name="address"
                        rows="3"
                        value={formData.address}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleUpdate}
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Profile;
