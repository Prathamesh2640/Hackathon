// src/services/quoteService.js
import axios from 'axios';

const API_BASE = '/api/favorites';

export const addFavorite = (quote) => {
    return axios.post(API_BASE, {
        quoteId: quote.id,
        author: quote.author,
        contents: quote.contents
    });
};

export const removeFavorite = (quoteId) => {
    return axios.delete(`${API_BASE}/${quoteId}`);
};

export const getFavorites = () => {
    return axios.get(API_BASE);
};
