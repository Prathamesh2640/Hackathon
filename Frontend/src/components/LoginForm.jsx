import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { userSignIn } from "../services/users";
import { AuthContext } from "../App";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSignInClick = async () => {
        if (!email.trim() || !password.trim()) {
            toast.warn("Please enter both email and password.");
            return;
        }

        setLoading(true);
        try {
            const user = await userSignIn(email, password);
            sessionStorage.setItem("user", JSON.stringify(user));
            setUser(user);
            toast.success("Login successful! Redirecting...");
            navigate("/user");
        } catch (err) {
            toast.error("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="col-md-6 offset-md-3 border border-2 rounded-4 shadow-lg p-5 my-5 bg-light">
            <div className="mb-4 text-center text-primary">
                <h2 className="fw-bold">Welcome</h2>
                <p className="text-muted">Please login to your account</p>
            </div>
            <div className="mb-3">
                <label className="form-label fw-semibold">Email address</label>
                <input
                    className="form-control border-primary shadow-sm"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                />
            </div>
            <div className="mb-4">
                <label className="form-label fw-semibold">Password</label>
                <input
                    className="form-control border-primary shadow-sm"
                    name="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                />
            </div>
            <div className="row mb-3">
                <button
                    className="mx-2 col btn btn-success fw-semibold shadow"
                    onClick={handleSignInClick}
                    disabled={loading}
                >
                    {loading ? "Signing In..." : "Sign In"}
                </button>
                <Link
                    className="mx-2 col btn btn-outline-secondary fw-semibold shadow"
                    to="/register"
                >
                    Sign Up
        </Link>
            </div>
        </div>
    );
};

export default LoginForm;
