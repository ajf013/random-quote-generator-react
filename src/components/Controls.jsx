import React from 'react';
import './Controls.css';

const Controls = ({
    categories,
    selectedCategory,
    setSelectedCategory,
    selectedLanguage,
    setSelectedLanguage,
    onGenerate
}) => {
    return (
        <div className="controls-container">
            <div className="selectors">
                <div className="select-group">
                    <label>Category</label>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="select-group">
                    <label>Language</label>
                    <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                    >
                        <option value="en">English</option>
                        <option value="ta">Tamil (தமிழ்)</option>
                    </select>
                </div>
            </div>

            <button className="generate-btn" onClick={onGenerate}>
                Generate Quote 🎲
            </button>
        </div>
    );
};

export default Controls;
