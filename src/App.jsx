import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import MoodSelector from './components/MoodSelector';

function App() {
  const [mood, setMood] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (mood?.audio && audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play().catch(err => console.warn("Audio play failed", err));
    }
  }, [mood]);

  return (
    <div className='App' style={{ backgroundColor: mood?.color || "#f1f3f5" }}>
      <h1>Welcome to Mood App</h1>
      <MoodSelector onMoodChange={setMood} />
      {mood && (
        <>
          <p className='message'>{mood.message}</p>
          <audio ref={audioRef} controls>
            <source src={mood.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </>
      )}
    </div>
  );
}

export default App;
