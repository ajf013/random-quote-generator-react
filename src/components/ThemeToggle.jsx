import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ isDark, toggleTheme }) => {
    return (
        <div className="theme-card">
            <button className="theme-toggle" onClick={toggleTheme}>
                {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
        </div>
    );
};

export default ThemeToggle;
