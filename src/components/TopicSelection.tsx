import React from 'react';

interface TopicSelectionProps {
  setTopic: (topic: string) => void;
}

const topics = ['Science', 'History', 'Technology'];

const TopicSelection: React.FC<TopicSelectionProps> = ({ setTopic }) => {
  return (
    <div>
      <h1>Select a Topic</h1>
      {topics.map((topic) => (
        <button key={topic} onClick={() => setTopic(topic)}>
          {topic}
        </button>
      ))}
    </div>
  );
};

export default TopicSelection;
