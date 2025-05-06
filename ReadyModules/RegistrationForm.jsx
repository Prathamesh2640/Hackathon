const RegistrationForm = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="col-md-6 border border-2 rounded shadow p-4 bg-light">
        <div className="text-center mb-4">
          <h2 className="text-primary">Create Account</h2>
          <p className="text-muted">Please fill in this form to register</p>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-dark">Full Name</label>
          <input
            className="form-control"
            name="name"
            type="text"
            placeholder="Enter your full name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-dark">Email Address</label>
          <input
            className="form-control"
            name="email"
            type="email"
            placeholder="enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-dark">Password</label>
          <input
            className="form-control"
            name="passwd"
            type="password"
            placeholder="Create a password"
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-dark">Mobile Number</label>
          <input
            className="form-control"
            name="mobile"
            type="tel"
            placeholder="10-digit mobile number"
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold text-dark">Address</label>
          <input
            className="form-control"
            name="address"
            type="text"
            placeholder="Enter your address"
          />
        </div>

        <div className="d-grid gap-2">
          <button className="btn btn-success fw-bold">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
