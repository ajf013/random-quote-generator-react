import React, { useState, useEffect } from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard';
import Controls from './components/Controls';
import ThemeToggle from './components/ThemeToggle';
import Footer from './components/Footer/Footer';
import { useQuotes } from './hooks/useQuotes';

function App() {
  const {
    category,
    setCategory,
    language,
    setLanguage,
    currentQuote,
    generateQuote,
    categories
  } = useQuotes();

  // Theme state
  const [isDark, setIsDark] = useState(false);

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDark(prev => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      document.body.setAttribute('data-theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  // Copy to clipboard
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Quote copied to clipboard! 📋');
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className={`app-container ${isDark ? 'dark-mode' : ''}`}>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />

      <header className="header">
        <h1 className="title">Random Quote Generator</h1>
        <p>Inspiration for every mood ✨</p>
      </header>

      <main>
        <QuoteCard quote={currentQuote} onCopy={handleCopy} />

        <Controls
          categories={categories}
          selectedCategory={category}
          setSelectedCategory={setCategory}
          selectedLanguage={language}
          setSelectedLanguage={setLanguage}
          onGenerate={generateQuote}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
