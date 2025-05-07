import React, { useEffect, useState } from "react";
import axios from "axios";
import QuoteCard from "./QuoteCard"; // Assuming you have the QuoteCard component

const UserQuotes = ({ userId }) => {
    const [quotes, setQuotes] = useState([]);
    const [filteredQuotes, setFilteredQuotes] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    // Fetch quotes for the user
    useEffect(() => {
        async function fetchUserQuotes() {
            try {
                const res = await axios.get(`/api/quotes/user/${userId}`);
                setQuotes(res.data.data); // assuming apiSuccess({ data: [...] })
                setFilteredQuotes(res.data.data); // Initially, show all quotes
            } catch (err) {
                console.log("Error:", err);
            }
        }

        fetchUserQuotes();
    }, [userId]);

    // Show all quotes
    const handleShowAll = () => {
        setFilteredQuotes(quotes);
        setShowFavorites(false);
    };

    // Show only favorite quotes
    const handleShowFavorites = () => {
        const favorites = quotes.filter((quote) => quote.isFavorite);
        setFilteredQuotes(favorites);
        setShowFavorites(true);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Quotes by User #{userId}</h2>

            {/* Buttons to toggle quotes */}
            <div className="d-flex justify-content-end mb-3">
                <button className="btn btn-primary me-2" onClick={handleShowAll}>
                    All
                </button>
                <button className="btn btn-outline-danger" onClick={handleShowFavorites}>
                    My Favourites
                </button>
            </div>

            {/* Displaying the quotes */}
            {filteredQuotes.length === 0 ? (
                <p>No quotes available for this user.</p>
            ) : (
                    filteredQuotes.map((quote) => (
                        <QuoteCard key={quote.id} quote={quote} />
                    ))
                )}
        </div>
    );
};

export default UserQuotes;
