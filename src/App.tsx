import React, { useState } from 'react';
import TopicSelection from './components/TopicSelection';
import Quiz from './components/Quiz';
import Score from './components/Score';

const App: React.FC = () => {
  const [topic, setTopic] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  return (
    <div className='container'>
      {!topic && <TopicSelection setTopic={setTopic} />}
      {topic && score === null && <Quiz topic={topic} setScore={setScore} />}
      {score !== null && <Score score={score} setTopic={setTopic} setScore={setScore} />}
    </div>
  );
};

export default App;
