import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { userSignUp } from "../services/users";

const RegistrationForm = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    passwd: "",
    mobile: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputFieldChange = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  const handleSignUpClick = async () => {
    const { name, email, passwd, mobile, address } = info;
    if (!name || !email || !passwd || !mobile || !address) {
      toast.warn("Please fill out all fields.");
      return;
    }
    setLoading(true);
    try {
      const user = await userSignUp(email, passwd, name, mobile, address);
      toast.success(`Registration successful! Your user ID: ${user.id}`);
      navigate("/login");
    } catch (err) {
      toast.error(err.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-md-8 offset-md-2 border border-2 rounded-4 shadow-lg p-5 my-5 bg-white">
      <div className="mb-4 text-center text-success">
        <h2 className="fw-bold">Create Account</h2>
        <p className="text-muted">Fill in the details to register</p>
      </div>
      <div className="mb-3">
        <label className="form-label fw-semibold">Full Name</label>
        <input
          className="form-control border-success shadow-sm"
          name="name"
          type="text"
          value={info.name}
          onChange={handleInputFieldChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label fw-semibold">Email</label>
        <input
          className="form-control border-success shadow-sm"
          name="email"
          type="email"
          value={info.email}
          onChange={handleInputFieldChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-3">
        <label className="form-label fw-semibold">Password</label>
        <input
          className="form-control border-success shadow-sm"
          name="passwd"
          type="password"
          value={info.passwd}
          onChange={handleInputFieldChange}
          placeholder="Enter your password"
        />
      </div>
      <div className="mb-3">
        <label className="form-label fw-semibold">Mobile Number</label>
        <input
          className="form-control border-success shadow-sm"
          name="mobile"
          type="text"
          value={info.mobile}
          onChange={handleInputFieldChange}
          placeholder="Enter your mobile number"
        />
      </div>
      <div className="mb-4">
        <label className="form-label fw-semibold">Address</label>
        <input
          className="form-control border-success shadow-sm"
          name="address"
          type="text"
          value={info.address}
          onChange={handleInputFieldChange}
          placeholder="Enter your address"
        />
      </div>
      <div className="row">
        <button
          className="mx-2 col btn btn-success fw-semibold shadow"
          onClick={handleSignUpClick}
          disabled={loading}
        >
          {loading ? "Registering..." : "Sign Up"}
        </button>
        <Link
          className="mx-2 col btn btn-outline-secondary fw-semibold shadow"
          to="/login"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
