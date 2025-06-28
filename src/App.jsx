import React, { useState, useRef } from 'react';
import './App.css';

function Waveform() {
  return (
    <div className="waveform">
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
}

function App() {
  const audioRef = useRef(null);
  const [currentMood, setCurrentMood] = useState(null);

  const moods = [
    { name: 'Happy', icon: 'fa-face-smile', color: '#1db954', message: "I'm feeling happy today! 😊", audio: '/songs/Happy.mp3' },
    { name: 'Sad', icon: 'fa-face-sad-tear', color: '#3e4a61', message: "I'm feeling a bit down 😔", audio: '/songs/Sad.mp3' },
    { name: 'Energetic', icon: 'fa-bolt', color: '#f39c12', message: "Feeling the momentum and ready to go! 🏃", audio: '/songs/Motivated.mp3' },
    { name: 'Relaxed', icon: 'fa-spa', color: '#6c5ce7', message: "Feeling chill & Relaxed 😌🌿", audio: '/songs/Relaxed.mp3' },
  ];

  const handleMoodClick = (mood) => {
    setCurrentMood(mood);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play().catch(err => {
        console.error("Audio play error:", err);
      });
    }
  };

  return (
    <div className="app-container">
      <h1 className="main-heading">🎵 Music on Mood</h1>
      <Waveform />

      <div className="card-grid">
        {moods.map((mood, index) => (
          <div
            key={index}
            className="mood-card"
            style={{ backgroundColor: mood.color }}
            onClick={() => handleMoodClick(mood)}
          >
            <i className={`fas ${mood.icon} mood-icon`}></i>
            <p className="mood-name">{mood.name}</p>
          </div>
        ))}
      </div>

      {currentMood && (
        <div className="mood-message" style={{ backgroundColor: currentMood.color }}>
          <p>{currentMood.message}</p>
          <audio ref={audioRef} controls>
            <source src={currentMood.audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default App;
