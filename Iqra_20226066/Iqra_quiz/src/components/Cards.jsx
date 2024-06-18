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
    { question: 'Brahmastra was released in 2015', answer: false },
    { question: 'Ranbir Kapoor was starred in Animal', answer: true },
    { question: 'Priyanka Chopras daughter name is Malti', answer: true },
    { question: 'Karan johar is the producer of animal movie', answer: false }
  ],
  mythology: [
    { question: 'Puranas were written before Vedas', answer: false },
    { question: 'There are in total four vedas', answer: true },
    { question: 'In Indian Mythology Asurs are villains', answer: true },
    { question: 'Pandavas were the protagonist in Mahabharat', answer: true },
    { question: 'Sita was held hostaged by Duryodhana', answer: false },
    { question: 'There are in total three vedas', answer: false },
    { question: 'Rig veda consists of charms and spells', answer: false },
    { question: 'Parvati is the wife of Lord Shiva', answer: true },
    { question: 'Lord krishna is one of the avatar of lord vishnu', answer: true },
    { question: 'There are in total 15 purana', answer: false },
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
  const canGoBack = currentIndex < currentQuestions.length - 1;
  const swipe = async (dir) => {
    if (canSwipe && currentIndex < currentQuestions.length) {
        await childRefs[currentQuestions.length-currentIndex-1].current.swipe(dir);
    }
};

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex-1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
};

  return (
    <div>
         <div className='buttoner'>
                <button onClick={()=>{
                    navigate("/")
                }}
                >End Quiz</button>
                <button onClick={()=>{
                     location.reload()
                }}
                >Retake Quiz</button>
            </div>
      <h1> {subject} Quizzy</h1>
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
      <br></br>
      {lastDirection ? (
        <h2 className='infoText'>You swiped {lastDirection}</h2>
      ) : (
        <h2 className='infoText' />
      )}
      <h2 key={lastDirection} className='infoText'>
                {Math.min(currentIndex,currentQuestions.length)} out of {currentQuestions.length}
                </h2>
      <h3> Score:{score}</h3>
      <h4> Left is False and Right is True</h4>
    </div>
  );
};