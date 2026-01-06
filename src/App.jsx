import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CharacterLogo from './assets/Components/CharacterLogo'
import LetterDensity from './assets/Components/LetterDensity'
import StatsCard from './assets/Components/StatesCard'
import TypingAnimation from './assets/Components/TypingAnimation'
function App() {

  const [text, setText] = useState("");
  const [excludeSpaces, setExcludeSpaces] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // ---------- Calculations ----------
  const characters = excludeSpaces
    ? text.replace(/\s/g, "").length
    : text.length;

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const sentences = text.trim()
    ? text.split(/[.!?]+/).filter(Boolean).length
    : 0;

  const readingTime = Math.ceil(words / 200); // 200 wpm

  // ---------- Theme ----------
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`page-bg ${darkMode ? "dark" : "light"}`}>
      <div className="container">
        {/* ================= HEADER ================= */}
        <header className="header">
          <div className="logo">
            <CharacterLogo />
            <span>Character Counter</span>
          </div>

          <button className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </header>

        {/* ================= TITLE ================= */}
        <h1 className="title">
          <span className="typing">
            <TypingAnimation text="Analyze your text in real-time." />
          </span>
          {/* <span className="fade">in real-time.</span> */}
        </h1>

        {/* ================= TEXTAREA ================= */}
        <textarea
          className="textarea"
          placeholder="Start typing here... (or paste your text)"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* ================= OPTIONS ================= */}
        <div className="options">
          <label>
            <input
              type="checkbox"
              checked={excludeSpaces}
              onChange={() => setExcludeSpaces(!excludeSpaces)}
            />{" "}
            Exclude Spaces
          </label>

          <span>
            Approx. reading time:{" "}
            {words === 0 ? "0 minute" : `${readingTime} minute`}
          </span>
        </div>

        {/* ================= STATS ================= */}
        <div className="stats">
          <StatsCard
            value={characters}
            label="Total Characters"
            color="purple"
          />
          <StatsCard value={words} label="Word Count" color="orange" />
          <StatsCard
            value={sentences}
            label="Sentence Count"
            color="peach"
          />
        </div>

        {/* ================= LETTER DENSITY ================= */}
        <LetterDensity text={text} />
      </div>
    </div>
  );

}

export default App
