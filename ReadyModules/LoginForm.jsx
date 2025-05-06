import { toast } from "react-toastify";

const LoginForm = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="text-center mb-4">Login to Your Account</h2>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
          />
        </div>

        <button
          className="btn btn-primary w-100 mb-3"
          onClick={() => toast.info("Login button clicked")}
        >
          Sign In
        </button>

        <div className="text-center">
          <span className="text-muted">Don't have an account? </span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
