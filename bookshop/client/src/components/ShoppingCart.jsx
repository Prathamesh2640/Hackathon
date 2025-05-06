import { useSelector } from "react-redux";
import store from "../redux/store";
import ItemCard from "./ItemCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = () => {
  const cartItems = useSelector((storeState) => storeState.cart.items);

  const handlePlaceOrder = () => {
    toast.success("Order placed successfully!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="container my-5">
      <ToastContainer />
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white text-center py-4">
          <h1 className="mb-0 fs-2 fw-bold">Your Shopping Cart</h1>
        </div>
        <div className="card-body p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <h3 className="text-muted">Your cart is empty</h3>
              <p className="text-secondary">
                Add some items to start shopping!
              </p>
            </div>
          ) : (
            <div className="row g-3">
              {cartItems.map((item) => (
                <div key={item.itemid} className="col-12">
                  <ItemCard
                    itemid={item.itemid}
                    quantity={item.quantity}
                    className="border rounded p-3 bg-light"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="card-footer text-end py-3">
            <button
              className="btn btn-primary btn-lg px-4"
              onClick={handlePlaceOrder}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
