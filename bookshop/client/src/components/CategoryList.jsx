import { useEffect, useState } from "react";
import { getCategories } from "../services/books";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const loadCategories = async () => {
    try {
      const cats = await getCategories();
      setCategories(cats);
    } catch (err) {
      toast.error("Failed to load categories. Please try again later.");
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleShowBooksClick = (e) => {
    const selectedCategory = e.target.value;
    navigate("/user/books", {
      state: {
        category: selectedCategory,
      },
    });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-success mb-4 fw-bold">
        Explore Categories
      </h1>
      <div className="d-flex flex-wrap justify-content-center">
        {categories.map((c) => (
          <div
            key={c}
            className="card m-3 p-3 border-0 shadow-lg"
            style={{ width: "250px", background: "#f0f8ff" }}
          >
            <h4 className="card-title text-primary text-center">{c}</h4>
            <button
              value={c}
              className="btn btn-outline-success mt-3 fw-semibold"
              onClick={handleShowBooksClick}
            >
              Show Books
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
