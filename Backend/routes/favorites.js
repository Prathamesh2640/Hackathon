// routes/favorites.js
const express = require('express');
const router = express.Router();

let favoriteQuotes = [];

router.post('/', (req, res) => {
    const { quoteId, author, contents } = req.body;
    const exists = favoriteQuotes.some(q => q.quoteId === quoteId);
    if (exists) {
        return res.status(409).json({ message: 'Quote already favorited' });
    }

    favoriteQuotes.push({ quoteId, author, contents });
    res.status(201).json({ message: 'Quote favorited' });
});


router.delete('/:quoteId', (req, res) => {
    const quoteId = req.params.quoteId;
    const index = favoriteQuotes.findIndex(q => q.quoteId === quoteId);

    if (index === -1) {
        return res.status(404).json({ message: 'Quote not found in favorites' });
    }

    favoriteQuotes.splice(index, 1);
    res.json({ message: 'Quote unfavorited' });
});

router.get('/', (req, res) => {
    res.json(favoriteQuotes);
});

module.exports = router;
