import React from 'react';
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
  const moods = [
    { name: 'Happy', icon: 'fa-face-smile', color: '#1db954' },
    { name: 'Sad', icon: 'fa-face-sad-tear', color: '#3e4a61' },
    { name: 'Energetic', icon: 'fa-bolt', color: '#f39c12' },
    { name: 'Relaxed', icon: 'fa-spa', color: '#6c5ce7' },
  ];

  const handleMoodClick = (mood) => {
    alert(`You selected: ${mood.name}`);
    // Your music logic goes here
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
            <i className={`fa-solid ${mood.icon} mood-icon`}></i>
            <p className="mood-name">{mood.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
