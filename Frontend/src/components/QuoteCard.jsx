import React, { useState } from 'react';
import axios from 'axios';

const QuoteCard = ({ quote }) => {
    const [isFavorite, setIsFavorite] = useState(quote.isFavorite);

    const toggleFavorite = () => {
        if (isFavorite) {
            axios.delete(`/api/favorites/${quote.id}`)
                .then(() => setIsFavorite(false))
                .catch((err) => console.log(err));
        } else {
            axios.post('/api/favorites', {
                quoteId: quote.id,
                author: quote.author,
                contents: quote.contents
            })
                .then(() => setIsFavorite(true))
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{quote.author}</h5>
                <p className="card-text">{quote.contents}</p>
                <button
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={toggleFavorite}
                >
                    <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i> Favorite
                </button>
            </div>
        </div>
    );
};

export default QuoteCard;
