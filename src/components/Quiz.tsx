import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import '../Styles/Quiz.css'; 

interface QuizProps {
  topic: string;
  setScore: (score: number) => void;
}

interface Question {
  question: string;
  answer: string;
}

const Quiz: React.FC<QuizProps> = ({ topic, setScore }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState<string | null>(null);
  const [timer, setTimer] = useState(60);
  const [skipped, setSkipped] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [scoreCalculated, setScoreCalculated] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`/src/questions/${topic}/questions.json`);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, [topic]);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      handleSkip();
    }
  }, [timer]);

  const handleAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    checkAnswer(userAnswer.trim().toLowerCase());
    setUserAnswer('');
  };

  const handleSkip = () => {
    setSkipped(prevSkipped => prevSkipped + 1);
    if (index + 1 < questions.length) {
      setIndex(prevIndex => prevIndex + 1);
      setShowAnswer(null);
      setTimer(60);
    } else {
      endQuiz();
    }
  };
  const onclickHandlerHome=()=>{
    window.location.href='/'; // i would have used axios 
  }

  const checkAnswer = (answer: string) => {
    const correctAnswer = questions[index].answer.toLowerCase().trim();
    
    if (answer === correctAnswer) {
      setCorrectAnswers(prevCount => prevCount + 1); 
      setShowAnswer('Correct');
    } else {
      setShowAnswer(`Wrong! Correct answer: ${questions[index].answer}`);
    }
    setTimeout(() => {
      if (index + 1 < questions.length) {
        setIndex(prevIndex => prevIndex + 1);
        setShowAnswer(null);
        setTimer(60);
      } else {
        endQuiz();
      }
    }, 2000);
  };

  const endQuiz = () => {
    const calculatedScore = correctAnswers;
    console.log(`Calculated Score: ${calculatedScore}`);
    setScoreCalculated(true);
  };

  if (questions.length === 0) {
    return <p>Loading...</p>;
  }

  if (scoreCalculated) {
    return (
      <div className="quiz-container">
        <h1>Quiz Ended!</h1>
        <p>Your final score: {correctAnswers}</p>
        <p>Skipped :{skipped}</p>
        <button onClick={onclickHandlerHome}>Home</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>{questions[index].question}</h1>
      <p className="question-number">Question {index + 1} of {questions.length}</p>
      <p className="timer">Time left: {timer}s</p>
      {showAnswer ? (
        <p className={`answer-message ${showAnswer === 'Correct' ? 'correct' : 'wrong'}`}>
          {showAnswer}
        </p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" value={userAnswer} onChange={handleAnswerChange} />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleSkip}>Skip</button>
        </form>
      )}
    </div>
  );
};

export default Quiz;
