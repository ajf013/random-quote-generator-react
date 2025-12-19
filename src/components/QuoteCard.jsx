import React from 'react';
import './QuoteCard.css';

const QuoteCard = ({ quote, onCopy }) => {
    if (!quote) return <div className="quote-placeholder">Select a category and generate a quote! ✨</div>;

    return (
        <div className="quote-card fade-in">
            <div className="quote-content">
                <p className="quote-text">{quote.text}</p>
                {quote.author && <p className="quote-author">- {quote.author}</p>}
            </div>
            <button className="copy-btn" onClick={() => onCopy(quote.text)} title="Copy Quote">
                📋 Copy
            </button>
        </div>
    );
};

export default QuoteCard;
