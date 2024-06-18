import React from 'react';

interface ScoreProps {
  score: number;
  setTopic: (topic: string | null) => void;
  setScore: (score: number | null) => void;
}

const Score: React.FC<ScoreProps> = ({ score, setTopic, setScore }) => {
  return (
    <div>
      <h1>Your score: {score}</h1>
      <button onClick={() => { setScore(null); setTopic(null); }}>Home</button>
      <button onClick={() => setScore(null)}>Retry</button>
    </div>
  );
};

export default Score;
