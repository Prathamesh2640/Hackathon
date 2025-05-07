import { useEffect, useState } from "react";
import { getAllQuotes } from "../services/quotes"; // Assumes you have this function
import QuoteCard from "./QuoteCard";

const QuoteList = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        async function loadQuotes() {
            try {
                const quoteList = await getAllQuotes();
                setQuotes(quoteList);
            } catch (err) {
                console.log("Error fetching quotes:", err);
            }
        }

        loadQuotes();
    }, []);

    const getFav = 0;


    return (
        <div className="container mt-4">
            <h2 className="mb-4">Quote List</h2>
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary me-2">All</button>
                <button className="btn btn-outline-danger" onClick={getFav} >My Favourites</button>
            </div>
            {quotes.map((q) => (
                <QuoteCard key={q.id} quote={q} />
            ))}
        </div>
    );
};

export default QuoteList;
