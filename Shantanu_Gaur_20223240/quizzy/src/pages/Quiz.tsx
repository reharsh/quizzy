//@ts-nocheck
import React, { useEffect, useState, useRef, useMemo } from "react";
import { Card } from "../components/Questioncard";
import { useNavigate, useSearchParams } from 'react-router-dom';
import TinderCard from 'react-tinder-card';
import "../components/Quiz.css";

const questions = {
    science: [
        { question: 'Water boils at 100 degrees Celsius.', answer: true },
    { question: 'The earth is flat.', answer: false },
    { question: 'Humans have five senses.', answer: false },
    { question: 'Lightning never strikes the same place twice.', answer: false },
    { question: 'The chemical symbol for gold is Ag.', answer: false },
    { question: 'Humans breathe out carbon dioxide.', answer: true },
    { question: 'There are 8 planets in our solar system.', answer: true },
    { question: 'Albert Einstein developed the theory of relativity.', answer: true },
    { question: 'Bats are blind.', answer: false },
    { question: 'Sound travels faster in water than in air.', answer: true },
    { question: 'Plants can make their own food through photosynthesis.', answer: true },
    { question: 'An atom is the smallest unit of matter.', answer: true },
    { question: 'The Earth revolves around the moon.', answer: false },
    { question: 'Diamonds are made of carbon.', answer: true },
    { question: 'The sun is a planet.', answer: false }
    ],
    popculture: [
        { question: 'The Great Wall of China is visible from space.', answer: false },
        { question: 'World War II ended in 1945.', answer: true },
        { question: 'The Beatles were originally from Australia.', answer: false },
        { question: 'Leonardo DiCaprio won his first Oscar for the movie "Inception".', answer: false },
        { question: 'The first Harry Potter book was published in 1997.', answer: true },
        { question: 'Beyoncé was a member of Destiny\'s Child.', answer: true },
        { question: 'The TV show "Friends" was set in Chicago.', answer: false },
        { question: 'Elvis Presley is known as the "King of Rock and Roll".', answer: true },
        { question: 'The movie "Titanic" was released in 2000.', answer: false },
        { question: 'Michael Jackson was part of the band "The Jackson 5".', answer: true },
        { question: 'The character Sherlock Holmes was created by Agatha Christie.', answer: false },
        { question: 'Madonna’s real name is Madonna.', answer: true },
        { question: 'The film "Frozen" is based on a book by Hans Christian Andersen.', answer: true },
        { question: 'Taylor Swift’s debut album was released in 2008.', answer: false },
        { question: 'The TV series "Breaking Bad" is about a high school chemistry teacher turned methamphetamine producer.', answer: true }
    ],
    technology: [
        { question: 'The first iPhone was released in 2007.', answer: true },
    { question: 'HTML stands for Hyper Text Markup Language.', answer: true },
    { question: 'The programming language Python is named after a snake.', answer: false },
    { question: 'Java and JavaScript are the same programming language.', answer: false },
    { question: 'Linux is an open-source operating system.', answer: true },
    { question: 'Wi-Fi stands for Wireless Fidelity.', answer: false },
    { question: 'The first computer virus was created in 1983.', answer: true },
    { question: 'Bitcoin is a type of cryptocurrency.', answer: true },
    { question: 'HTTP stands for HyperText Transfer Protocol.', answer: true },
    { question: 'CSS is used to add functionality to a website.', answer: false },
    { question: 'Steve Jobs was one of the founders of Microsoft.', answer: false },
    { question: 'The first email was sent in 1971.', answer: true },
    { question: 'USB stands for Universal Serial Bus.', answer: true },
    { question: 'The first mechanical computer was invented by Charles Babbage.', answer: true },
    { question: 'Tesla is known for producing electric vehicles.', answer: true }
    ],
};

export const Quiz = () => {
    const subject = localStorage.getItem("topic");
    const currentQuestions = questions[subject] || [];
// const currentQuestions2 = currentQuestions.reverse()
    const navigate = useNavigate();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastDirection, setLastDirection] = useState();
    const [score, setScore] = useState(0);
    

    const childRefs = useMemo(
        () => Array(currentQuestions.length).fill(0).map((i) => React.createRef()),
        [currentQuestions.length]
    );

  //  childRefs = childRefs.reverse()

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
