//@ts-nocheck
import React,{ useEffect, useState, useRef, useMemo } from "react";
import { Card } from "../components/Questioncard";
import { useNavigate, useSearchParams } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import "../components/Quiz.css"

const questions = {
    science: [
        // { question: 'The earth is flat.', answer: false },
        { question: 'Water boils at 100 degrees Celsiu.', answer: true },
        { question: 'Water boils at 100 degrees Celsis.', answer: true },
        { question: 'Water boils at 100 degrees Celsus.', answer: true },
        { question: 'Water boils at 100 degrees Cesius.', answer: true },
        { question: 'Water boils at 100 degres Celsius.', answer: true },
        { question: 'Water boils t 100 degrees Celsius.', answer: true },
        // Add more questions as needed
    ],
    popculture: [
        { question: 'The Great Wall of China is visible from space.', answer: false },
        { question: 'World War II ended in 1945.', answer: true },
        // Add more questions as needed
    ],
    technology: [
        { question: 'The first iPhone was released in 2007.', answer: true },
        { question: 'HTML stands for Hyper Text Markup Language.', answer: true },
        // Add more questions as needed
    ],
};

let correct = 0;
let idx = 0;

export const Quiz = () => {

    // const [answered, setAnswered] = useState(true);
    // const [searchParams,] = useSearchParams();
    // const [currentQuestion, setCurrentQuestion] = useState(0);

    // const title = localStorage.getItem("topic");
    // const currentQuestions = questions[title] || [];

    // const swiped = (direction, nameToDelete) => {
    //     console.log("removing: " + nameToDelete);
    //     setAnswered(false);
    // };

    // const outOfFrame = (name) => {
    //     console.log(name + " left the screen!");
    //     setAnswered(true);
    //     setCurrentQuestion((prev) => (prev + 1) % currentQuestions.length);
    // };

    // return (
    //     <div>
    //         <h2>{title?.toUpperCase()} Quiz</h2>
    //         {answered && currentQuestions.length > 0 &&
    //             <div className='cardContainer'>
    //             {currentQuestions.map((currentQuestions) =>
    //               <TinderCard className='swipe' key={currentQuestions.question} onSwipe={(dir) => swiped(dir, currentQuestions.question)} onCardLeftScreen={() => outOfFrame(currentQuestions.question)}>
    //                 <div className='card'>
    //                   <h3>{currentQuestions.question}</h3>
    //                 </div>
    //               </TinderCard>
    //             )}
    //           </div>
    //         }
    //         <p>Question {currentQuestion + 1} out of {currentQuestions.length}</p>
    //     </div>
    // );

    
    const subject = localStorage.getItem("topic");
    const currentQuestions = questions[subject] || [];
    const navigate = useNavigate();
      
      const [lastDirection, setLastDirection] = useState()
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [score, setScore] = useState(0);
    
      const swiped = (direction) => {
        console.log('removing: ' + currentQuestions[currentQuestionIndex].question);
        setLastDirection(direction);

        if ((currentQuestions[currentQuestionIndex].answer === true && direction === "right") ||
            (currentQuestions[currentQuestionIndex].answer === false && direction === "left")) {
            setScore((prevScore) => prevScore + 1);
        }

        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };
    
      const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
      }
    
      return (
        <div>
          {/* <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
          <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' /> */}
          <h1>{subject?.toUpperCase()} QUIZ</h1>
          <div className='cardContainer'>
            {currentQuestions.map((character) =>
              <TinderCard className='swipe' key={character.question} onSwipe={(dir) => swiped(dir, character.question)} onCardLeftScreen={() => outOfFrame(character.question)}
              preventSwipe={['up', 'down']}>
                <div 
                // style={{ backgroundImage: 'url(' + character.url + ')' }} 
                className='card'>
                  <h3>{character.question}</h3>
                </div>
              </TinderCard>
            )}
          </div>
          {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
          
          <button onClick={()=>{
            navigate("/")
          }} className='endButton'
          >End Quiz</button>

        <button onClick={()=>{
            location.reload()
          }} className="retakeButton"
          >Retake</button>
          
          <p>Question {Math.min(currentQuestionIndex,6)} out of {currentQuestions.length}</p>
          <p>Score: {score}</p>
        </div>
      )
    }

  
