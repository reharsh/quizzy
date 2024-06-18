import React from 'react'
import {TinderCard } from 'react-tinder-card';
import './Cards.css'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState , useMemo} from 'react';

  
const ques ={science:[
    {
        Question: 'xyz',answer:true
    },
    {
        Question: 'pqr', answer:false
    }
  
  ],
  
  popculture:[
    {
        Question: 'ktrjoij',answer:false
    },
    {
        Question:'hgeiufho4w', answer:true
    }
  
  ],
  mythology:[
    {
        Question:'vyihoerj',answer:true
    },
    {
        Question:'bhujroij', answer:true
    }
  ]
  };

  export const Cards= () => {
    const subject = localStorage.getItem("topic");
    const currentQuestions = ques[subject] || [];

    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastDirection, setLastDirection] = useState();
    const [score, setScore] = useState(0);
    

    const childRefs = useMemo(
        () => Array(currentQuestions.length).fill(0).map((i) => React.createRef()),
        [currentQuestions.length]
    );
    const updateCurrentIndex = (val) => {
        setCurrentIndex(val);
    };

    const canGoBack = currentIndex < currentQuestions.length - 1;
    const canSwipe = currentIndex >= 0;

    const swiped = (direction, question, index) => {
        setLastDirection(direction);

        if ((currentQuestions[index].answer === true && direction === "right") ||
            (currentQuestions[index].answer === false && direction === "left")) {
            setScore((prevScore) => prevScore + 1);
        }

        updateCurrentIndex((prevIndex) => prevIndex + 1);
    };

    const outOfFrame = (name, idx) => {
        console.log(`${name} (${idx}) left the screen!`);
    };

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
            <div>
                <button onClick={()=>{
                    navigate("/")
                }}
                >End Quiz</button>
                <button onClick={()=>{
                     location.reload()
                }}
                >Retake Quiz</button>
            </div>
            <h1>{subject?.toUpperCase()} QUIZ</h1>
            <div className='cardContainer'>
                {currentQuestions.map((character, index) => (
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe'
                        key={character.question}
                        onSwipe={(dir) => swiped(dir, character.question, index)}
                        onCardLeftScreen={() => outOfFrame(character.question, index)}
                        preventSwipe={['up', 'down']}
                    >
                        <div className='card'>
                            <h3>{character.question}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
            <div className='buttons'>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}>Swipe left!</button>
                <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}>Swipe right!</button>
            </div>
                <h2 key={lastDirection} className='infoText'>
                {Math.min(currentIndex,currentQuestions.length)} out of {currentQuestions.length}
                </h2>
            
            <h2>Score: {score}</h2>
        </div>
    );
};
