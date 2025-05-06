import { useDispatch } from "react-redux";
import {
  decrItemQuantity,
  incrItemQuantity,
  removeItem,
} from "../redux/cartSlice";
import { toast } from "react-toastify";

const ItemCard = ({ itemid, quantity }) => {
  const dispatch = useDispatch();

  const handleIncrClick = () => {
    dispatch(incrItemQuantity(itemid));
    toast.success("Quantity increased!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  const handleDecrClick = () => {
    if (quantity > 1) {
      dispatch(decrItemQuantity(itemid));
      toast.info("Quantity decreased!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        theme: "colored",
      });
    }
  };

  const handleDeleteClick = () => {
    dispatch(removeItem(itemid));
    toast.error("Item removed from cart!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: true,
      theme: "colored",
    });
  };

  return (
    <div
      className="card shadow-lg m-3 p-3 border-0 rounded-3"
      style={{
        width: "250px",
        background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <div className="card-body text-center">
        <h3
          className="card-title mb-3 fw-bold text-primary"
          style={{ fontSize: "1.5rem" }}
        >
          Book: {itemid}
        </h3>
        <p className="card-text mb-4 text-muted" style={{ fontSize: "1.1rem" }}>
          Quantity: <span className="fw-bold text-dark">{quantity}</span>
        </p>
        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn btn-outline-success btn-sm rounded-circle"
            onClick={handleIncrClick}
            style={{ width: "40px", height: "40px", fontSize: "1.2rem" }}
            title="Increase Quantity"
          >
            +
          </button>
          <button
            className="btn btn-outline-warning btn-sm rounded-circle"
            onClick={handleDecrClick}
            style={{ width: "40px", height: "40px", fontSize: "1.2rem" }}
            title="Decrease Quantity"
            disabled={quantity <= 1}
          >
            -
          </button>
          <button
            className="btn btn-outline-danger btn-sm rounded-circle"
            onClick={handleDeleteClick}
            style={{ width: "40px", height: "40px", fontSize: "1.2rem" }}
            title="Remove Item"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
