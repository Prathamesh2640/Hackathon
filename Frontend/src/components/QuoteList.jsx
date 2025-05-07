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

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Quote List</h2>
            {quotes.map((q) => (
                <QuoteCard key={q.id} quote={q} />
            ))}
        </div>
    );
};

export default QuoteList;













