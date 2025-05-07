import { Link } from "react-router";

const Home = () => {
    return (
        <div>
            <h1>Awesome Quotes</h1>
            <p>
                <em>
                    Sometimes, when things are falling apart, they may actually be falling into place.
        </em>
            </p>
            <br />
            <br />
            <h2>Get Started with us : </h2>
            <Link className="btn btn-primary btn-shadow pd-2" to="/login">
                Get Started
      </Link>
        </div>
    );
};

export default Home;
