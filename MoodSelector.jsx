import React from "react";

const moods = [
    {
     name:"Happy",
     color:"#ffe066",
     message:"I'm feeling happy today! 😊",
     audio:"/songs/Happy.mp3",
    },
    {
     name:"Devotional",
     color:"#ff4500",
     message:"Feeling blessed and ready to worship today 😇",
     audio:"/songs/Devotional.mp3",
    },
    {
     name:"Motivated",
     color:"#3FA840",
     message:"Feeling the momentum and ready to go! 🏃",
     audio:"/songs/Motivated.mp3",
    },
    {
     name:"Relaxed",
     color:"#4682b4",
     message:"Feeling chill & Relaxed 😌🌿",
     audio:"/songs/Relaxed.mp3",
    },
    {
     name:"Romantic",
     color:"#bb437e",
     message:"You make my heart sing🎶🥰",
     audio:"/songs/Romantic.mp3",
    },
    {
     name:"Sad",
     color:"#808080",
     message:"I'm feeling a bit down 😔",
     audio:"/songs/Sad.mp3",
    },
    {
     name:"Travelling",
     color:"#FF6F61",
     message:"Ready to explore and soak up some adventures 🏞️☀️",
     audio:"/songs/Travelling.mp3",
    },
];
const MoodSelector = ({ onMoodChange }) => {
  return (
    <div className="mood-buttons">
      {moods.map((mood) => (
       <button
          key={mood.name}
          className="mood-button"
          style={{ backgroundColor: mood.color }}
          onClick={() => onMoodChange(mood)}
        >
          {mood.name}
        </button>
      ))}
    </div>
  );
};
export default MoodSelector;