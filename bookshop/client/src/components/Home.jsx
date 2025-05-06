import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>Online Book Shop</h1>
      <p>
        <em>
          Dear readers, We offer a huge collection of books from diverse
          categories of Fiction, Non-fiction, Biographies, History, Religion,
          Self-Help, etc. We also offer a collection of Investments and
          Management, Computers, Engineering, Medical, College and School text
          reference books.
        </em>
      </p>
      <p>
        <em>
          We strive for customer satisfaction by offering a user-friendly search
          engine, efficient payment options and seamless delivery systems. Apart
          from all this, we also provide great deals and discounts on our
          products.
        </em>
      </p>
      <p>
        <em>
          All the Publishers, Distributors and Authors around the country are
          welcome to partner with us and grow the Bookshop family. We would like
          to thank our customers for shopping with us.{" "}
        </em>
      </p>
      <h4>
        *You can write to us on our e-mail id to share any suggestions or
        feedback you might have regarding our website or services.*
      </h4>
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
