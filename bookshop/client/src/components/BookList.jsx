import { useEffect, useState } from "react";
import { getAllBooks, getBooksByCategory } from "../services/books";
import { toast } from "react-toastify";
import BookCard from "./BookCard";
import { useLocation } from "react-router";

const BookList = () => {
  const location = useLocation();
  const [books, setBooks] = useState([]);

  // helper function to update state or show error if any
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
      toast.error("Failed to load books. Please try again later.");
    }
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="text-success fw-bold">
          {location.state?.category
            ? `Books in "${location.state.category}"`
            : "Explore All Books"}
        </h1>
        <p className="text-muted">Find your next favorite book below</p>
      </div>

      {books.length === 0 ? (
        <div className="alert alert-warning text-center">No books found.</div>
      ) : (
        <div className="row g-4">
          {books.map((b) => (
            <div className="col-md-4" key={"book" + b.id}>
              <BookCard book={b} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
