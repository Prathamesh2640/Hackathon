import { useDispatch } from "react-redux";
import { baseUrl } from "../services/apiconfig";
import { addItem } from "../redux/cartSlice";

const BookCard = (props) => {
  const { id, title, author, category, price, image_name } = props.book;
  const dispatch = useDispatch();

  const handleAddCartClick = () => {
    dispatch(addItem(id));
  };

  return (
    <div
      className="card d-inline-block m-3 shadow rounded-4 border-0"
      style={{ width: "240px", backgroundColor: "#f0f8ff" }}
    >
      <img
        src={baseUrl + "/uploads/" + image_name}
        alt={title}
        style={{ height: "320px", objectFit: "cover" }}
        className="card-img-top rounded-top-4"
      />
      <div className="card-body text-center">
        <h5 className="card-title text-primary fw-bold">{title}</h5>
        <p
          className="card-text text-secondary mb-2"
          style={{ fontSize: "0.9rem" }}
        >
          <span className="fw-semibold text-dark">{category}</span> book by{" "}
          <br />
          <span className="text-dark">{author}</span>
        </p>
        <p className="text-success fw-bold">Rs. {price}/-</p>
        <button
          className="btn btn-outline-success fw-semibold w-100"
          onClick={handleAddCartClick}
        >
          + Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
