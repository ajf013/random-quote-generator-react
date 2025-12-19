import { useState, useMemo } from 'react';
import quotesData from '../data/quotes.json';

const emojis = {
    love: '❤️',
    sad: '😢',
    happy: '😊',
    motivation: '💪',
    friendship: '🤝',
    wedding: '💍',
    marriage: '💑',
    sister: '👧',
    brother: '👦',
    father: '👨',
    mother: '👩'
};

export const useQuotes = () => {
    const [category, setCategory] = useState('love');
    const [language, setLanguage] = useState('en');
    const [currentQuote, setCurrentQuote] = useState(null);

    // Filter quotes based on selection
    const filteredQuotes = useMemo(() => {
        return quotesData.filter(q => q.category === category && q.lang === language);
    }, [category, language]);

    // Generate random quote
    const generateQuote = () => {
        if (filteredQuotes.length > 0) {
            const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
            const quote = filteredQuotes[randomIndex];
            // Add emoji based on category
            const quoteWithEmoji = {
                ...quote,
                // Emojis embedded in text or separate? User requested "concern emojis added" -> appended likely better
                text: `${quote.text} ${emojis[category] || ''}`
            };
            setCurrentQuote(quoteWithEmoji);
        } else {
            setCurrentQuote(null);
        }
    };

    // Generate initial quote on load/change if needed, or wait for user interaction?
    // Usually better to have one ready.
    // We'll let the component call generateQuote on mount or change.

    return {
        category,
        setCategory,
        language,
        setLanguage,
        currentQuote,
        generateQuote,
        categories: Object.keys(emojis)
    };
};
