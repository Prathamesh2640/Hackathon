import React, { useEffect, useState } from "react";
import axios from "axios";

const MyQuotes = () => {
    const user = sessionStorage.getItem("user");
    const userId = user.id;
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        if (!userId) return;

        async function fetchMyQuotes() {
            try {
                const res = await axios.get(`/quote/my`, { userId });
                setQuotes(res.data.data);
            } catch (err) {
                console.error("Error fetching quotes:", err);
                alert("Could not fetch your quotes.");
            }
        }

        fetchMyQuotes();
    }, [userId]);

    const handleChange = (e, index) => {
        const updatedQuotes = [...quotes];
        updatedQuotes[index].contents = e.target.value;
        setQuotes(updatedQuotes);
    };

    const handleSave = async (quoteId, contents) => {
        try {
            await axios.put(`/quote/add/`, { id: { quoteId }, contents: { contents } });
            alert("Quote updated successfully!");
        } catch (err) {
            console.error("Error updating quote:", err);
            alert("Failed to update quote.");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">My Quotes</h2>

            {quotes.length === 0 ? (
                <p>No quotes found.</p>
            ) : (
                    quotes.map((quote, index) => (
                        <div className="card mb-3" key={quote.id}>
                            <div className="card-body">
                                <h5 className="card-title">{quote.author}</h5>
                                <textarea
                                    className="form-control mb-2"
                                    value={quote.contents}
                                    rows="3"
                                    onChange={(e) => handleChange(e, index)}
                                />
                                <button
                                    className="btn btn-success"
                                    onClick={() => handleSave(quote.id, quote.contents)}
                                >
                                    Save
                            </button>
                            </div>
                        </div>
                    ))
                )}
        </div>
    );
};

export default MyQuotes;
