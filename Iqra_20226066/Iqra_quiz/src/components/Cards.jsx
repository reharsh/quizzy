import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './Cards.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ques = {
  science: [
    { question: 'Iron is the most abundant metal in Earth’s crust.', answer: false },
    { question: 'Helium gives off a pungent odor.', answer: false },
    { question: 'The plants dinosaurs ate do not exist today.', answer: false },
    { question: 'There are 500 stars visible to the naked eye from Earth.', answer: false },
    { question: 'Silver is the most conductive of metals.', answer: true },
    { question: 'Energy can be transmitted wirelessly.', answer: true },
    { question: 'The speed of sound is constant.', answer: false },
    { question: 'A meteor would burn up more rapidly in the atmosphere of Mars than it would passing through the Earth’s atmosphere.', answer: false },
    { question: 'Water is the most common element on Earth.', answer: false },
    { question: 'There are stars made of diamonds.', answer: true }

  ],
  popculture: [
    { question: 'George Michael and Andrew Ridgeley were founding members of the 80s group Wham!', answer: true },
    { question: 'Avengers stars Michael Keaton as a DC Comics superhero?', answer: false },
    { question: 'Prince Charles and Princess Diana tied knot in 1981', answer: true },
    { question: 'Launched in 1980, pac-man features four ghosts named Blinky, Pinky, Inky and Clyde', answer: true },
    { question: 'Disney Land is the  Disney World theme park opened on May 1, 1989 ', answer: false },
    { question: 'The 1984 Olympic Games were held in  Los Angeles', answer: true },
    { question: 'vyihoerj', answer: true },
    { question: 'vyihoerj', answer: true },
    { question: 'vyihoerj', answer: true },
    { question: 'vyihoerj', answer: true }
  ],
  mythology: [
    { question: 'vyihoerj', answer: true },
    { question: 'bhujroij', answer: true }
  ]
};

export const Cards = () => {
  const subject = localStorage.getItem("topic");
  const currentQuestions = ques[subject] || [];
  
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
    const [lastDirection, setLastDirection] = useState();
    const [score, setScore] = useState(0);
    
    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
    };
    const canSwipe = currentIndex >= 0;
    const swiped = (direction, ques, index) => {
        setLastDirection(direction);
  if ((currentQuestions[currentIndex].answer === true && direction === "right") ||
  (currentQuestions[currentIndex].answer === false && direction === "left"))
{
  setScore((prevScore) => prevScore + 1);
}

 updateCurrentIndex((prevIndex) => prevIndex + 1);
};

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!');
  };

  return (
    <div>
      <h1>Quizzy</h1>
      <div className='cardContainer'>
        {currentQuestions.map((character) => (
          <TinderCard
            className='swipe'
            key={character.question}
            onSwipe={(dir) => swiped(dir, character.question)}
            onCardLeftScreen={() => outOfFrame(character.question)}
          
            preventSwipe={['up', 'down']}>
            <div className='card'>
              <h3>{character.question}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection ? (
        <h2 className='infoText'>You swiped {lastDirection}</h2>
      ) : (
        <h2 className='infoText' />
      )}
      <h3> Score:{score}</h3>
    </div>
  );
};