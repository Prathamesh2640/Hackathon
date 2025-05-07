import React, { useState } from 'react';
import axios from 'axios';

const QuoteCard = ({ quote }) => {
    const [isFavorite, setIsFavorite] = useState(quote.isFavorite);

    const handleFavoriteToggle = async () => {
        try {
            if (isFavorite) {
                await axios.delete(`/api/favorites/${quote.id}`);
            } else {
                await axios.post('/api/favorites', {
                    quoteId: quote.id,
                    author: quote.author,
                    contents: quote.contents
                });
            }
            setIsFavorite(!isFavorite);
        } catch (error) {
            console.error('Error updating favorite:', error);
        }
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{quote.author}</h5>
                <p className="card-text">{quote.contents}</p>
                <button
                    className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-danger'}`}
                    onClick={handleFavoriteToggle}
                >
                    <i className={`bi ${isFavorite ? 'bi-heart-fill' : 'bi-heart'}`}></i> Favorite
        </button>
            </div>
        </div>
    );
};

export default QuoteCard;
