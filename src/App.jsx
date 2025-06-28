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

  // ...existing code...
  const moods = [
    { name: 'Happy', icon: 'fa-face-smile', color: '#1db954', message: "I'm feeling happy today! 😊", audio: '/songs/Happy.mp3' },
    { name: 'Sad', icon: 'fa-face-sad-tear', color: '#3e4a61', message: "I'm feeling a bit down 😔", audio: '/songs/Sad.mp3' },
    { name: 'Motivated', icon: 'fa-bolt', color: '#f39c12', message: "Feeling the momentum and ready to go! 🏃", audio: '/songs/Motivated.mp3' },
    { name: 'Relaxed', icon: 'fa-spa', color: '#6c5ce7', message: "Feeling chill & Relaxed 😌🌿", audio: '/songs/Relaxed.mp3' },
    { name: 'Devotional', icon: 'fa-hands-praying', color: '#a29bfe', message: "In a devotional mood 🙏", audio: '/songs/Devotional.mp3' },
    { name: 'Travelling', icon: 'fa-plane', color: '#00b894', message: "On the road and loving the journey! ✈️", audio: '/songs/Travelling.mp3' },
    { name: 'Romantic', icon: 'fa-heart', color: '#e17055', message: "Feeling romantic and dreamy 💖", audio: '/songs/Romantic.mp3' },
  ];
// ...existing code...

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
