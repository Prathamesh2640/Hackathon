import { useEffect, useState } from "react";
import { getAllQuotes } from "../services/quotes";
import { toast } from "react-toastify";
import QuoteCard from "./QuoteCard";
import { useLocation } from "react-router";

const QuoteList = () => {
    const location = useLocation();
    const [quotes, setQuotes] = useState([]);

    async function loadQuotes() {
        try {

            const quoteList = await getAllQuotes();
            setQuotes(quoteList);

        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    useEffect(() => {
        loadQuotes();
    }, []);

    return (
        <div>
            <h1>Quote List</h1>
            {quotes.map((q) => (
                <QuoteCard key={"quote" + q.id} quote={q} />
            ))}
        </div>
    );
};

export default QuoteList;
