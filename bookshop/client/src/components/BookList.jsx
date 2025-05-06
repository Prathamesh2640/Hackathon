import { useEffect, useState } from "react";
import { getAllBooks, getBooksByCategory } from "../services/books";
import { toast } from "react-toastify";
import BookCard from "./BookCard";
import { useLocation } from "react-router";

const BookList = () => {
  const location = useLocation();
  const [books, setBooks] = useState([]);

  async function loadBooks() {
    try {
      if (location.state?.category) {
        const booklist = await getBooksByCategory(location.state.category);
        setBooks(booklist);
      } else {
        const booklist = await getAllBooks();
        setBooks(booklist);
      }
    } catch (err) {
      console.log(err);
      toast.error("Failed to load books. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success mb-3 animate__animated animate__fadeIn">
          {location.state?.category
            ? `Books in "${location.state.category}"`
            : "Explore All Books"}
        </h1>
        <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">
          Discover your next literary adventure
        </p>
      </div>

      {books.length === 0 ? (
        <div
          className="alert alert-warning text-center py-4 shadow-sm"
          role="alert"
        >
          <h5>No books found.</h5>
          <p className="mb-0">Check back later for new additions!</p>
        </div>
      ) : (
        <div className="row g-4">
          {books.map((b) => (
            <div className="col-md-4 col-lg-3" key={"book" + b.id}>
              <div className="h-100 animate__animated animate__zoomIn">
                <BookCard book={b} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
